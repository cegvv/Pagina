import CarouselComponent from "@/components/carousel";
import { title } from "@/components/primitives";
import { dataImages } from "@/types";
// import { useState } from "react";

export default function NivelesPage() {

  return (
    <div>
      <h1 className={title()}>Niveles Impartidos</h1>
      <CarouselComponent images={dataImages}/>
    </div>
  );
}
