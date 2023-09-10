import React, { useState} from 'react';
import * as Images from './imageAssets.js';

import './css_HomePage.css';
import './css_Navbar.css';
import './css_Footer.css';
import './css_Sponsoring.css';
import './css_Events.css';
import './css_Contacts.css';
import './css_AboutUs.css';
// $env:NODE_OPTIONS = "--openssl-legacy-provider"

function App() {
  const [activeSection, setActiveSection] = useState("KermesseNatoye2k23");
  const [menuActive, setMenuActive] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuActive(false);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  
//--------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------MAIN-----------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
  return (
    <>
    <head>
      <title>Jeunesse de Natoye</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
    </head>
    <Navbar 
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        menuActive={menuActive}
        toggleMenu={toggleMenu}
      />
      <main>
        <KermesseNatoye2k23 activeSection={activeSection} />
        <Sponsoring activeSection={activeSection} />
        <Events activeSection={activeSection} />
        <Aboutus activeSection={activeSection} />
        <Contacts activeSection={activeSection} />
        <Footer />
      </main>
    </>
  );
}
//----------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------NAVBAR-----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
function Navbar({ activeSection, handleNavClick, menuActive, toggleMenu }) {
  return (
<header>
        <div className="header-left">
          <div className="logo">
            <img src={Images.logoBlanc} alt="Logo Jeunesse de Natoye blanc" />
          </div>
          <h1>Jeunesse de Natoye</h1>
          <nav>
            <ul className={menuActive ? "active" : ""}>
              <li>
              <a
                href="#KermesseNatoye2k23"
                className={activeSection === "KermesseNatoye2k23" ? "active" : "" + menuActive ? "" : " hidden"}
                onClick={() => handleNavClick("KermesseNatoye2k23")}
              >
              Kermesse 2k23
              </a>
              </li>

              <li>
              <a
                  href="#sponsoring"
                  className={activeSection === "sponsoring" ? "active" : ""}
                  onClick={() => handleNavClick("sponsoring")}
                >
                Sponsoring
                </a>
              </li>
              <li>
              <a
                  href="#events"
                  className={activeSection === "events" ? "active" : ""}
                  onClick={() => handleNavClick("events")}
                >
                Nos évènements
                </a>
              </li>
              <li>
                <a
                  href="#jeunesse"
                  className={activeSection === "jeunesse" ? "active" : ""}
                  onClick={() => handleNavClick("jeunesse")}
                >
                  Le groupe
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className={activeSection === "contacts" ? "active" : ""}
                  onClick={() => handleNavClick("contacts")}
                >
                  Contacts
                </a>
              </li>
            </ul>
            <img src={Images.MH} alt="Menu Hamburger" className='MH' onClick={toggleMenu}/>
          </nav>
        </div>
      </header>
  );
}
//----------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------FOOTER-----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

function Footer() {
  return (
    <footer>
    <div class="contenu-footer">
      <div class="footer-medias">
          <ul class="liste-reseaux">
              <li><a href="https://www.facebook.com/Jeunesse-de-Natoye-1086707128087639" target="_blank"><img src={Images.fcbw}/></a></li>
              <li><a href="https://www.instagram.com/jeunesse_de_nty/?hl=fr" target="_blank"><img src={Images.instaw}/></a></li>
              <li><a href="https://www.tiktok.com/@mdj_natoye5.3" target="_blank"><img src={Images.tiktokw}/></a></li>
          </ul>
      </div>
      <div class="logofooter">
          <img src={Images.logoBlanc}/>
      </div>
      <div class="fcontacts">
          <a href="mailto:mdj-natoye@outlook.be">mdj-natoye@outlook.be</a>
      </div>
    </div>
    <div class="FinDePage">
      <p>© Lucas Fadeux. Tous droits réservés</p>
    </div>
  </footer>
  );
}
//----------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------HOMEPAGE-----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

function KermesseNatoye2k23({ activeSection }) {
  return (
    <section id="index" className={`header-space ${activeSection === "KermesseNatoye2k23" ? "active" : ""}`}>
    <div className={`HP  ${activeSection === "KermesseNatoye2k23" ? "slide-in" : ""}`}>
      <h1>Kermesse de Natoye 2k23</h1>
      <h3>Du vendredi 13 au dimanche 15 octobre 2023</h3>
      <div className={`bod1b ${activeSection === "KermesseNatoye2k23" ? "slide-in2" : ""}`}>
        <div className="ticket-container">
          <div className="box">
            <p>Réserve ton pass week-end</p>
            <button>Tickets</button>
            <div className="eph1">
             <p>Pas encore disponible</p>
            </div>
          </div>
        </div> 
        <a href="https://www.google.com/maps/dir//50.3371714,5.0685523/@50.3373668,5.0676702,212m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu" target="_blank">
          <div className="box-container">
            <div className="content">
              <div className="icon-text">
                <div className="icon-img">
                  <img src={Images.position} alt="Icone de localisation" />
                </div>
                <div className="text">
                  <p>École communale de Natoye</p>
                  <p>Chaussée de Namur, 23</p>
                  <p>5360 Natoye</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <h2>Line-up</h2>
        <div className={`bod2 ${activeSection === "home" ? "slide-in" : ""}`}>
          <div className='innerbod2'>
            <div className="LineUp">
              <div className="LineUpElements">
                <h2>Vendredi 13</h2>
                <a href="https://www.facebook.com/M4SS.official" target="_blank"><img src={Images.M4SS}/></a>
                <a href='https://www.facebook.com/djbrieuc' target="_blank"> <img src={Images.Brieuc} /></a>
                <a href="https://www.facebook.com/BeljonsProject" target="_blank"><img src={Images.Beljons}/></a>
                <a href="https://www.facebook.com/gregory.halin.7" target="_blank"><img src={Images.greg}/></a>
              </div>

              <div className="LineUpElements">
                <h2>Samedi 14</h2>
                <img src={Images.DJNTY}/>
                <a href="https://www.facebook.com/Deejay.BenB" target="_blank"><img src={Images.BENB}/></a>
                <a href="https://www.facebook.com/arnovsmass" target="_blank"><img src={Images.AM}/></a>
                <a href="https://www.facebook.com/gregory.halin.7" target="_blank"><img src={Images.greg}/></a>
              </div>

              <div className="LineUpElements">
                <h2>Dimanche 15</h2>
                <img src={Images.corse}/>
                <a href="https://www.facebook.com/profile.php?id=100091535763515" target="_blank"><img src={Images.rbjj}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='ac'style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a href="https://www.facebook.com/profile.php?id=100032849186441" target="_blank">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h4>Atomix&Cargo sonorisation</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={Images.AC}/>
            </div>
          </a>
        </div>
      </div>
      <div className='SepLine'></div>
      <h3>Inscription au blind-test</h3>
      <div className="eph2">
             <p>Pas encore disponible</p>
      </div>
    </div>
    <div className='SepLine'></div>
    <h3> </h3>
    </section>
  );
}
//----------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------SPONSOR----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
function Sponsoring({ activeSection }) {
  return (
    <section className={`header-space ${activeSection === "sponsoring" ? "active" : ""}`}>
      <div className='bodySponsoring'>
        <h1>Sponsoring</h1>
        <h2>Nos partenaires principaux</h2>
        <div className="LogoSpP">
          <a href="https://www.bc-immo.be/" target="_blank"><img src={Images.BC} alt="Belpaire et Clarival"/></a>
          <a href="https://www.facebook.com/profile.php?id=100030283064827" target="_blank"><img src={Images.PL} alt="Sébastien Lahaut"/></a>
          <a href="https://www.florianhuet.be/" target="_blank"><img src={Images.FH} alt="Florian Huet"/></a>
          <a href="https://www.dachelet.be/" target="_blank"><img src={Images.Dach} alt="Dachelet"/></a>
          <a href="https://www.facebook.com/profile.php?id=100083514304791" target="_blank"><img src={Images.Baudoin} alt="Louis Baudoin"/></a>
          <a href="https://wallux.com/brasserie-balleux-beauraing" target="_blank"><img src={Images.Balleux} alt="Balleux"/></a>
          <a href="https://www.facebook.com/AssurancesRudyDewez" target="_blank"><img src={Images.Dewez} alt="Dewez assurances srl"/></a>
          <a href="https://www.loterie-nationale.be/bien-plus-que-jouer" target="_blank"><img src={Images.LotNat} alt="Dewez assurances srl"/></a>
        </div>
        <h2>Affichage sur le site de l'évènement</h2>
        <div className="Showroom">
              <img src={Images.SH1}/>
              <img src={Images.SH2}/>
              <img src={Images.SH3}/>
        </div>
        <div className='OR'>
          <p>Les images proposées ont été photographiées par</p>
          <a  href="https://www.facebook.com/OverviewRealisation" target="_blank"><img src={Images.OR}></img></a>
        </div>
      </div>
    </section>
  );
}
//----------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------EVENTS-----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
function Events({ activeSection }) {
  return (
    <section className={`header-space ${activeSection === "events" ? "active" : ""}`}>
      <div className='bodyEvent'>
        <div className='title'>
          <h3>Nos dernières kermesses</h3>
        </div>
        <div className='Affiches0'>
          <div className='Affiches'>
            <img src={Images.Aff2022}></img>
            <img src={Images.Aff2021}></img>
            <img src={Images.Aff2019}></img>
          </div>
        </div>
        <div className='SepLine'></div>
        <h2>Kermesse 2k22</h2>
        <div className='k2022'>
          <div className='box2022'>
          <video width="320" height="240" controls>
            <source src={Images.vid2022} type="video/mp4" />
            Votre navigateur ne prend pas en charge la balise vidéo.
        </video>
        <img src={Images.Aff2022}></img>
          </div>
        </div>
        <h2>Kermesse 2k21</h2>
        <div className='k2021'>

        </div>
        <h2>Kermesse 2k19</h2>  
        <div className='k2019'>

        </div>
      </div>
    </section>
  );
}

function Aboutus({ activeSection }) {
  return (
    <section className={`header-space ${activeSection === "jeunesse" ? "active" : ""}`}>
      <div className='bodyJeunesse'>
        <div className="Group">
          <div className="GroupText">
            <h2>La jeunesse de Natoye</h2>
          </div>
        </div>
        <h1>Qui sommes-nous?</h1>
        <div className='AboutUs'>
        {'\u00A0'}
          <div className="AUleft">
            <p>La jeunesse de Natoye c'est</p>
            <ul>
              <li>50 membres actifs de 16 à 30 ans (et parfois plus)</li>
              <li>une trentaine d'anciens, parents et bénévoles</li>
              <li>une très bonne ambiance</li>
              <li></li>
            </ul>
          </div>
          <div className="AUright">
            <div className='slider'>
              <div className='slider-track'>
                <img src={Images.slide1}></img>
                <img src={Images.slide2}></img>
                <img src={Images.slide3}></img>
                <img src={Images.slide4}></img>
                <img src={Images.slide5}></img>
                <img src={Images.slide6}></img>
                <img src={Images.slide7}></img>
                <img src={Images.slide8}></img>
              </div>
            </div>
          </div>
        </div>
        <h1>Envie de nous rejoindre ?</h1>
      </div>
    </section>
  );
}

function Contacts({ activeSection }) {
  return (
    <section className={`header-space ${activeSection === "contacts" ? "active" : ""}`}>
      <div className='bodyContact'>
      <h1>Contactez-nous !</h1>
        <div className='contactbox'>
          <div className='mail'>
            <img src={Images.email}></img>
            <div className='mailtext'>
              <p>Pour des demandes de sponsoring, collaborations, prestations artistiques, envoyez-nous un e-mail !</p>
              <a href="mailto:mdj-natoye@outlook.be">mdj-natoye@outlook.be</a>
            </div>
          </div>
          <div className='fcb'>
            <img src={Images.fcbw}></img>
            <div className='fcbtext'>
              <p>Pour des questions rapides qui touchent à nos évènements, passez par notre page Facebook</p>
              <a href="https://www.facebook.com/Jeunesse-de-Natoye-1086707128087639" target="_blank"> Jeunesse de Natoye</a>
            </div>
          </div>
        </div>
      <h1>Suivez-nous !</h1>
        <div className='followbox'>
          <div className='insta'>
            <div className='langInsta'>
              <img src={Images.instaw}></img>
              <div className='ftInsta'>
                <h2>jeunesse_de_natoye</h2>
              </div>
            </div>
            <div className='Circle'>
            <img id='QRinsta' src={Images.QRinstaNoir}></img>
            </div>
          </div>
          <div className='snap'>
            <div className='langSnap'>
              <div className='ftSnap'>
                <h2>jeunesse_natoye</h2>
              </div>
              <img src={Images.Bitmoji} id='bitmoji'></img>
            </div>
            <div className='Circle2'>
            <img id='snapcode' src={Images.Snapcode}></img>
            </div>
            </div>
          <div className='tiktok'>
            <div className='langTikTok'>
            <img src={Images.tiktokw}></img>
              <div className='ftTikTok'>
                <h2>jeunesse_de_natoye </h2>
              </div>
            </div>
            <div className='Circle'>
            <img id='QRTT' src={Images.QRTT}></img>
            </div>
          </div>
          <h4>Scanne les codes QR pour ne rien rater !</h4>
        </div>
      </div>
    </section>
  );
}
export default App;
