import RapidButton from "../Components/RapidButton"
import BackgroundImageTop from "../Images/thum_privas-6.jpg"
import test from "../Images/Home/IMG_4495.jpg"
import "./Home.css"

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
    </div>
  );
}



export default Home;
