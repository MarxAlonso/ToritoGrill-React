export const Locales = () => {
  return (
    <div className="container-fluid p-5" style={{ marginBottom: "-15px" }}>
      <div
        className="row justify-content-center"
        style={{ textAlign: "center", marginTop: 10 }}
      >
        <p style={{ backgroundColor: "#862510", color: "white", padding: 5 }}>
          Visítanos en tu local favorito de @Toritogrillperu
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 py-md-5 local1">
          <p>
            <b>Local 1:</b> Av. 2 de Octubre 1080, Los Olivos 15307.
          </p>
          <br />
          <div className="text-center">
            <img
              src="/src/assets/img/local1.webp"
              alt="Local 1"
              className="img-fluid"
            />
            <br />
            <br />
            <a
              className="enlace-direccion"
              href="https://www.google.com/maps/place/Torito+Grill/@-11.9481725,-77.0804434,17z/data=!3m1!4b1!4m6!3m5!1s0x9105d1e0c3b920e9:0x3e6f10a580e88b79!8m2!3d-11.9481725!4d-77.0778685!16s%2Fg%2F11c6lvk_0g?authuser=0&entry=ttu"
              target="_blank"
            >
              Ver ubicación 1
            </a>
          </div>
        </div>
        <div className="col-md-4 py-md-5 local2">
          <p>
            <b>Local 2:</b> Av. 2 de Octubre 1080, Los Olivos 15307.
          </p>
          <br />
          <div className="text-center">
            <img
              src="/src/assets/img/local2.webp"
              alt="Local 2"
              className="img-fluid"
            />
            <br />
            <br />
            <a
              className="enlace-direccion"
              href="https://www.google.com/maps/place/Torillo+Grill+nuevo+local/@-11.9470599,-77.0776137,20z/data=!4m14!1m7!3m6!1s0x9105d1e0c3b920e9:0x3e6f10a580e88b79!2sTorito+Grill!8m2!3d-11.9481725!4d-77.0778685!16s%2Fg%2F11c6lvk_0g!3m5!1s0x9105d136499f319b:0xe513255a50ff9710!8m2!3d-11.9471994!4d-77.0767655!16s%2Fg%2F11h75vwncg?authuser=0&entry=ttu"
              target="_blank"
            >
              Ver ubicación 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
