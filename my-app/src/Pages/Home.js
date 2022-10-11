import RapidButton from "../Components/RapidButton"
import BackgroundImageTop from "../Images/thum_privas-6.jpg"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"
import arrow from "../Images/arrow.png"

function Home() {
  return (
    <div>
      <img className="img" src={BackgroundImageTop} alt=""></img>
      <h1>Notre Communauté</h1>
      <div className="ButtonDiv">
        <RapidButton image={test} text="Présentation" to="/environnement" />
        <RapidButton image={test} text="Fonctionnement" to="/environnement" />
        <RapidButton image={test} text="Compétences" to="/environnement" />
        <RapidButton image={test} text="Communes" to="/environnement" />
        <RapidButton image={test} text="Territoire" to="/environnement" />
        <RapidButton image={test} text="Contact" to="/environnement" />
      </div>
      <div className="LastCarousel">
          <img src={arrow} alt=""></img>

          <div className="textDiv">
            <h1>Infos Covid 19</h1>
            <div className="boxDiv">
              <p>blabla</p>
              <a href="google.com" >Lire la suite</a>
            </div>
          </div>
          <img src={arrow} alt="" className="arrowRigth"></img>
      </div>

    </div>
  );
}



export default Home;
