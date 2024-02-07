import React from "react";
import Nav from "../component/navbar";
import Modal from "../component/modal";
import Main from "../component/main";
import Shop from "../component/shop";
import Footer from "../component/footer";
import Butom from "../component/butom";
import Promo from "../component/promo";
import { Provider } from "../consume api/context";
import Yang from "../component/yang";
const Home = () => {
  return (
    <>
      <Nav />
      <Modal />
      <Main />
      <Promo />
      <Yang />
      <Provider>
        <Shop />
      </Provider>
      <Footer />
      <Butom />
    </>
  );
};

export default Home;
