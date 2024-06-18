"use client";
import { createClient } from "@/prismicio";
import { useState, useEffect } from "react";
import './Header.css';
import ButtonWithTracking from "./Button";

// Función para obtener los datos de manera asíncrona
const fetchHeaderData = async () => {
  const client = createClient();
  const header = await client.getSingle("body");
  const navbar = await client.getSingle("navbar");
  return { header, navbar };
};

const words = [
  'Check-Up Personalizado',
  'Monitoreo Remoto',
  'Seguimiento Personalizado',
  'Telemedicina 24 / 7'
];


export default function Header() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [header, setHeader] = useState(null);
    const [navbar, setNavbar] = useState(null);
    

    useEffect(() => {
      const fetchData = async () => {
        const { header, navbar } = await fetchHeaderData();
        // Aquí puedes manejar los datos obtenidos, por ejemplo, actualizar el estado
        setHeader(header);
        setNavbar(navbar);
      };
  
      fetchData();
  
      const intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 3000); // Cambiar la palabra cada 3 segundos
  
      return () => clearInterval(intervalId);
    }, []);


    return (
        <main className="container-main">
          <div>
            {/* MAIN HEADER */}
            <div className="container-main__animated">
              <div className='sc-01-Hero__Content-video'>
                {
                    header == null ? '' : (
                     <img src={header.data.herogif.url} alt={header.data.herogif.alt || 'Hero gif'} />
                  )
                }
              </div>
              {/* <!-- ANIMATION --> */}
              <div className="sc-01-Hero__Content-text">
                <div className="sc-01-Hero__Title">
                    {
                         header == null ? '' : (header.data.title_header)
                    }
                  {/* WORDS */}
                  <div className="auto-animate-wrapper">
                  {words.map((word, index) => (
                      <div
                        key={index}
                        className={`word-container ${index === currentWordIndex ? 'active' : 'inactive'}`}
                      >
                        <div className="word">{word}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sc-01-Hero__Description">
                  Con CheckA Tu Salud de SandiCare, brindas a tus
                  colaboradores un escaneo de salud personalizado, sin
                  importar si son uno o más de un millón
                </div>
              </div>
            </div>
            {/* VIDEO  hacer scroll */} 
            <div className='video-container'>
              <div className='video-wrapper'>
                <video id="scalable-video"  muted loop>
                  <source src="#" type="video/mp4" />
                </video>
              </div>
            </div>

            <section className="sc-02-03-Focus__Wrapper-sc-qcljt5-0 enpaAV">
              <div className={"sc-02-03-Focus__Inner-sc-qcljt5-1 euIDBC"} >
                  <div  className="sc-02-03-Focus__Top-sc-qcljt5-2 iWNRYx">
                      <h2 className="sc-02-03-Focus__Title-sc-qcljt5-3 coFkqK">
                          <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: 1}}>
                              <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                  <div className="line-inne" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>Para una organización</div>
                              </div>
                              <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                  <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>saludable y productiva.</div>
                              </div>
                          </div>
                      </h2>
                  </div>
              </div>
              <div className="sc-02-03-Focus__BottomInner-sc-qcljt5-7 jfGDAf" style={{height: "73.9738%"}}>
                <div className="sc-02-03-Focus__BottomContent-sc-qcljt5-8 knqvBf">
                  <div className="sc-02-03-Focus__BottomTitle-sc-qcljt5-11 bupTNh">
                    <span>Te mostraremos</span>
                    
                    <div id='buttonCheck' className="pin-spacer">
                    {
                      navbar == null ? '' : ( <ButtonWithTracking 
                            href="https://calendly.com/dircom-digimedical/30min?preview_source=et_card&month=2024-06&date=2024-06-17"
                            text={navbar.data.botontext}
                          />
                        )
                    }
                    </div>
                    <span>como lo hacemos</span>
                  </div>
                </div>
              </div>
            </section>
            {/* SCROLLS */}
            {/* <Scroll /> */}
            {/* WHITE PAGE */}
            {/* <WhitePage /> */}
          </div>
        </main>
    )
}
