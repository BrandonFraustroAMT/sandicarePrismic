import { createClient } from "@/prismicio";
import "./Main.css";
import WhitePage from "./WhtePage";

export default async function Main() {
  const client = createClient();
  const bodycontent = await client.getSingle("bodycontent");

  return (
    <div>
      <div className="pages__WorksWrap-sc-12y80si-0 hKULn">
        <div className="grid-container">
          {/* GRID 1 */}
          <div className="grid-item text one">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24 26.5h-4.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C14 29.907 14 30.604 14 32m14-3 2 2 4-4m-7.5-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                01.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 bjwia-D">
                Primero, Sandi y tú establecen las <span>fechas</span> para el{" "}
                <span>Check-Up</span>
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_one
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image two">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                  <img src={bodycontent.data.scrollimageone.url} alt={bodycontent.data.scrollimageone.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID 2 */}
          <div className="grid-item text three">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M30.5 18.134 22 22.856m0 0-8.5-4.722m8.5 4.722v9.5m2-.611-1.223.68c-.284.157-.425.236-.576.267-.133.027-.27.027-.402 0-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364c-.05-.152-.05-.324-.05-.666v-8.117c0-.343 0-.514.05-.667a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111c.284-.158.425-.237.576-.268.133-.027.27-.027.402 0 .15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666v4.559m-13.5-8 9 5m-.5 8.5 2 2 4-4"
                    style={{
                      stroke: "color(display-p3 0.3595 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                02.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Nos <span>indicas</span> a quienes <span>cuidaremos</span> con
                Check A Tu Salud
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_two
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image four">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                  <img src={bodycontent.data.scroll_image_two.url} alt={bodycontent.data.scroll_image_two.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 3 */}
          <div className="grid-item text five">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m28 20-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.308 0c-.115-.037-.214-.136-.412-.334l-1.868-1.868c-.198-.198-.297-.297-.412-.334a.499.499 0 0 0-.308 0c-.115.037-.214.136-.412.334L14 28m14-8h-4m4 0v4m-9.2 8h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C32 29.72 32 28.88 32 27.2v-8.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C29.72 14 28.88 14 27.2 14h-8.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 16.28 14 17.12 14 18.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                03.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 bjwia-D">
                Agenda de <span>citas</span> para la toma de{" "}
                <span>muestras</span>
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_three
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image six">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                  <img src={bodycontent.data.scroll_image_three.url} alt={bodycontent.data.scroll_image_three.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 4 */}
          <div className="grid-item text seven">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.3595 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                04.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Toma de Muestras <span>Programada</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_four
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image eight">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                  <img src={bodycontent.data.scroll_image_four.url} alt={bodycontent.data.scroll_image_four.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 5 */}
          <div className="grid-item text nine">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                05.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D">
                Envio de <span>Resultados Interpretados</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_five
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image ten">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={bodycontent.data.scroll_image_five.url} alt={bodycontent.data.scroll_image_five.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 6 */}
          <div className="grid-item text eleven">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 TextParts__GreenTopBar-sc-1j2eo1t-2 dGbIGI hYayKB">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#5CFFB1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 1 0.6926)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                06.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D SHqEf">
                Evaluación de grupos de <span>Riesgo</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_six
                }
              </div>
            </div>
          </div>
          {/* IMAGEN */}
          <div className="grid-item image twelve">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={bodycontent.data.scroll_image_six.url} alt={bodycontent.data.scroll_image_six.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* GRID 7 */}
          <div className="grid-item text thirteen">
            <div className="TextParts__Wrapper-sc-1j2eo1t-0 yrtrU">
              <div className="TextParts__TopBar-sc-1j2eo1t-1 dGbIGI">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 46 46"
                >
                  <rect
                    width="46"
                    height="46"
                    fill="#232265"
                    rx="7"
                    style={{
                      fill: "color(display-p3 0.1373 0.1333 0.3961)",
                      fillopacity: "1",
                    }}
                  ></rect>
                  <path
                    stroke="#3FAEFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 15h-3.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C14 17.28 14 18.12 14 19.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C16.28 32 17.12 32 18.8 32h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C31 29.72 31 28.88 31 27.2V24m-7 4h-6m8-4h-8m13.121-9.121a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242Z"
                    style={{
                      stroke: "color(display-p3 0.2482 0.6843 1)",
                      strokeOpacity: "1",
                    }}
                  ></path>
                </svg>
                07.
              </div>
              <div className="TextParts__BlueTitle-sc-1j2eo1t-3 TextParts__GreenTitle-sc-1j2eo1t-4 bjwia-D">
                Interpretación y <span>Seguimiento</span>{" "}
              </div>
              <div className="TextParts__Description-sc-1j2eo1t-5 eEsxam">
                {
                    bodycontent.data.text_image_seven
                }
              </div>
            </div>
          </div>
          {/* IMAGEN*/}
          <div className="grid-item image forteen">
            <div className="sc-04-HowItWorks__ImageBox-sc-iepctg-4 HuTbH">
              <div
                className="ScaledContent__Outer-sc-mvrs02-0 tiXzS"
                style={{ width: "650px", height: "615px" }}
              >
                <div
                  scale="1"
                  className="ScaledContent__Inner-sc-mvrs02-1 eOUgPq"
                >
                  <div className="IllustrationOne__Graphic-sc-myfi4b-1 lnklTH">
                    <img src={bodycontent.data.scroll_image_seven.url} alt={bodycontent.data.scroll_image_seven.alt || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <WhitePage />
    </div>
  );
}
