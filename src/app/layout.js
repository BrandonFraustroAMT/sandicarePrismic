import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ header, navbar }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sandicare" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://sandicare.com/checkatusalud.com/images/banner-sanidad.png" />
        <meta property="og:url" content="https://sandicare.com/checkatusalud.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <title>Sandicare</title>
      </head>
      <body className={inter.className}>
        <div className="container-background">
          {/* CIRCULO ROJO */}
          <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-left ">
            <defs>
              <radialGradient id="Degradado_sin_nombre_38" data-name="Degradado sin nombre 38" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f1d6dc"/>
                <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle className="circuloRojo" cx="1500" cy="1500" r="2000" fill="url(#Degradado_sin_nombre_38)"/>
          </svg>

          {/* CIRCULO AZUL */}
          <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-right">
            <defs>
              <radialGradient id="Degradado_sin_nombre_39" data-name="Degradado sin nombre 39" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#cfd5dd"/>
                <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle className="circuloAzul" cx="1500" cy="1500" r="2000"/>
          </svg>
        </div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </body>
    </html>
  );
}
