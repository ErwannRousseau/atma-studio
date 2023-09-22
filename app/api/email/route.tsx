import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

import ContactEmail from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const clientData = await req.json();
  const { firstname, lastname, email, message, sourceOfDiscovery } = clientData;
  try {
    const data = await resend.emails.send({
      from: 'ATMA Studio - Contact <onboarding@resend.dev>',
      to: 'erwann.rousseau@icloud.com',
      subject: 'Prise de contact ATMA Studio',
      react: (
        <ContactEmail
          firstname={firstname}
          lastname={lastname}
          email={email}
          message={message}
          sourceOfDiscovery={sourceOfDiscovery}
        />
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
