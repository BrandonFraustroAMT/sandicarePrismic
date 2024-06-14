import { createClient } from "@/prismicio";
import "./WhitePage.css";
import "./ButtonStyle.css";

export default async function WhitePage() {
    const client = createClient();
    const bodycontent = await client.getSingle("bodycontent");
    const navbar = await client.getSingle("navbar");

    return(
        <div>
            <div className="pages__White-sc-12y80si-1 ccjInK">
                <div className="sc-05-WhiteGlove__Wrapper-sc-ydg9ft-0 jBDuyf">
                    <div className="sc-05-WhiteGlove__Inner-sc-ydg9ft-1 fCesPV">
                        <div className="Pill__Wrapper-sc-1tqyxfy-0 gtAMbc">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 212 104" className="Pill__Logo-sc-1tqyxfy-1 CFbaF">
                                <path fill="#fff" fillRule="evenodd" d="M103.229 17.834 106.57.793l3.34 16.938 14.97 77.333h10.769l21.342-29.694 19.286 28.052 11.518-9.873 10.555 11.515h9.548a3.398 3.398 0 1 1 0 6.796H195.36l-8.133-8.873-12.268 10.515-18.091-26.316-17.735 24.674h-19.812l-12.455-64.888-11.63 64.888H69.418L56.542 84.439l-14.39 17.421H4.021a3.398 3.398 0 0 1 0-6.796h34.927l17.89-21.656 16.006 21.656H89.5l13.729-77.23Z" clipRule="evenodd" style={{clipPath: "none"}}></path>
                            </svg>
                        </div>
                        <h3 className="sc-05-WhiteGlove__Title-sc-ydg9ft-2 hxgcnv">
                            <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                    <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
                                        {
                                            bodycontent.data.group_one.map(bc => bc.titulo)
                                        }
                                    </div>
                                </div>
                            </div>
                        </h3>
                        <div className="sc-05-WhiteGlove__LargeText-sc-ydg9ft-3 kVGdLr">
                            <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                {
                                    bodycontent.data.group_one.map(bc => bc.contenido)
                                }
                            </div>
                        </div>
                        <div className="sc-05-WhiteGlove__Logos-sc-ydg9ft-4 jlFERI">
                            <div className="sc-05-WhiteGlove__LogoWrapper-sc-ydg9ft-7 dOktKr">
                                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-05-WhiteGlove__Logo-sc-ydg9ft-5 kYBuYI">
                                    <div style={{maxWidth:"186px", display:"block"}}>
                                        {
                                            bodycontent.data.certificacion_uno && (
                                            <img src={bodycontent.data.certificacion_uno.url} alt={bodycontent.data.certificacion_uno.alt || 'Logo'} role="presentation" aria-hidden="true" style={{maxWidth:"100%",display:"block"}}/>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="sc-05-WhiteGlove__LogoWrapper-sc-ydg9ft-7 dOktKr">
                                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-05-WhiteGlove__Logo-sc-ydg9ft-5 kYBuYI">
                                    <div style={{maxWidth:"184px",display:"block"}}>
                                        {
                                            bodycontent.data.certificacion_dos && (
                                            <img src={bodycontent.data.certificacion_dos.url} alt={bodycontent.data.certificacion_dos.alt || 'Logo'} role="presentation" aria-hidden="true" style={{maxWidth:"100%",display:"block"}}/>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="sc-05-WhiteGlove__LogoWrapper-sc-ydg9ft-7 dOktKr">
                                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained sc-05-WhiteGlove__Logo-sc-ydg9ft-5 kYBuYI">
                                    <div style={{maxWidth:"184px",display:"block"}}>
                                        {
                                            bodycontent.data.certificacion_tres && (
                                                <img src={bodycontent.data.certificacion_tres.url} alt={bodycontent.data.certificacion_tres.alt || 'Logo'} role="presentation" aria-hidden="true" style={{maxWidth:"100%",display:"block"}}/>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-05-WhiteGlove__SmallText-sc-ydg9ft-8 dxqRGY">
                            <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                {
                                    bodycontent.data.group_one.map(bc => bc.texto_abajo)
                                }
                            </div>
                        </div>
                        <section className="sc-06-Trusted__Wrapper-sc-19ifefl-0 jdQmaT">
                                    <div className="sc-06-Trusted__Inner-sc-19ifefl-1 ciHEXA">
                                        <div className="sc-06-Trusted__Content-sc-19ifefl-2 fEcRQz">
                                            <h3 className="sc-06-Trusted__Title-sc-19ifefl-3 gzzOVj">
                                                <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                                    <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                                        <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
                                                            {
                                                                bodycontent.data.group_two.map(bc => bc.titulo)
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                                        <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
                                                            su salud a Sandi
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </h3>
                                        <div className="sc-06-Trusted__Text-sc-19ifefl-4 kFCNsa">
                                        <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                            {
                                                bodycontent.data.group_two.map(bc => bc.contenido)
                                            }
                                        </div>
                                    </div>
                                    <div className="sc-06-Trusted__Logos-sc-19ifefl-5 bXdKZU">
                                        <a href="#" aria-label="Impilo Health" className="LogoHover__Wrapper-sc-oco7h7-1 bpANgv">
                                            {
                                                bodycontent.data.logo_uno && (
                                                    <img src={bodycontent.data.logo_uno.url} alt={bodycontent.data.logo_uno.alt || 'Logo'}/>
                                                )
                                            }
                                        </a>
                                        <a href="#" aria-label="Impilo Health" className="LogoHover__Wrapper-sc-oco7h7-1 bpANgv">
                                            {
                                                bodycontent.data.logo_dos && (
                                                    <img src={bodycontent.data.logo_dos.url} alt={bodycontent.data.logo_dos.alt || 'Logo'}/>
                                                )
                                            }
                                        </a>
                                        <a href="#" aria-label="Impilo Health" className="LogoHover__Wrapper-sc-oco7h7-1 bpANgv">
                                            {
                                                bodycontent.data.logo_tres && (
                                                    <img src={bodycontent.data.logo_tres.url} alt={bodycontent.data.logo_tres.alt || 'Logo'}/>
                                                )
                                            }
                                            <div className="LogoHover__Ovals-sc-oco7h7-0 bqMcIi">
                                                <div className="LogoHover__Oval1-sc-oco7h7-2 LbRJh"></div>
                                                <div className="LogoHover__Oval2-sc-oco7h7-3 eawWUg"></div>
                                                <div className="LogoHover__Oval3-sc-oco7h7-4 gLrjFP"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="sc-07-Quotes__Wrapper-sc-14dpdqo-0 dJZHZN">
                            <div className="sc-07-Quotes__Inner-sc-14dpdqo-1 gbqfKY">
                                <div className="AutoAnimate__Wrapper-sc-15fuycz-0 krnjpk sc-07-Quotes__StyledAutoAnimate-sc-14dpdqo-4 TFsiD" alignment="center" style={{display: "grid", height: "auto", width: "auto"}}>
                                    <div style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1"}}>
                                        <div className="Quote__Wrapper-sc-1nprldu-0 fhKjGz">
                                            <p className="Quote__Text-sc-1nprldu-1 jxVcyI">
                                                {
                                                    bodycontent.data.group_three.map(bc => bc.contenido)
                                                }
                                            </p>
                                            <div className="Quote__Author-sc-1nprldu-2 eOLvDU">
                                                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained Quote__Headshot-sc-1nprldu-3 lasILu">
                                                    <div style={{maxWidth:"180px",display:"block"}}>
                                                        {
                                                            bodycontent.data.avatar && (
                                                                <img src={bodycontent.data.avatar.url} alt={bodycontent.data.avatar.alt || 'Sandi'} role="presentation" aria-hidden="true" srcSet="#" style={{maxWidth:"100%",display:"block",position:"static",borderRadius:"50%"}}/>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <span className="Quote__Name-sc-1nprldu-4 dwsAoE">{bodycontent.data.group_three.map(bc => bc.nombre)}</span>
                                                <span className="Quote__Title-sc-1nprldu-5 kyDWyS">{bodycontent.data.group_three.map(bc => bc.posicion)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{translate: "none", rotate: "none", scale: "none", transform: "translate(110%, 0%)", opacity: "0"}}>
                                    </div>
                                </div>
                                <button type="button" aria-label="Previous Quote" className="Arrow__Wrapper-sc-w4k9ap-0 hnVudb sc-07-Quotes__ButtonLeft-sc-14dpdqo-3 hsuySq" style={{cursor: "pointer"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 9" className="Arrow__Chevron-sc-w4k9ap-1 fpvxdk">
                                        <path stroke="#161658" strokeLinecap="round" strokeWidth="2" d="M1.5 1 5 4.5 1.5 8" style={{stroke: "color(display-p3 0.0853 0.0853 0.3452)", strokeOpacity: "1"}}></path>
                                    </svg>
                                </button>
                                <button type="button" aria-label="Next Quote" className="Arrow__Wrapper-sc-w4k9ap-0 hnVudb sc-07-Quotes__ButtonRight-sc-14dpdqo-2 ga-DhxD" style={{cursor: "pointer"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 9" className="Arrow__Chevron-sc-w4k9ap-1 fpvxdk">
                                        <path stroke="#161658" strokeLinecap="round" strokeWidth="2" d="M1.5 1 5 4.5 1.5 8" style={{stroke: "color(display-p3 0.0853 0.0853 0.3452)", strokeOpacity: "1"}}></path>
                                    </svg>
                                </button>
                            </div>
                        </section>
                        <section className="sc-08-Integrations__Wrapper-sc-18of6v0-0 eToItN">
                            <div className="sc-08-Integrations__Inner-sc-18of6v0-1 hXLvBB">
                                <div className="Pill__Wrapper-sc-1tqyxfy-0 gtAMbc">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 212 104" className="Pill__Logo-sc-1tqyxfy-1 CFbaF">
                                        <path fill="#fff" fillRule="evenodd" d="M103.229 17.834 106.57.793l3.34 16.938 14.97 77.333h10.769l21.342-29.694 19.286 28.052 11.518-9.873 10.555 11.515h9.548a3.398 3.398 0 1 1 0 6.796H195.36l-8.133-8.873-12.268 10.515-18.091-26.316-17.735 24.674h-19.812l-12.455-64.888-11.63 64.888H69.418L56.542 84.439l-14.39 17.421H4.021a3.398 3.398 0 0 1 0-6.796h34.927l17.89-21.656 16.006 21.656H89.5l13.729-77.23Z" clipRule="evenodd" style={{clipPath: "none"}}></path>
                                    </svg>
                                </div>
                                <h1 className="sc-08-Integrations__Title-sc-18of6v0-2 JsuGU">
                                    <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                        <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                            <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>{bodycontent.data.group_four.map(bc => bc.titulo)}</div> 
                                        </div>
                                    </div>
                                </h1>
                                <div className="sc-08-Integrations__Illustrations-sc-18of6v0-3 cAfmSi">
                                    <div className="sc-08-Integrations__Container-sc-18of6v0-4 hbwVpl">
                                        <span className="sc-08-Integrations__Label-sc-18of6v0-5 bSSayJ">
                                            {bodycontent.data.group_four.map(bc => bc.contenido_imagen_uno)}
                                        </span>
                                    </div>
                                    <div className="sc-08-Integrations__Container-sc-18of6v0-4 hbwVpl">
                                        <span className="sc-08-Integrations__Label-sc-18of6v0-5 bSSayJ">
                                            {bodycontent.data.group_four.map(bc => bc.contenido_imagen_dos)}
                                        </span>
                                    </div>
                                    <div className="sc-08-Integrations__Container-sc-18of6v0-4 hbwVpl">
                                        <span className="sc-08-Integrations__Label-sc-18of6v0-5 bSSayJ">
                                            {bodycontent.data.group_four.map(bc => bc.contenido_imagen_tres)}
                                        </span>
                                    </div>
                                </div>
                                <div className="sc-08-Integrations__Text-sc-18of6v0-6 oMLut">
                                    <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                        {bodycontent.data.group_four.map(bc => bc.texto_abajo)}
                                    </div>
                                </div>
                                {/* <Button textInside={"Cotiza tu Check-Up"}/> */}
                            </div>
                        </section>
                        <section className="sc-09-Cta__Wrapper-sc-ibn666-0 dlpPjA">
                            <div className="sc-09-Cta__Inner-sc-ibn666-1 gqIAXC">
                                <h1 className="sc-09-Cta__Title-sc-ibn666-2 gYooRk">
                                    <div className="TextAnimation__Wrapper-sc-1lgmgk9-0 gbyhsy" style={{opacity: "1"}}>
                                        <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                            <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>{bodycontent.data.group_five.map(bc => bc.titulo)}</div>
                                        </div>
                                        {/* <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                            <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>con un experto de CheckA</div>
                                        </div>
                                        <div className="line-wrapper" style={{display: "block", textAlign: "center", position: "relative"}}>
                                            <div className="line-inner" style={{display: "block", textAlign: "center", position: "relative", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>Tu Salud</div>
                                        </div> */}
                                    </div>
                                </h1>
                                {
                                    navbar.data.boton_link && 
                                    (
                                        <div className="button-container">
                                            <a href="https://calendly.com/dircom-digimedical/30min?preview_source=et_card&month=2024-06&date=2024-06-17" className="wrapper-link">
                                                <div className="button-wrapper">
                                                    <div className="button-wrapper__div">
                                                        <span className="button-wrapper__span">
                                                            {bodycontent.data.group_five.map(bc => bc.botontexto)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}