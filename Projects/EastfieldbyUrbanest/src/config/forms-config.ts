/**
 * Forms Integration Configuration
 * 
 * IMPORTANT: These values should be replaced with your actual credentials.
 * For production, move these to environment variables and use a backend service.
 */

export const formsConfig = {
  // Google Forms Configuration
  googleForms: {
    enabled: true, // Set to true to enable Google Forms integration
    
    // ENQUIRY FORM - Get these from your Google Form
    enquiryForm: {
      formId: '1FAIpQLSfBv0f3DNM_XmchfLA_O_YeDUga9el5g_KPTzgtcWCtlQP-Pw',
      actionUrl: '', // Will be auto-generated from formId
      fields: {
        name: 'entry.1991111344',
        email: 'entry.1553613368',
        phone: 'entry.2098589997',
        message: 'entry.1991111344', // Using name field for message as well
      }
    },
    
    // SITE VISIT FORM - Same Google Form
    siteVisitForm: {
      formId: '1FAIpQLSfBv0f3DNM_XmchfLA_O_YeDUga9el5g_KPTzgtcWCtlQP-Pw',
      actionUrl: '', // Will be auto-generated from formId
      fields: {
        name: 'entry.1991111344',
        email: 'entry.1553613368',
        phone: 'entry.2098589997',
        date: 'entry.1991111344', // Using name field for additional info
        time: 'entry.1991111344', // Using name field for additional info
      }
    }
  },

  // Webhook Configuration
  webhooks: {
    enabled: true, // Set to true to enable webhook integration
    
    // Add your webhook URLs here
    endpoints: [
      {
        url: 'https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=483041',
        name: 'Cratio CRM Webhook',
        enabled: true,
      }
    ]
  }
};

/**
 * HOW TO SET UP GOOGLE FORMS:
 * 
 * 1. Create a Google Form with the required fields
 * 2. Get the Form ID from the URL:
 *    https://docs.google.com/forms/d/FORM_ID_HERE/edit
 * 
 * 3. Get Entry IDs for each field:
 *    - Open your form in edit mode
 *    - Right-click on a field and select "Inspect"
 *    - Look for the "entry." ID in the HTML
 *    - Example: <input name="entry.123456789">
 * 
 * 4. Replace the placeholder values above with your actual IDs
 */

/**
 * HOW TO SET UP WEBHOOKS:
 * 
 * 1. Create a webhook in your automation tool:
 *    - Zapier: Create a "Catch Hook" trigger
 *    - Make.com: Create a "Webhook" module
 *    - Custom: Set up an endpoint that accepts POST requests
 * 
 * 2. Copy the webhook URL
 * 3. Replace 'YOUR_WEBHOOK_URL_HERE' with your actual URL
 * 4. Set enabled to true
 * 
 * The webhook will receive JSON data like:
 * {
 *   "formType": "enquiry" or "siteVisit",
 *   "timestamp": "ISO timestamp",
 *   "data": { name, email, phone, ... }
 * }
 */

// Helper function to get Google Forms action URL
export function getGoogleFormUrl(formId: string): string {
  return `https://docs.google.com/forms/d/e/${formId}/formResponse`;
}

// Helper function to check if integrations are properly configured
export function isConfigured(): boolean {
  const hasGoogleForms = formsConfig.googleForms.enabled && 
    formsConfig.googleForms.enquiryForm.formId !== 'YOUR_GOOGLE_FORM_ID';
  
  const hasWebhooks = formsConfig.webhooks.enabled && 
    formsConfig.webhooks.endpoints.some(w => w.enabled && w.url !== 'YOUR_WEBHOOK_URL_HERE');
  
  return hasGoogleForms || hasWebhooks;
}
