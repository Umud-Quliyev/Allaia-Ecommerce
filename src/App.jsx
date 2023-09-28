import React from "react";
import Main_Header from "./components/Main_Header/Main_Header";
import Carousel from "./components/Carousel/Carousel";
import Banners from "./components/Banners/Banners";
import Products from "./components/Products/Products";
import Featured from "./components/Featured/Featured";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Top_Products from "./components/Top_Products/Top_Products";

function App() {
  return (
    <>
      <Main_Header />
      <Carousel />
      <Banners />
      <Top_Products />
      <Featured />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
