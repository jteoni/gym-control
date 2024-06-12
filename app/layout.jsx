import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "../components/Header";
import Sidebar from "@/components/sidebar";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Gym Control",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.variable}>
                <div className="min-h-screen">
                    <div className="flex">
                        <Sidebar />
                        <div className="p-10 flex flex-col flex-grow w-screen md:w-full min-h-screen bg-secondary">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
