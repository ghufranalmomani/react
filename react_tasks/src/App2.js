import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './App.css';


const images = [
  { url: "https://img2.storyblok.com/f/89778/786x584/37df951b58/kr_00_00_m.jpg" },
  { url: "https://media.istockphoto.com/photos/sunset-at-seoul-city-skylinesouth-korea-picture-id621371796?k=20&m=621371796&s=612x612&w=0&h=tsIemV--3G6sgmcdWz--82SLDdjHaeU5y69PYmY7UHs=" },
  { url: "https://lp-cms-production.imgix.net/2019-06/09a64fea2933f6da77ab07d671d1f678-south-korea.jpg?sharp=10&vib=20&w=1200&auto=compress&fit=crop&fm=auto&h=800" },
  { url: "https://assets.weforum.org/article/image/NQpJ5-P4Zb54MSYUH9k1DwTJwi0uLfy9wx6cBE4gLH0.jpg" },
  { url: "https://media.architecturaldigest.com/photos/5c0ed0538d2a442e241057b1/16:9/w_2560%2Cc_limit/GettyImages-771579891.jpg" },
  { url: "https://www.traveldailymedia.com/assets/2019/07/South-Korea.jpg" },
  { url: "https://a.cdn-hotels.com/gdcs/production125/d653/a01517ea-0ec0-4639-b862-33922c62f04a.jpg?impolicy=fcrop&w=800&h=533&q=medium" },
];

const App = () => {
  return (
    <div className="App">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default App;