export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Centro Escolar Gustavo Vides Valdes",
	description: "Donde el Éxito se Encuentra con la Educación!",
	navItems: [
		{
			label:"Principal",
			href:"/"
		},
		{
			label:"Historia",
			href:"/historia"
		},
		{
			label:"Contactenos",
			href:"/contactenos"
		},
		{
			label:"Niveles Impartidos",
			href:"/niveles"
		},
	],
	navMenuItems: [

		{
			label:"Principal",
			href:"/"
		},
		{
			label:"Historia",
			href:"/historia"
		},
		{
			label:"Contactenos",
			href:"/contactenos"
		},
		{
			label:"Niveles Impartidos",
			href:"/niveles"
		},
	],
	links: {
		github: "https://github.com/Zaroouk/school-landing",
	},
	Historia: {
        titulo:"Nuestra Historia",
        tarjetas:
            [
                {
                titulo:"Mision",
                imagen:"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324366/escuela/image9_sjgd1f.jpg",
                descripcion:"Brindar una educación crítica, funcional con eficiente calidad académica y humana, con sólidos principios morales y cívicos, que apoyados en la tecnología nos ubique como una de las primeras instituciones educativas del país.",
                tieneLink:false,
                link:""
                },

                {
                    titulo:"Visión",
                    imagen:"https://res.cloudinary.com/dtjc8lv4b/image/upload/v1697324365/escuela/image8_fs6jbz.jpg",
                    descripcion:"Ser líderes en la formación integral de señoritas preparadas para incorporarse a la vida profesional y productiva del país como agentes de transformación social.",
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
            Telefono:"+503 7328 4287",
            Correo:"cegustavovidesvaldes@gmail.com"
        }
    }
};
