import "../../assets/css/style.css";
export const Header = () => {
  return (
    <div className="sticky-top container-fluid p-0 m-0">
      <nav className="navegaciones">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i
            className="bi bi-list"
            style={{ backgroundColor: "white", borderRadius: 10 }}
          />
        </label>
        <a href="/" className="enlace">
          <img src="/src/assets/img/torito-grill.webp" alt="" className="logo" />
        </a>
        <ul>
          <li>
            <a className="active" href="/" style={{ fontSize: 13 }}>
              <b>INICIO</b>
            </a>
          </li>
          <li>
            <a href="nosotros" style={{ fontSize: 13 }}>
              <b>NOSOTROS</b>
            </a>
          </li>
          <li>
            <a href="servicios" style={{ fontSize: 13 }}>
              <b>SERVICIOS</b>
            </a>
          </li>
          <li>
            <a href="carta" style={{ fontSize: 13 }}>
              <b>CARTA</b>
            </a>
          </li>
          <li>
            <a href="blog" style={{ fontSize: 13 }}>
              <b>BLOG</b>
            </a>
          </li>
          <li>
            <a href="locales" style={{ fontSize: 13 }}>
              <b>NUESTROS LOCALES</b>
            </a>
          </li>
          <li>
            <a
              className="contact"
              href="contacto"
              style={{ fontSize: 13, padding: "10px 20px", color: "white" }}
            >
              <b>CONTÁCTANOS</b>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
