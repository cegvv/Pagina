import { FooterTemplate } from '@/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.API_KEY);

export async function POST(req:NextRequest) {
    const requestData = await req.json();
    const correo: string = requestData.correo;
    try {
      const data = await resend.emails.send({
        from: 'no-reply <info@cegvv.com>',
        to: correo,
        cc:'cegvvaldes@gmail.com',
        subject: '¡Bienvenido!',
        text:"Gracias por su Interes en El Centro Escolar Gustavo Vides Valdes",
        react: FooterTemplate(),
      });
      return NextResponse.json(data);
    } catch (error) {
        console.log(error)
      return NextResponse.json({ error });
    }
  }