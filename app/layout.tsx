import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Atjam | Simplify attendance management.",
    description: "Atjam is a simple attendance management system.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>{children}</body>
                <Toaster
                    toastOptions={{
                        className: "font-space bg-black text-white",
                    }}
                    offset={8}
                />
            </html>
        </ClerkProvider>
    );
}
