import "../../assets/css/style.css";
export const Carta = () => {
  return (
    <div className="container-fluid p-5" style={{ marginBottom: "-15px" }}>
      <div
        className="row justify-content-center"
        style={{ textAlign: "center" }}
      >
        <div className="col-md-8 text-center">
          {" "}
          {/* Ajusta el tamaño de la columna según tus necesidades */}
          <p
            style={{
              backgroundColor: "#862510",
              color: "white",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Disfruta de nuestros ricos platos en salón o pídelo por delivery.
          </p>
        </div>
      </div>
    </div>
  );
};
export const CartaTwo = () => {
  return (
    <div className="container-fluid p-5" style={{ marginBottom: 15 }}>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <img
            src="/src/assets/img/carta1.webp"
            alt="Carta 1"
            className="img-fluid"
          />
        </div>
      </div>
      <br />
      {/* Nueva fila para las dos imágenes */}
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <img
            src="/src/assets/img/carta2.webp"
            alt="Carta 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 text-center">
          <img
            src="/src/assets/img/carta3.webp"
            alt="Carta 3"
            className="img-fluid"
          />
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <img
            src="/src/assets/img/carta4.webp"
            alt="Carta 4"
            className="img-fluid"
          />
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {" "}
            {/* Ajusta el tamaño de la columna según tus necesidades */}
            <a
              href="https://toritogrillpe.com/wp-content/uploads/2023/10/carta.pdf"
              target="_blank"
              className="nuestra-carta"
            >
              DESCARGA NUESTRA CARTA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CartaThree = () => {
  return (
    <div className="container mb-5">
      <hr style={{ border: "2px solid #000", marginBottom: 30 }} />
      <div className="text-center redes">
        <p style={{ fontSize: 20 }}>
          Disfruta de tus platos favoritos en pollos, carnes y parrillas.
          Además, deléitate con nuestros cocteles de la casa y piqueos del Bar.
        </p>
        <br />
      </div>
    </div>
  );
};
