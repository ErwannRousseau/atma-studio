import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

import ContactEmail from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const clientData = await req.json();
  const { firstname, lastname, email, phoneNumber, message, sourceOfDiscovery } = clientData;

  try {
    const data = await resend.emails.send({
      from: 'ATMA Studio - Contact <contact@studio-atma.com>',
      to: 'adn.nantes@gmail.com',
      subject: 'Prise de contact ATMA Studio',
      react: (
        <ContactEmail
          firstname={firstname}
          lastname={lastname}
          email={email}
          phoneNumber={phoneNumber}
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
