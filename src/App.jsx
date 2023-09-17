import React from "react";
import Main_Header from "./components/Main_Header/Main_Header";
import Carousel from "./components/Carousel/Carousel";
import Banners from "./components/Banners/Banners";
import Products from "./components/Products/Products";
import Featured from "./components/Featured/Featured";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <>
      <Main_Header />
      <Carousel />
      <Banners />
      <Products />
      <Featured />
      <Partners />
    </>
  );
}

export default App;
