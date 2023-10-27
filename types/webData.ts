// eslint-disable-next-line import/no-anonymous-default-export
export type SiteConfig = {
    Escuela: string;
    Historia: {
        titulo: string;
        tarjetas: {
            titulo?: string;
            mision?: string;
            imagen: string;
            descripcion: string;
            tieneLink: boolean;
            link: string;
        }[];
    };
    Niveles: {
        titulo: string;
        photos: string[];
    };
    Principal: {
        titulo: string;
        nombreEscuela: string;
        Lema: string;
    };
    PiePagina: {
        NombreEscuela: string;
        Instituto: {
            label: string;
            href: string;
        }[];
        Ayuda: {
            Direccion: string;
            Telefono: string;
            Correo: string;
        };
    };
};

export const siteConfig = {
    Escuela:"Centro Escolar Gustavo Vides Valdes",
    Historia: {
        titulo:"Nuestra Historia",
        tarjetas:
            [
                {
                titulo:"Mision",
                imagen:"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324366/escuela/image9_sjgd1f.jpg",
                descripcion:"",
                tieneLink:false,
                link:""
                },

                {
                    titulo:"Visión",
                    imagen:"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image8_fs6jbz.jpg",
                    descripcion:"",
                    tieneLink:false,
                    link:""
                },
            ]
        },
    Niveles:{
        titulo:"Niveles Que Impartimos",
        photos:[{
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
          },]
    },
    Principal:{
        titulo:"¡Bienvenidos a:",
        nombreEscuela:"Centro Escolar Gustavo Vides Valdes",
        Lema:"Donde el Éxito se Encuentra con la Educación!"
    },
    PiePagina:{
        NombreEscuela:"Centro Escolar Gustavo Vides Valdes",
        Instituto:[
            {
                label:"Principal",
                href:"/"
            },
            {
                label:"Historia",
                href:"/historia"
            },
            {
                label:"Niveles Impartidos",
                href:"/niveles"
            },
            {
                label:"Contactenos",
                href:"/contactenos"
            },
        ],
        Ayuda: {
            Direccion:"2ª Calle OTE. 2-1, Lourdes Colon, La Libertad",
            Telefono:"+503 2318 6574",
            Correo:"cegustavovidesvaldes@gmail.com"
        }
    }
}