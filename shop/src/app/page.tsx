import { Eletronics } from "./components/products/eletronics";
import { Header } from "./components/header";
import { Promotion } from "./components/promotion";
import { Details } from "./components/details";
import { Electrolize } from "next/font/google";

export default function Home() {
  return (
    <>
      <Header/> 
      <Promotion/> 
      <Details/> 
      <Eletronics/>
    </>
  );
}
