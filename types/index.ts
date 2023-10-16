import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export type DataImages = {
	label: string;
	link: string;
  };
export const dataImages:DataImages[] = [
    {
      label: "Evento Payasos",
      link: "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324366/escuela/image9_sjgd1f.jpg",
    },
    {
      label: "Abanderados",
      link: "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image8_fs6jbz.jpg",
    },
    {
      label: "Padres",
      link: "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image7_aqpffv.jpg",
    },
    {
      label: "Unk",
      link:
        "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image6_v77slf.jpg",
    },
    {
      label: "Mural",
      link:
      "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image5_iqqs4y.jpg",
    },
    {
      label: "Maestros y alumnos",
      link:
      "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image3_eivoue.jpg",
    },
    {
      label: "Muro",
      link:
      "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image4_dzt9o1.jpg",
    },
    {
      label: "Asamblea General",
      link:
      "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image2_njnok5.jpg",
    },
    {
      label: "Direccion",
      link:
      "https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324364/escuela/image1_ckn1oh.jpg",
    },
  ];