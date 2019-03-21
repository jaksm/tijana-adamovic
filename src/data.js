// Country images

// Social Links
import canada from "./assets/canada.jpg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import newZeland from "./assets/new-zeland.jpg";
import uk from "./assets/uk.jpg";
import usa from "./assets/usa.jpg";
// import australia from "./assets/australia.png"; TODO: DODAJ SLIKU I ODKOMENTARISI

const countries = [
  {
    name: "usa",
    title: "USA",
    keywords: ["usa", "amerika"],
    text: "USA opis",
    image: usa,
    price: 123
  },
  {
    name: "kanada",
    title: "Kanada",
    keywords: ["kanada"],
    text: "Kanada opis",
    image: canada
  },
  {
    name: "engleska",
    title: "Engleska",
    keywords: ["ujedinjeno kraljevstvo", "engleska"],
    text: "Engleska opis",
    image: uk
  },
  {
    name: "novi-zeland",
    title: "Novi Zeland",
    keywords: ["novi zeland"],
    text: "Novi Zeland opis",
    image: newZeland
  },
  {
    name: "australija",
    title: "Australija",
    keywords: ["australia, australija"],
    text: "Australija opis",
    image: "australia"
  }
];

const socialLinks = [
  { alt: "Facebook", src: facebook, url: "https://www.facebook.com/" },
  { alt: "Instagram", src: instagram, url: "https://www.instagram.com/" }
];

export { countries, socialLinks };
