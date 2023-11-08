import { EmailTemplate } from "@/components/EmailTemplate";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

export async function POST(req: NextRequest) {
  const { nombre, correo, telefono, mensaje } = await req.json();
  const response = await axios.get(`https://docs.google.com/forms/d/e/1FAIpQLSdjUWGimJySt9wSa5M1kISJWLTi-akxUpSVx5QA3hJ5K8125w/formResponse?usp=pp_url&entry.372013894=${nombre}&entry.54919716=${correo}&entry.636624616=${telefono}&entry.1162356470=${mensaje}`);
  const responseData = response.data;

  try {
    const data = await resend.emails.send({
      from: "no-reply <info@cegvv.com>",
      to: [correo],
      cc:'cegvvaldes@gmail.com',
      subject: '¡Bienvenido!',
      text: "Gracias por su Interes en El Centro Escolar Gustavo Vides Valdes",
      react: EmailTemplate(nombre),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
