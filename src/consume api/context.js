import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const getDataProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    setProduct(response.data);
  };

  useEffect(() => {
    getDataProduct();
  }, []);
  return <Context.Provider value={{ product }}>{children}</Context.Provider>;
};

export { Context, Provider };
