import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
const bg = "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg"
const background = '../public/centro-escolar/223.jpeg'

export default function Home() {
	const schoolName = "Centro Escolar Gustavo Vides Valdes"
	return (
		<section className="flex flex-col items-center justify-center gap-4 p-10 bg-cover bg-center" style={{ backgroundImage: `url(centro-escolar/223.jpeg)` }}>
			<div className="inline-block max-w-lg text-center justify-center p-5" style={{backgroundColor:"rgba(255, 255, 255, 0.8)"}}>
				<h1 className={"tracking-tight inline font-semibold text-slate-600 text-2xl md:text-4xl lg:text-5xl"}>¡Bienvenidos a:<br/></h1>
				<h1 className={title({color:"blue"})}>{schoolName}</h1>
				<br />
				<h1 className={"tracking-tight inline font-semibold text-slate-600 text-2xl md:text-4xl lg:text-5xl"}>
					Donde el Éxito se Encuentra con la Educación!
				</h1>
				<h2 className={subtitle({ class: "mt-4 text-slate-600" })}>
					Te invitamos a que puedas <Link className="text-lg lg:text-xl" href='/niveles'>conocer</Link> los niveles que impartimos
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				{/* <Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link> */}
			</div>
		</section>
	);
}
