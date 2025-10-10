/**
 * Google Calendar Appointment Scheduling Configuration
 *
 * To set up your Google Calendar appointment schedule:
 * 1. Go to Google Calendar (calendar.google.com)
 * 2. Click the gear icon (Settings) > "Appointment schedules"
 * 3. Create a new appointment schedule or select an existing one
 * 4. Click "Get booking page link" to get your unique schedule URL
 * 5. Replace the URL below with your actual appointment schedule link
 *
 * The URL format should be:
 * https://calendar.google.com/calendar/appointments/schedules/YOUR_UNIQUE_SCHEDULE_ID
 */

export const GOOGLE_CALENDAR_APPOINTMENT_URL =
  'https://calendar.app.google/j6cUC4yKa22U42JDA';

/**
 * Opens the Google Calendar appointment scheduling page in a new tab
 */
export const openAppointmentScheduler = () => {
  window.open(GOOGLE_CALENDAR_APPOINTMENT_URL, '_blank', 'noopener,noreferrer');
};
