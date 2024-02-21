import { Eletronics } from "./components/products/eletronics";
import { Header } from "./components/header";
import { Promotion } from "./components/promotion";
import { Details } from "./components/details";
import { Items } from "./components/items";
import { Jewelery } from "./components/products/joias";
import { WomanCloths } from "./components/products/woman";
import { ADS1, ADS2, ADS3 } from "./components/ads";
import { MenCloths } from "./components/products/men";

export default function Home() {
  return (
    <>
      <Header/> 
      <Items/>
      <Promotion/> 
      <Details/> 
      <Eletronics/>
      <ADS1/>
      <Jewelery/>
      <ADS2/>
      <WomanCloths/>
      <ADS3/>
      <MenCloths/>
    </>
  );
}
