import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Contactanos",
		template: `%s - Contactanos`,
	},}
export default function ContactenosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="relative top-0 left-[27%] items-center py-8 md:py-10">
			<div className="max-w-2xl text-center">
				{children}
			</div>
		</section>
	);
}
