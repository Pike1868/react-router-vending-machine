import sodaImage from "./assets/images/soda.jpeg";
import chocolateImage from "./assets/images/chocolate.png";
import skittlesImage from "./assets/images/skittles.jpeg";

const vendingList = [
  {
    id: 1,
    name: "Soda",
    message: "Open happiness",
    image: sodaImage,
    path: "/soda",
  },
  {
    id: 2,
    name: "Chocolate",
    message: "Pure chocolate bliss",
    image: chocolateImage,
    path: "/chocolate",
  },
  {
    id: 3,
    name: "Skittles",
    message: "Taste the rainbow",
    image: skittlesImage,
    path: "/skittles",
  },
];

export default vendingList;
