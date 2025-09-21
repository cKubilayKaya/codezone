import Header from "./Components/Header";
import "./globals.css";
import { Saira, Saira_Condensed } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

const saira_condensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-saira-condensed",
  display: "swap",
});

export const metadata = {
  title: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
  description:
    "Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${saira.variable} ${saira_condensed.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
