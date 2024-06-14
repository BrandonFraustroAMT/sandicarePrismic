import { createClient } from "@/prismicio";
import './ButtonStyle.css'
import './Navbar.css'

export default async function Navbar() {
    const client = createClient();
    const navbar = await client.getSingle("navbar");
    
    return(

        <div className="breakpointUtils__DesktopTabletOnly-sc-90pxmk-3 navbar">
        <header className="DesktopTablet__Wrapper-sc-x1rrkn-0 iXruOj navbar-header">
          <div className="DesktopTablet__Inner-sc-x1rrkn-1 ihApXk">
            <a href="#" className="Link__Wrapper-sc-ct3g9f-1 chXumO">
                {
                    navbar.data.logo && (
                    <img src={navbar.data.logo.url} alt={navbar.data.logo.alt || 'Logo'} className="imgnavbar"/>
                )}
            </a>

            {/* Boton */}
            {
                navbar.data.boton_link && 
                (
                    <div className="button-container">
                        <a href="https://calendly.com/dircom-digimedical/30min?preview_source=et_card&month=2024-06&date=2024-06-17" className="wrapper-link">
                            <div className="button-wrapper">
                                <div className="button-wrapper__div">
                                    <span className="button-wrapper__span">
                                        {navbar.data.botontext}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            }
          </div>
        </header>
        </div>
    )
}