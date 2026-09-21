import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "Rashmi Jayawardhana | Full-Stack Software Engineer",
  description: "Portfolio of Rashmi Jayawardhana, a full-stack software engineer specializing in React, Angular, React Native, Spring Boot, and Node.js, building scalable web and mobile applications.",
  openGraph: {
    title: "Rashmi Jayawardhana | Full-Stack Software Engineer",
    description: "Full-stack software engineer specializing in React, Angular, React Native, Spring Boot, and Node.js, building scalable web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-relaxed overflow-x-hidden dark:bg-darkTheme dark:text-darkText`}
      >
        {children}
      </body>
    </html>
  );
}
