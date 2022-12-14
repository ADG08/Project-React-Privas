import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"

import journeeEuro from "../Images/Home/journeeEuro.png"
import projet from "../Images/Home/ImageProjet.jpg"
import ImageEau from "../Images/Home/ImageEau.png"

import ImageEnfant from "../Images/Home/Enfant.png"
import poubellesImg from "../Images/Home/poubelles.jpg"
import transportImg from "../Images/Home/transport.png"
import economieImg from "../Images/Home/economie.png"

import imgCarousel1 from "../Images/culture/theatre2.jpg"
import imgCarousel2 from "../Images/culture/theatre3.jpg"
import { Link } from "react-router-dom";

function Slider({ classe }) {


  const data1 = [
    {
      id: 1,
      image: `${journeeEuro}`,
      title: "Journées Européennes du Patrimoine 2022",
      text: "Retrouvez le programme des Journées Européennes du Patrimoine qui se dérouleront le 17 et 18 septembre sur le territoire de la CAPCA.",
    },
    {
      id: 2,
      image: `${projet}`,
      title: 'Appel à projet " Travailler autrement" 2022',
      text: "Travailler autrement sur le territoire de la Communauté d’Agglomération Privas Centre Ardèche, c’est possible ! Pour accompagner l’émergence et le développement...",
    }, {
      id: 3,
      image: `${ImageEau}`,
      title: "Réduisez votre consommation d’eau sans changer vos habitudes",
      text: "En 2021, la Communauté d’Agglomération Privas Centre Ardèche vous proposait différents moyens de réduire votre consommation d’eau.",
    }
  ]

  const data2 = [
    {
      id: 1,
      image: `${ImageEnfant}`,
      title: "Action sociale",
      text: "Le Président de la Communauté d’Agglomération et les Vice-président(e)s et les conseillers membres du bureau vous souhaitent une belle année 2022, faite de projets, de réussites et de sérénité pour mieux vivre ensemble.",
    },
    {
      id: 2,
      image: `${poubellesImg}`,
      title: "Déchetteries et déchets ménagers",
      text: "Pas d’inquiétudes, les déchetteries à Privas, à Flaviac, à La Voulte sur Rhône, à Saint Sauveur de Montagut, au Pouzin, à Vernoux en Vivarais sont ouvertes.",
    },
    {
      id: 3,
      image: `${transportImg}`,
      title: "Transport",
      text: "Le covoiturage est un mode de transport utile et sûr pour vous déplacer au quotidien tout en limitant vos contacts. Dans le cadre de la crise sanitaire, il est possible de covoiturer et de se déplacer en respectant les directives gouvernementales !",
    },
    {
      id: 4,
      image: `${economieImg}`,
      title: "Économie",
      text: "Découvrez les aides aux commerces de proximité dans le cadre du Plan régional."
    }
  ]

  const data3 = [
    {
      id: 1,
      image: `${imgCarousel1}`,
      title: "« Espace culturel Louis Nodon » à Vernoux en Vivarais",
      text: "L’« Espace culturel Louis Nodon » a été inauguré le 24 novembre 2012. Cette salle propose depuis, une diversité de spectacles à destination de tous : théâtre, musique, danse, cirque, etc...",
    },
    {
      id: 2,
      image: `${imgCarousel2}`,
      title: "« Espace culturel Louis Nodon » à Vernoux en Vivarais",
      text: "L’« Espace culturel Louis Nodon » a été inauguré le 24 novembre 2012. Cette salle propose depuis, une diversité de spectacles à destination de tous : théâtre, musique, danse, cirque, etc...",
    }
  ]

  let datas;
  let time;

  if (classe === "first") {
    datas = data1;
    time = 4000;
  }
  if (classe === "second") {
    datas = data2;
    time = 4150;
  }
  if (classe === "culture") {
    datas = data3;
    time = 4000;
  }

  return (
    <Carousel autoPlay interval={time} infiniteLoop>
      {datas.map(slide => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay_title">{slide.title}</h2>
            <p className="overlay_text">{slide.text}</p>
            <Link to="/Travaux">Lire la suite</Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;