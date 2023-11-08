'use client'
import CardComponent from "@/components/card";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";


const dataTarjetas = siteConfig.Historia.tarjetas


export default function HistoriaPage() {
return (
<div>
    <h1 className={title()}>{siteConfig.Historia.titulo}</h1>
    <div className="flex flex-col lg:flex-row flex-grow gap-4 mt-10">
        {
            dataTarjetas.map((tarjeta,key)=>(
                <div key={key}>
                    <CardComponent
                    title={tarjeta.titulo}
                    bodyContent={tarjeta.descripcion}
                    link={tarjeta.link}
                    picture={tarjeta.imagen}
                    />
                </div>
            ))
        }
    </div>
</div>
);
}
