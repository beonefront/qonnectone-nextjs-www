import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send internal notification to office
    const internalEmailResult = await resend.emails.send({
      from: 'QonnectOne <noreply@qonnectone.com>',
      to: ['frontend@qonnectone.com'],
      subject: 'Nowy lead - formularz kontaktowy',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nowy Lead</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 Nowy Lead!</h1>
          </div>

          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <h2 style="color: #495057; margin-top: 0;">Szczegóły kontaktu</h2>

            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>🕒 Data:</strong> ${new Date().toLocaleString('pl-PL')}</p>
              <p style="margin: 0;"><strong>🌐 Źródło:</strong> Strona internetowa</p>
            </div>

            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1976d2;"><strong>💡 Następne kroki:</strong></p>
              <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>Skontaktuj się z klientem w ciągu 24 godzin</li>
                <li>Przygotuj ofertę dostosowaną do potrzeb klienta</li>
                <li>Zaproponuj spotkanie online lub telefoniczne</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                📧 Odpowiedz klientowi
              </a>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>Ten email został wygenerowany automatycznie przez system QonnectOne</p>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to user
    const confirmationEmailResult = await resend.emails.send({
      from: 'QonnectOne <noreply@qonnectone.com>',
      to: [email],
      subject: 'Dziękujemy za zainteresowanie QonnectOne!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Dziękujemy za kontakt</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">✨ Dziękujemy!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
              Twoja wiadomość została otrzymana
            </p>
          </div>

          <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #495057; margin: 0 0 15px 0;">Cześć!</h2>
              <p style="font-size: 16px; color: #6c757d; margin: 0;">
                Dziękujemy za pozostawienie swojego adresu email.
                <strong>Skontaktujemy się z Tobą najszybciej jak to możliwe</strong>
                w sprawie naszej platformy QonnectOne.
              </p>
            </div>

            <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #28a745; margin: 25px 0;">
              <h3 style="color: #28a745; margin: 0 0 15px 0; font-size: 18px;">🚀 Co dalej?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #495057;">
                <li>Nasz zespół przeanalizuje Twoje potrzeby</li>
                <li>Przygotujemy spersonalizowaną ofertę</li>
                <li>Skontaktujemy się z Tobą w ciągu 24 godzin</li>
                <li>Zaproponujemy spotkanie, aby omówić szczegóły</li>
              </ul>
            </div>

            <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #1976d2; margin: 0 0 10px 0; font-size: 16px;">💼 O QonnectOne</h3>
              <p style="margin: 0; color: #495057; font-size: 14px;">
                QonnectOne to nowoczesna platforma finansowa, która łączy wszystkie
                niezbędne moduły w jednym miejscu: administrację, księgowość,
                raporty, transakcje i wiele więcej.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                <strong>Potrzebujesz pilnej pomocy?</strong><br>
                Napisz do nas: <a href="mailto:office@qonnectone.com" style="color: #667eea;">office@qonnectone.com</a>
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #6c757d; font-size: 12px;">
              <strong>QonnectOne</strong><br>
              Nowoczesne rozwiązania finansowe<br>
              <a href="https://qonnectone.com" style="color: #667eea;">qonnectone.com</a>
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (internalEmailResult.error || confirmationEmailResult.error) {
      console.error('Email sending failed:', {
        internal: internalEmailResult.error,
        confirmation: confirmationEmailResult.error,
      });

      return NextResponse.json(
        { error: 'Failed to send emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Emails sent successfully',
        internalEmailId: internalEmailResult.data?.id,
        confirmationEmailId: confirmationEmailResult.data?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
