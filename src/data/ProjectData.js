import Biligo1 from "../assets/BiliGo/BiliGo1.jpeg";
import Biligo2 from "../assets/BiliGo/BiliGo2.jpeg";
import Biligo3 from "../assets/BiliGo/BiliGo3.jpeg";
import Biligo4 from "../assets/BiliGo/BiliGo4.jpeg";
import Biligo5 from "../assets/BiliGo/BiliGo5.jpeg";
import Biligo6 from "../assets/BiliGo/BiliGo6.jpeg";
import Biligo7 from "../assets/BiliGo/BiliGo7.png";
import CarRental1 from "../assets/CarRental/CarRental1.png";
import CarRental2 from "../assets/CarRental/CarRental2.png";
import CarRental3 from "../assets/CarRental/CarRental3.png";
import CarRental4 from "../assets/CarRental/CarRental4.png";
import CarRental5 from "../assets/CarRental/CarRental5.png";
import CarRental6 from "../assets/CarRental/CarRental6.png";
import CarRental7 from "../assets/CarRental/CarRental7.png";
import MeloVerse1 from "../assets/MeloVerse/MeloVerse1.jpeg";
import MeloVerse2 from "../assets/MeloVerse/MeloVerse2.jpeg";
import MeloVerse3 from "../assets/MeloVerse/MeloVerse3.png";
import Thesis1 from "../assets/Thesis/EaDRa1.png";
import Thesis2 from "../assets/Thesis/EaDRa2.png";
import Thesis3 from "../assets/Thesis/EaDRa3.png";
import Thesis4 from "../assets/Thesis/EaDRa4.png";
import WebPortV1 from "../assets/WebPortfolioV1/WebPortfolio1.jpeg";
import WebPortV2 from "../assets/WebPortfolioV1/1WebPortfolio.jpeg";
import WebPortV3 from "../assets/WebPortfolioV1/2WebPortfolio.jpeg";
import WebPortV4 from "../assets/WebPortfolioV1/3WebPortfolio.jpeg";
import WebPortV5 from "../assets/WebPortfolioV1/4WebPortfolio.png";

export const ProjectData = [
  {
    id: 1,
    name: "BiliGo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "https://biligo.vercel.app",
    type: "E-Commerce",
    thumbnail: Biligo1,
    images: [Biligo2, Biligo3, Biligo4, Biligo5, Biligo6, Biligo7],
    date: "August 22",
    techUse: [
      "ReactJS",
      "Tailwind",
      "Vite",
      "DummyJson",
      "CSS",
      "React Router",
      "Git",
    ],
  },
  {
    id: 2,
    name: "MeloVerse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Landing Page",
    thumbnail: MeloVerse1,
    images: [MeloVerse2, MeloVerse3],
    date: "August 22",
    techUse: ["ReactJS", "Tailwind", "Vite", "Git"],
  },
  {
    id: 3,
    name: "Web Porfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Portfolio V1",
    thumbnail: WebPortV1,
    images: [WebPortV2, WebPortV3, WebPortV4, WebPortV5],
    date: "August 22",
    techUse: ["ReactJS", "Tailwind", "Vite", "DataAOS", "Git"],
  },
  {
    id: 4,
    name: "Web Porfolio V2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Portfolio V2",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    ],
    date: "August 22",
    techUse: ["ReactJS", "Tailwind", "MUI", "React Router", "Vite", "Git"],
  },
  {
    id: 5,
    name: "Emergency and Disaster Response Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Thesis",
    thumbnail: Thesis1,
    images: [Thesis2, Thesis3, Thesis4],
    date: "August 22",
    techUse: ["C#", "Java", "FireBase", "SQL", "Git"],
  },
  {
    id: 6,
    name: "Car Rental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "",
    thumbnail: CarRental1,
    images: [
      CarRental2,
      CarRental3,
      CarRental4,
      CarRental5,
      CarRental6,
      CarRental7,
    ],
    date: "August 22",
    techUse: ["C#", "MySQL", "Git"],
  },
].map((item) => ({
  ...item,
  slug: item.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, ""),
}));
