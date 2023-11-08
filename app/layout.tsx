import { Footer } from "@/components/SendEmail";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";




export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
    icon:"/New_Project-removebg-preview.svg",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {




	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>

				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
            <main className="container mx-auto max-w-full pt-0 px-0 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-0">
							<Footer />
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
