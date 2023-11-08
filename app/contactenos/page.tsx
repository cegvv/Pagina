'use client'
import { FormInput, onSubmit } from '@/components/SendEmail';
import GoogleMap from "@/components/mapComponent";
import { title } from "@/components/primitives";
import { Card } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from '@nextui-org/react';
import { useState } from "react";

export default function ContactenosPage() {
  const [nombre,setNombre] = useState("")
  const [correo,setCorreo] = useState("")
  const [telefono,setTelefono] = useState("")
  const [mensaje,setMensaje] = useState("")
  const dataForm:FormInput = {
    name:nombre,
    email:correo,
    telefono:telefono,
    mensaje:mensaje
  }
  const formatPhoneNumber = (input:any) => {

    let formattedNumber = input
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d{0,4})/, '$1 $2');

    setTelefono(formattedNumber.trim());
  };
  const handleOnSubmit = () => onSubmit(dataForm)
console.log(telefono)
  return (
  <div>
    <Card className='w-full m-0 p-10'>
      <h1 className={title()}>Contactenos</h1>

      <div className="flex flex-col mt-5 gap-5">
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
          <Input
            type="text"
            label="Nombre Completo"
            placeholder="Pedro Rodriguez"
            fullWidth
            onChange={(e)=>setNombre(e.target.value)}
            value={nombre}
          />

          <Input
          onChange={(e)=>setCorreo(e.target.value)}
          value={correo}
            type="email"
            label="Correo"
            placeholder="you@example.com"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
          onChange={(e)=>formatPhoneNumber(e.target.value)}
          value={telefono}
          maxLength={9}
            type="tel"
            label="Telefono"
            placeholder="1234-5678"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">+503</span>
              </div>
            }
          />
          <Textarea value={mensaje} onChange={(e)=>setMensaje(e.target.value)} label="Mensaje" placeholder="Mensaje..." />
          <Button onClick={handleOnSubmit}>Enviar</Button>
        </form>
          <GoogleMap />
      </div>
    </Card>
    </div>
  );
}

const MailIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
);