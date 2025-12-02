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
      "Biligo is an e-commerce web application built to enhance my React development skills, focusing on API fetching, state management, and UI design. Customers can browse products, view item details, and add items to their cart for a smooth shopping experience. \n Developed using React.js, Axios for API handling, React Router for client-side navigation, and Tailwind CSS for fast and responsive styling. Product data is powered by DummyJSON, making the app fully functional for testing and learning real-world e-commerce flows.",
    link: "https://biligo.vercel.app",
    type: "E-Commerce",
    thumbnail: Biligo1,
    images: [Biligo2, Biligo3, Biligo4, Biligo5, Biligo6, Biligo7],
    date: "Oct, 27 2025",
    techUse: [
      "ReactJS",
      "Tailwind",
      "Axios",
      "Vite",
      "DummyJson",
      "CSS",
      "React Router",
      "Git",
    ],
    link: "https://biligo.vercel.app/",
    gitHub: "https://github.com/FermAndrei/biligoPROD",
    liveDemo: true,
  },
  {
    id: 2,
    name: "MeloVerse",
    description:
      "MeloVerse is my first React project, created as a hands-on introduction to building components and understanding how React works. The website was also a practice ground for designing responsive user interfaces using Tailwind CSS, helping me learn how to structure layouts, style elements, and adapt designs across different screen sizes.",
    link: "www.youtube.com",
    type: "Landing Page",
    thumbnail: MeloVerse1,
    images: [MeloVerse2, MeloVerse3],
    date: "Dec, 13 2024",
    techUse: ["ReactJS", "Tailwind", "Vite", "Git"],
    link: "https://meloverse1.vercel.app/",
    gitHub: "https://github.com/FermAndrei/MeloVerse",
    liveDemo: true,
  },
  {
    id: 3,
    name: "Web Porfolio",
    description:
      "My first personal portfolio website I created to showcase my projects, skills, and UI design creativity. It highlights my ability to structure components, craft responsive layouts, and style interfaces using ReactJS and Tailwind CSS. The site also features smooth animations powered by the AOS (Animate On Scroll) Library, adding a dynamic and modern feel to the overall user experience.",
    link: "www.youtube.com",
    type: "Portfolio V1",
    thumbnail: WebPortV1,
    images: [WebPortV2, WebPortV3, WebPortV4, WebPortV5],
    date: "Jan, 3 2024",
    techUse: ["ReactJS", "Tailwind", "Vite", "DataAOS", "Git"],
    link: "https://favt.vercel.app/",
    gitHub: "https://github.com/FermAndrei/web-portfolio",
    liveDemo: true,
  },
  {
    id: 4,
    name: "Web Porfolio V2",
    description:
      "Web Portfolio V2 is the enhanced version of my original portfolio website, featuring a cleaner structure and smoother navigation. This version integrates React Router for seamless routing between pages and uses JSON data to dynamically display my projects and personal information. Built with ReactJS and Tailwind CSS, it showcases improved UI design, responsiveness, and overall presentation of my work.",
    link: "www.youtube.com",
    type: "Portfolio V2",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    ],
    date: "Dec, 2 2025",
    techUse: ["ReactJS", "Tailwind", "MUI", "React Router", "Vite", "Git"],
    link: "https://biligo.vercel.app/",
    gitHub: "https://github.com/FermAndrei/web-portfolio-v2",
    liveDemo: true,
  },
  {
    id: 5,
    name: "Emergency and Disaster Response Application",
    description:
      "Emergency and Disaster Response Application for Nagcarlan, Laguna is a community-focused system developed for the Bureau of Fire Protection (BFP) Nagcarlan to strengthen disaster preparedness and response. The application provides real-time updates during emergencies, allows residents to report incidents directly, and offers essential resources such as an emergency checklist and nearby evacuation center locations. Designed to support both responders and the community, it improves communication, safety awareness, and overall emergency coordination.",
    link: "www.youtube.com",
    type: "Thesis",
    thumbnail: Thesis1,
    images: [Thesis2, Thesis3, Thesis4],
    date: "Dec, 5 2022",
    techUse: ["C#", "Java", "FireBase", "SQL", "Git"],
    link: "",
    gitHub: "https://github.com/FermAndrei/EmergencyApp-Mobile",
    liveDemo: false,
  },
  {
    id: 6,
    name: "Car Rental",
    description:
      "Car Rental is a school project designed to familiarize students with CRUD (Create, Read, Update, Delete) operations in a practical setting. The application provides a user-friendly platform where end-users can browse available vehicles, make reservations, and manage bookings conveniently from their personal computer, simulating a real-world car rental experience.",
    link: "www.youtube.com",
    type: "Project",
    thumbnail: CarRental1,
    images: [
      CarRental2,
      CarRental3,
      CarRental4,
      CarRental5,
      CarRental6,
      CarRental7,
    ],
    date: "Dec, 5 2022",
    techUse: ["C#", "MySQL", "Git"],
    link: "",
    gitHub: "https://github.com/FermAndrei/Car-Rental",
    liveDemo: false,
  },
].map((item) => ({
  ...item,
  slug: item.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, ""),
}));
