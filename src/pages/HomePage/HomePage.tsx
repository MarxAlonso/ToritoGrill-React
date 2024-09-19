import { Header } from "../../components/Header/Header";
import { Contenido, ContenidoTwo, ContenidoThree, ContenidoFour, Home } from "../../components/Home/Home";
import { Footer } from "../../components/Footer/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Contenido />
      <ContenidoTwo />
      <ContenidoThree />
      <ContenidoFour />
      <Footer />
    </>
  );
};
