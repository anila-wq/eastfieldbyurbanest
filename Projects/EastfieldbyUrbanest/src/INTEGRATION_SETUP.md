# Eastfield - Google Forms & Webhook Integration Setup

## ✅ Configuration Complete

All forms on the Eastfield landing page are now integrated with your Google Forms and CRM webhook.

### 🔧 Configured Endpoints

**Google Forms:**
- Form ID: `1FAIpQLSfBv0f3DNM_XmchfLA_O_YeDUga9el5g_KPTzgtcWCtlQP-Pw`
- Entry mappings:
  - Name: `entry.1991111344`
  - Email: `entry.1553613368`
  - Phone: `entry.2098589997`

**Webhook:**
- URL: `https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=483041`
- Method: POST
- Format: JSON

---

## 📋 Forms Integrated

All the following buttons/forms now submit to both Google Forms AND your webhook:

### 1. **Enquire Now** (Multiple locations)
- Hero section desktop & mobile
- Bottom navigation bar
- Payment plan popup
- Source: Various locations on the site

### 2. **Book a Site Visit**
- Location section
- Includes optional date and time fields
- Source: Location section

### 3. **Master Plan Download**
- Project Overview section icons
- Triggers contact form before showing download
- Source: Project Overview section

### 4. **Floor Plan Download**
- Project Overview section icons
- Triggers contact form before showing download
- Source: Project Overview section

### 5. **Brochure Download**
- Project Overview section icons
- Triggers contact form before showing download
- Source: Project Overview section

### 6. **Contact Our Experts**
- FAQ section "Still Have Questions?" card
- Source: FAQ section

---

## 🔄 Data Flow

When a user submits any form:

1. **Form Validation** - Client-side validation ensures all required fields are filled
2. **Google Forms Submission** - Data is sent to your Google Form (using no-cors mode)
3. **Webhook Submission** - Data is sent to your CRM webhook as JSON
4. **Local Backup** - Data is stored in localStorage for backup
5. **User Feedback** - Toast notification confirms submission

### Webhook Payload Structure

```json
{
  "formType": "enquiry" | "siteVisit",
  "timestamp": "2025-10-14T10:30:00.000Z",
  "source": "Eastfield by Urbanest Realty",
  "data": {
    "name": "User Name",
    "email": "user@example.com",
    "phone": "9876543210",
    "message": "Context about which button was clicked",
    "date": "2025-10-20", // Only for site visits
    "time": "14:00"       // Only for site visits
  }
}
```

---

## 📱 User Experience

- **Loading States**: Buttons show "Submitting..." during submission
- **Success Messages**: Green toast notifications on success
- **Error Handling**: Red toast notifications if submission fails
- **Disabled States**: Forms can't be double-submitted
- **Responsive**: Works perfectly on mobile and desktop

---

## 🧪 Testing

To test the integration:

1. **Open the site** in your browser
2. **Click any of the action buttons** (Enquire Now, Book Site Visit, etc.)
3. **Fill out the form** with test data
4. **Submit** and watch for the success toast
5. **Check your Google Form responses** - should see the entry
6. **Check your CRM webhook logs** - should receive the JSON payload

---

## 📄 Files Modified

- `/config/forms-config.ts` - Configuration file with your credentials
- `/utils/form-submission.ts` - Form submission utility
- `/components/eastfield/Hero.tsx` - Enquire Now forms
- `/components/eastfield/Location.tsx` - Book Site Visit form
- `/components/eastfield/ProjectOverview.tsx` - Master Plan, Floor Plan, Brochure
- `/components/eastfield/BottomNavigation.tsx` - Bottom enquiry form
- `/components/eastfield/FAQ.tsx` - Contact Our Experts form
- `/App.tsx` - Added Toaster component for notifications

---

## 🔐 Security Note

⚠️ **Important**: The Google Form ID and webhook URL are visible in the frontend code. This is acceptable for Google Forms (they're meant to be public) and webhooks (they should have their own authentication).

For production use:
- Ensure your webhook endpoint validates requests
- Consider adding rate limiting to prevent spam
- Use HTTPS for all communications
- Never store sensitive data in localStorage

---

## 📞 Support

All form submissions are now automatically sent to:
✅ Google Forms (for spreadsheet tracking)
✅ CRM Webhook (for automated lead processing)

If you need to modify the integration, edit `/config/forms-config.ts`
