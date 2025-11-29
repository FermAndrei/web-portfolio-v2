import Biligo1 from "../assets/BiliGo/BiliGo1.jpeg";
import Biligo2 from "../assets/BiliGo/BiliGo2.jpeg";
import Biligo3 from "../assets/BiliGo/BiliGo3.jpeg";
import Biligo4 from "../assets/BiliGo/BiliGo4.jpeg";
import Biligo5 from "../assets/BiliGo/BiliGo5.jpeg";
import Biligo6 from "../assets/BiliGo/BiliGo6.jpeg";
import Biligo7 from "../assets/BiliGo/BiliGo7.jpeg";
import Biligo8 from "../assets/BiliGo/BiliGo8.jpeg";
import CarRental1 from "../assets/CarRental/CarRental1.png";
import CarRental2 from "../assets/CarRental/CarRental2.png";
import CarRental3 from "../assets/CarRental/CarRental3.png";
import CarRental4 from "../assets/CarRental/CarRental4.png";
import CarRental5 from "../assets/CarRental/CarRental5.png";
import CarRental6 from "../assets/CarRental/CarRental6.png";
import CarRental7 from "../assets/CarRental/CarRental7.png";
import MeloVerse1 from "../assets/MeloVerse/MeloVerse1.jpeg";
import MeloVerse2 from "../assets/MeloVerse/MeloVerse2.jpeg";
import MeloVerse3 from "../assets/MeloVerse/MeloVerse3.jpeg";
import MeloVerse4 from "../assets/MeloVerse/MeloVerse4.jpeg";
import MeloVerse5 from "../assets/MeloVerse/MeloVerse5.jpeg";
import Thesis1 from "../assets/Thesis/EaDRa1.png";
import Thesis2 from "../assets/Thesis/EaDRa2.png";
import Thesis3 from "../assets/Thesis/EaDRa3.png";
import Thesis4 from "../assets/Thesis/EaDRa4.png";
import Thesis5 from "../assets/Thesis/EaDRa5.png";
import Thesis6 from "../assets/Thesis/EaDRa6.png";
import WebPortV1 from "../assets/WebPortfolioV1/WebPortfolio1.jpeg";
import WebPortV2 from "../assets/WebPortfolioV1/1WebPortfolio.jpeg";
import WebPortV3 from "../assets/WebPortfolioV1/2WebPortfolio.jpeg";
import WebPortV4 from "../assets/WebPortfolioV1/3WebPortfolio.jpeg";
import WebPortV5 from "../assets/WebPortfolioV1/4WebPortfolio.jpeg";
import WebPortV6 from "../assets/WebPortfolioV1/5WebPortfolio.jpeg";
import WebPortV7 from "../assets/WebPortfolioV1/WebPortfolio2.jpeg";

export const ProjectData = [
  {
    id: 1,
    name: "BiliGoss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
    thumbnail: Biligo1,
    images: [Biligo2, Biligo3, Biligo4, Biligo5, Biligo6, Biligo7, Biligo8],
    date: "August 22",
    techUse: ["HTML", "HTML", "HTML", "HTML", "HTML"],
  },
  {
    id: 2,
    name: "MeloVerse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
    thumbnail: MeloVerse1,
    images: [[MeloVerse2, MeloVerse3, MeloVerse4, MeloVerse5]],
    date: "August 22",
    techUse: ["TITE", "HTML", "HTML", "HTML", "HTML"],
  },
  {
    id: 3,
    name: "Web Porfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
    thumbnail: WebPortV1,
    images: [WebPortV2, WebPortV3, WebPortV4, WebPortV5, WebPortV6, WebPortV7],
    date: "August 22",
    techUse: ["HTML", "HTML", "HTML", "HTML", "HTML"],
  },
  {
    id: 4,
    name: "Web PorfolioV2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    ],
    date: "August 22",
    techUse: ["HTML", "HTML", "HTML", "HTML", "HTML"],
  },
  {
    id: 5,
    name: "Emergency and Disaster Response Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
    thumbnail: Thesis1,
    images: [Thesis2, Thesis3, Thesis4, Thesis5, Thesis6],
    date: "August 22",
    techUse: ["HTML", "HTML", "HTML", "HTML", "HTML"],
  },
  {
    id: 6,
    name: "Car Rental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
    link: "www.youtube.com",
    type: "Development",
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
    techUse: ["HTML", "HTML", "HTML", "HTML", "HTML"],
  },
].map((item) => ({
  ...item,
  slug: item.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, ""),
}));
