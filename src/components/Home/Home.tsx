import "../../assets/css/style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../shared/animations";

export const Home = () => {
  return (
    <section>
      <motion.div 
        className="fondo-imagen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/src/assets/img/fondo-inicio.webp"
          className="img-fluid"
          alt="Fondo de inicio"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link className="pide-aqui" to="/contacto">
            <motion.b
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PIDE AQUÍ
            </motion.b>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Contenido = () => {
  return (
    <section className="conocenos px-4" style={{ marginBottom: 50 }}>
      <div className="container" style={{ backgroundColor: "#FEF3E4" }}>
        <div className="row">
          <br />
          <ScrollReveal className="col-md-6 pollito" style={{ padding: 15 }}>
            <motion.img
              src="/src/assets/img/pollo-1.webp"
              alt="Pollito"
              className="img-fluid"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            />
          </ScrollReveal>
          <ScrollReveal 
            className="col-md-6" 
            style={{ marginTop: 20, padding: 15 }}
            delay={0.3}
          >
            <motion.p 
              style={{ fontSize: 20 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.b
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Conócenos
              </motion.b>
              <br />
              <br />
              <br />
              Iniciamos en el 2013 con una propuesta diferente, <br />
              luego de hacer un estudio de mercado, y con la <br />
              finalidad de innovar, lanzamos Torito Grill. <br />
              Un restaurante de parrillas, pollos y bar, <br />
              acompañando nuestros platos de papitas naturales <br />
              amarillas con cáscara. Convirtiéndonos así en los <br />
              pioneros en el mercado con esta novedad.
            </motion.p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export const ContenidoTwo = () => {
  return (
    <div className="container-fluid container-descubre">
      <div className="row descubre">
        <p style={{ marginTop: 10, textAlign: "center" }}>
          Descubre todo lo que tenemos para ti
        </p>
      </div>
      <br />
    </div>
  );
};

export const ContenidoThree = () => {
  return (
    <div className="container-fluid px-5" style={{ padding: 20 }}>
      <div className="row imagen-menu justify-content-center">
        <div className="col-md-4 text-center item">
          <img
            src="/src/assets/img/pollo-1.webp"
            alt="Pollo a la Brasa"
            className="img-fluid"
          />
          <h3>
            <b>POLLOS A LA BRASA</b>
          </h3>
          <p>
            Nuestro auténtico pollito a la brasa acompañado de papitas amarillas
            nativas y las cremas de la casa ¡Exquisito! 🍗.
          </p>
        </div>
        <div className="col-md-4 text-center item">
          <img
            src="/src/assets/img/parrilla.webp"
            alt="Parrilla"
            className="img-fluid"
          />
          <h3>
            <b>PARRILLA &amp; CRIOLLOS</b>
          </h3>
          <p>
            Pollo, carnes y además una gran variedad de platos criollos y
            gourmet en un sólo lugar. ¿Te lo vas a perder? 😋
          </p>
        </div>
        <div className="col-md-4 text-center item">
          <img
            src="/src/assets/img/bar.webp"
            alt="Tragos"
            className="img-fluid"
          />
          <h3>
            <b>BAR &amp; PIQUEOS</b>
          </h3>
          <p>
            Tenemos una gran variedad de cocteles de autor y cocteles clásicos
            con el toque Torito Grill. Además disfruta de los más ricos
            piqueos.🥵
          </p>
        </div>
      </div>
    </div>
  );
};

export const ContenidoFour = () => {
  return (
    <section className="fondo-imagen2">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="mt-4">@TORITOGRILLPERU</h1>
            <p>
              Marcando la diferencia y brindándote lo mejor en pollos, parrillas
              y bar además de una excelente atención desde el año 2016.
            </p>
            <p>¿Quieres conocer más sobre Torito Grill?</p>
            <a href="nosotros" className="btn btn-lg mt-3">
              CLIC AQUÍ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
