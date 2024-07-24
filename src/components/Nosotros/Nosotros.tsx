import "../../assets/css/style.css";
export const Nosotros = () => {
  return (
    <div className="container-fluid px-5" style={{ marginBottom: 60 }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8" style={{ marginTop: 100 }}>
          <h3>
            <b>¿Quiénes somos?</b>
          </h3>
          <br />
          <h3 style={{ marginTop: 30 }}>
            <b>Visión:</b>
          </h3>
          <br />
          <p>
            Queremos ser el restaurante a primera elección en Los Olivos, y en
            todas partes, donde la comida deliciosa y un servicio excepcional se
            combinan para crear momentos felices.
          </p>
          <br />
          <h3 style={{ marginTop: 30 }}>
            <b>Misión:</b>
          </h3>
          <br />
          <p>
            En Torito Grill, nuestra misión es simple: servir la mejor comida,
            las bebidas más deliciosas y brindar la mejor atención. Queremos que
            cada visita sea especial, que disfrutes de tus platos favoritos,
            bebidas de alta calidad y que te sientas como en casa. Nuestro
            equipo está dedicado a hacer que tu estadía sea inolvidable, porque
            tu satisfacción es nuestra prioridad número uno. Buscamos mejorar
            constantemente para ofrecer la mejor experiencia culinaria.
          </p>
          <br />
          <h3 style={{ marginTop: 30 }}>
            <b>Nuestros Valores:</b>
          </h3>
          <br />
          <ol>
            <li>
              <b>Calidad:</b> Utilizamos los insumos más frescos y de la más
              alta calidad garantizando así que su estadía sea de total agrado
            </li>
            <li>
              <b>Pasión:</b> La pasión por los sabores auténticos impulsa cada
              plato que servimos. Nuestro equipo está comprometido en brindar
              una atención cálida y personalizada.
            </li>
            <li>
              <b>Sostenibilidad:</b> Trabajamos con agricultores y proveedores
              de la región, promoviendo prácticas sostenibles y responsabilidad
              social.
            </li>
            <li>
              <b>Encuentro:</b> Torito Grill es el lugar ideal para compartir
              momentos especiales a la hora de comer y brindar ya sea en
              familia, con amigos o en pareja.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export const NosotrosTwo = () => {
  return (
    <div className="container px-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2
            style={{ backgroundColor: "#862510", color: "white", padding: 10 }}
          >
            ¡Conoce a nuestro equipo!
          </h2>
        </div>
      </div>
      <div className="row justify-content-center" style={{ marginTop: 50 }}>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src="/src/assets/img/nosotros1.webp"
            style={{ cursor: "pointer" }}
            className="img-fluid imagen-modal"
            data-imagen="views/img/nosotros1.webp"
            alt="Miembro del equipo 1"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src="/src/assets/img/nosotros2.webp"
            style={{ cursor: "pointer" }}
            className="img-fluid imagen-modal"
            data-imagen="views/img/nosotros2.webp"
            alt="Miembro del equipo 2"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src="/src/assets/img/nosotros3.webp"
            style={{ cursor: "pointer" }}
            className="img-fluid imagen-modal"
            data-imagen="views/img/nosotros3.webp"
            alt="Miembro del equipo 3"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src="/src/assets/img/nosotros4.webp"
            style={{ cursor: "pointer" }}
            className="img-fluid imagen-modal"
            data-imagen="views/img/nosotros4.webp"
            alt="Miembro del equipo 4"
          />
        </div>
      </div>
    </div>
  );
};

export const NosotrosThree = () => {
  return (
    <div className="container mb-5">
      <hr style={{ border: "1px solid #000", marginBottom: 25 }} />
      <div className="text-center redes">
        <h2>
          <b>Visita nuestras redes sociales:</b>
        </h2>
        <br />
        <a
          href="https://www.facebook.com/people/Torito-Grill/100063782141554/"
          target="_blank"
        >
          <i className="bi bi-facebook" /> Facebook
        </a>
        <a href="https://www.instagram.com/toritogrillperu/" target="_blank">
          <i className="bi bi-instagram" /> Instagram
        </a>
        <a href="https://www.tiktok.com/@toritogrillperu" target="_blank">
          <i className="bi bi-tiktok" /> Tik Tok
        </a>
        <a href="https://wa.link/3mxkpp" target="_blank">
          <i className="bi bi-whatsapp" /> Whatsapp
        </a>
      </div>
      <hr style={{ border: "1px solid #000", marginBottom: 25 }} />
    </div>
  );
};
