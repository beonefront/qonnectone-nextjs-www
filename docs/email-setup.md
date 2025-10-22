# Email Setup Instructions

## Overview
This document explains how to set up email sending functionality for the QonnectOne website using Resend API.

## Prerequisites
- Resend account (sign up at [resend.com](https://resend.com))
- Node.js and npm installed
- Next.js project running

## Setup Steps

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get API Key
1. Log in to your Resend dashboard
2. Go to "API Keys" section
3. Click "Create API Key"
4. Give it a name (e.g., "QonnectOne Website")
5. Copy the generated API key

### 3. Configure Environment Variables
Create a `.env.local` file in your project root with:

```bash
# Resend API Configuration
RESEND_API_KEY=your_actual_api_key_here

# Email Configuration
INTERNAL_EMAIL=office@qonnectone.com
```

### 4. Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., qonnectone.com)
3. Follow the DNS verification steps
4. This allows you to send emails from your domain instead of resend.com

### 5. Test the Setup
1. Start your development server: `npm run dev`
2. Go to your website and try submitting the email form
3. Check that you receive:
   - Internal notification at office@qonnectone.com
   - Confirmation email at the submitted address

## Email Templates

### Internal Notification Email
- **To**: office@qonnectone.com
- **Subject**: "Nowy lead - formularz kontaktowy"
- **Content**: Professional template with lead details and next steps

### Confirmation Email
- **To**: User's submitted email
- **Subject**: "Dziękujemy za zainteresowanie QonnectOne!"
- **Content**: Thank you message with company information and next steps

## Troubleshooting

### Common Issues

1. **"Invalid API Key" error**
   - Verify your API key is correct
   - Check that the key is active in Resend dashboard

2. **"Domain not verified" error**
   - Either verify your domain in Resend
   - Or use the default resend.com domain for testing

3. **Emails not being received**
   - Check spam folder
   - Verify email addresses are correct
   - Check Resend dashboard for delivery status

### Development vs Production

- **Development**: Uses resend.com domain (no verification needed)
- **Production**: Should use your verified domain for better deliverability

## API Endpoint

The email functionality is handled by the API route at `/api/send-email` which:
- Accepts POST requests with email data
- Sends two emails (internal notification + user confirmation)
- Returns success/error responses
- Includes proper validation and error handling

## Security Notes

- Never commit `.env.local` to version control
- Keep your API keys secure
- Consider rate limiting for production use
- Monitor email sending quotas in Resend dashboard
