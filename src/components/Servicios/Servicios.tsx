export const Servicios = () => {
  return (
    <div className="container-fluid px-5" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center">
        <div
          className="col-12 col-md-10 col-lg-8"
          style={{ marginTop: 100, marginBottom: 100 }}
        >
          <h3>
            <b>¡Reserva con nosotros!</b>
          </h3>
          <br />
          <p>
            Celebra reuniones corporativas, celebraciones familiares,
            celebracion de cumpleaños, aniversarios, etc. Aceptamos todo tipo de
            reservas.
          </p>
          <br />
          <a className="consulta" href="contacto">
            Consulta Aqui
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};
export const ServiciosTwo = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginBottom: "-15px", backgroundColor: "#FFF3E4" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-4 py-md-5" style={{ marginTop: 10 }}>
          <img
            src="/src/assets/img/piso2.webp"
            alt="Piso 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 py-md-5">
          <h3 style={{ marginTop: 30 }}>
            <b>Piso 2:</b>
          </h3>
          <br />
          <p>
            ¡Celebra con nosotros!🥳 <br /> Una reunión en familia, una reunión
            laboral, o lo que gustes. El espacio es amplio y agradable para tu
            estadía.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
export const ServiciosThree = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{ marginBottom: "-15px", backgroundColor: "bisque" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-4 py-md-5">
          <h3 style={{ marginTop: 30 }}>
            <b>Piso 3:</b>
          </h3>
          <br />
          <p>
            Música, cocteles, piqueos, comida y más. Todo en un mismo lugar,
            celebra con nosotros en nuestro Bar. 🍾
          </p>
          <br />
        </div>
        <div className="col-md-4 py-md-5">
          <img src="/src/assets/img/piso3.webp" alt="Piso 3" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
