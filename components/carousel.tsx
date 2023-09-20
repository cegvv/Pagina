"use client";
import { DataImages } from '@/types/index';
import { Image } from '@nextui-org/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// type DataImages = {
//   label: string;
//   link: string;
// };
interface CarouselComponentProps {
    images: DataImages[];
  }
export default function CarouselComponent({images}: CarouselComponentProps) {
  return (
        <Carousel className='mt-5' autoPlay={true} infiniteLoop={true} dynamicHeight={true}>
            {images.map((object,key)=>{
                return(
            <div key={key}>
                <Image style={{
                    borderRadius:'0',
                    height:"350px",
                    width:"550px"
                    }} alt={object.label} src={object.link}/>
                <p>{key}{object.label}</p>
            </div>
                )
        })}
        </Carousel>
  );
}
