import { formsConfig, getGoogleFormUrl } from '../config/forms-config';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  date?: string;
  time?: string;
}

export interface SubmissionResult {
  success: boolean;
  googleForms?: boolean;
  webhooks?: boolean;
  errors?: string[];
}

/**
 * Submit form data to Google Forms
 */
async function submitToGoogleForms(
  formData: FormData,
  formType: 'enquiry' | 'siteVisit'
): Promise<boolean> {
  try {
    const config = formType === 'enquiry' 
      ? formsConfig.googleForms.enquiryForm 
      : formsConfig.googleForms.siteVisitForm;

    if (config.formId === 'YOUR_GOOGLE_FORM_ID') {
      console.warn('Google Forms not configured. Please update forms-config.ts');
      return false;
    }

    const formUrl = getGoogleFormUrl(config.formId);
    const formBody = new URLSearchParams();

    // Map form data to Google Forms entry IDs
    formBody.append(config.fields.name, formData.name);
    formBody.append(config.fields.email, formData.email);
    formBody.append(config.fields.phone, formData.phone);

    if (formType === 'enquiry' && formData.message) {
      formBody.append(config.fields.message, formData.message);
    }

    if (formType === 'siteVisit') {
      if (formData.date) {
        formBody.append(config.fields.date, formData.date);
      }
      if (formData.time) {
        formBody.append(config.fields.time, formData.time);
      }
    }

    // Submit to Google Forms using no-cors mode
    const response = await fetch(formUrl, {
      method: 'POST',
      body: formBody,
      mode: 'no-cors', // Required for Google Forms
    });

    // With no-cors, we can't read the response, so we assume success
    console.log('Google Forms submission sent');
    return true;
  } catch (error) {
    console.error('Google Forms submission error:', error);
    return false;
  }
}

/**
 * Submit form data to webhooks
 */
async function submitToWebhooks(
  formData: FormData,
  formType: 'enquiry' | 'siteVisit'
): Promise<boolean> {
  const enabledWebhooks = formsConfig.webhooks.endpoints.filter(w => w.enabled);
  
  if (enabledWebhooks.length === 0) {
    console.warn('No webhooks configured. Please update forms-config.ts');
    return false;
  }

  const webhookData = {
    formType,
    timestamp: new Date().toISOString(),
    source: 'Eastfield by Urbanest Realty',
    data: formData,
  };

  const results = await Promise.allSettled(
    enabledWebhooks.map(webhook => {
      if (webhook.url === 'YOUR_WEBHOOK_URL_HERE') {
        console.warn(`Webhook "${webhook.name}" not configured`);
        return Promise.reject('Not configured');
      }

      return fetch(webhook.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Webhook ${webhook.name} failed: ${response.statusText}`);
          }
          console.log(`Webhook "${webhook.name}" submission successful`);
          return response;
        });
    })
  );

  // Return true if at least one webhook succeeded
  const hasSuccess = results.some(result => result.status === 'fulfilled');
  return hasSuccess;
}

/**
 * Main function to submit form data to all configured destinations
 */
export async function submitForm(
  formData: FormData,
  formType: 'enquiry' | 'siteVisit'
): Promise<SubmissionResult> {
  const result: SubmissionResult = {
    success: false,
    errors: [],
  };

  // Submit to Google Forms if enabled
  if (formsConfig.googleForms.enabled) {
    try {
      const googleSuccess = await submitToGoogleForms(formData, formType);
      result.googleForms = googleSuccess;
      if (googleSuccess) {
        result.success = true;
      }
    } catch (error) {
      result.errors?.push('Google Forms submission failed');
      console.error('Google Forms error:', error);
    }
  }

  // Submit to webhooks if enabled
  if (formsConfig.webhooks.enabled) {
    try {
      const webhooksSuccess = await submitToWebhooks(formData, formType);
      result.webhooks = webhooksSuccess;
      if (webhooksSuccess) {
        result.success = true;
      }
    } catch (error) {
      result.errors?.push('Webhook submission failed');
      console.error('Webhooks error:', error);
    }
  }

  // If no integrations are configured, still show success for demo purposes
  if (!formsConfig.googleForms.enabled && !formsConfig.webhooks.enabled) {
    console.warn('No integrations configured. Form data:', formData);
    result.success = true;
    result.errors?.push('No integrations configured - form data logged to console');
  }

  return result;
}
