import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Historia",
		template: `%s - Historia`,
	},}
export default function HistoriaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block lg:max-w-3xl max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
