export const Footer = () => {
  return (
    <footer className="footer-tipo" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row">
          <div className="footer-col col-sm-6 col-lg-3">
            <br />
            <img
              src="/src/assets/img/torito-grill.webp"
              width={200}
              alt="Logo empresa"
            />
            <br />
            <br />
            <span style={{ fontSize: 13, color: "white" }}>
              <b>Medios de pagos</b>
            </span>
            <p style={{ fontSize: 13, color: "white" }}>
              Aceptamos todos los medios de pago
            </p>
            <a
              href="terminos-condiciones"
              style={{ textDecoration: "none", color: "#862510" }}
            >
              Términos y Condiciones
            </a>
          </div>
          <div className="footer-col col-sm-6 col-lg-3">
            <br />
            <a
              className="menus"
              href="/"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Inicio
            </a>
            <a
              className="menus"
              href="nosotros"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Nosotros
            </a>
            <a
              className="menus"
              href="servicios"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Servicios
            </a>
            <a
              className="menus"
              href="locales"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Nuestro Locales
            </a>
            <a
              className="menus"
              href="blog"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Blog
            </a>
            <a
              className="menus"
              href="contacto"
              style={{ fontSize: 16, color: "white", marginBottom: 12 }}
            >
              Contacto
            </a>
          </div>
          <div className="footer-col col-sm-6 col-lg-3">
            <br />
            <span style={{ fontSize: 13, color: "white" }}>
              HORARIO DE ATENCION
            </span>
            <p style={{ fontSize: 13, color: "white" }}>
              <b>Local 1:</b> Lunes a Vierens de 06:00pm a 11:00pm
            </p>
            <p style={{ fontSize: 13, color: "white" }}>
              <b>Local 2:</b> Lunes a Viernes de 12:00pm a 11:00pm
            </p>
            <p style={{ fontSize: 13, color: "white" }}>
              Sábados, Domigos y Feriados de 12:00pm a 11:00pm en ambos locales
            </p>
            <p style={{ fontSize: 13, color: "white" }}>
              <b>Números de contacto</b>
              <br />
              Whatsapp: 978 105 066 <br />
              Fijo local 1: 01 528 9667 <br />
              Fijo Local 2: 01 688 4174 <br />
              Realizamos delivery
            </p>
          </div>
          <div className="footer-col col-sm-6 col-lg-3">
            <div className="sociales">
              <br />
              <a
                className="social-icon"
                style={{
                  backgroundColor: "#3c70a4",
                  color: "white",
                  marginBottom: 15,
                  border: "1px solid #fff",
                }}
                href="https://www.facebook.com/profile.php?id=100063782141554"
                target="_blank"
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                className="social-icon"
                style={{
                  backgroundColor: "#39d40a",
                  color: "white",
                  marginBottom: 15,
                  border: "1px solid #fff",
                }}
                href="https://wa.link/3mxkpp"
                target="_blank"
              >
                <i className="bi bi-whatsapp" />
              </a>
              <a
                className="social-icon"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                  boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
                  color: "white",
                  marginBottom: 15,
                  border: "1px solid #fff",
                }}
                href="https://www.instagram.com/toritogrillperu/"
                target="_blank"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                className="social-icon"
                style={{
                  backgroundColor: "#000",
                  color: "white",
                  marginBottom: 15,
                  border: "1px solid #fff",
                }}
                href="https://www.tiktok.com/@toritogrillperu"
                target="_blank"
              >
                <i className="bi bi-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
