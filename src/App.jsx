import React, { useEffect } from "react";
import Main_Header from "./components/Main_Header/Main_Header";
import Carousel from "./components/Carousel/Carousel";
import Banners from "./components/Banners/Banners";
import Featured from "./components/Featured/Featured";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Top_Products from "./components/Top_Products/Top_Products";
import Latest from "./components/Latest/Latest";
import Hotjar from '@hotjar/browser';

const siteId = 5086880;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  function handleSearch(filteredData) {}

  return (
    <div>
      <Main_Header onSearch={handleSearch} />
      <Carousel />
      <Banners />
      <Top_Products />
      <Featured />
      <Partners />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
