import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ConfigProvider } from "antd";
import LayoutPage from "./layout";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Help from "./pages/Help";
import Footer from "./pages/Footer";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F53838",
          fontFamily: "Rubik",
        },
        components: {
          Carousel: {
            /* here is your component tokens */
            dotHeight: 15,
            dotWidth: 15,
            dotActiveWidth: 45,
          },
        },
      }}
    >
      <LayoutPage footer={<Footer />}>
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <Help />
      </LayoutPage>
    </ConfigProvider>
  );
}

export default App;
