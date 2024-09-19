import { Carta, CartaThree, CartaTwo } from "../../components/Carta/Carta";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { NosotrosThree } from "../../components/Nosotros/Nosotros";
export const CartaPage = () => {
  return (
    <>
      <Header />
      <Carta />
      <CartaTwo />
      <CartaThree />
      <NosotrosThree />
      <Footer />
    </>
  );
};
