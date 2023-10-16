import CarouselComponent from "@/components/carousel";
import { title } from "@/components/primitives";
import { siteConfig } from '@/types/webData';
// import { useState } from "react";

export default function NivelesPage() {

  return (
    <div className='mx-2'>
      <h1 className={title()}>{siteConfig.Niveles.titulo}</h1>
      <CarouselComponent images={siteConfig.Niveles.photos}/>
    </div>
  );
}
