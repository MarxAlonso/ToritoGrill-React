import "../../assets/css/style.css"
export const TerminosCondiciones = () => {
  return (
    <div className="container-fluid p-5" style={{ marginBottom: 40 }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 my-auto">
          <h3>
            <b>Conoce nuestros términos y condiciones</b>
          </h3>
          <br />
          <p style={{ marginTop: 30, fontSize: 22 }}>
            <b>Pagos:</b> Todo pago con tarjeta de crédito es presentando DNI.
            Todo billete falso será picado.
          </p>
          <p style={{ marginTop: 30, fontSize: 22 }}>
            <b>Promoción de cumpleaños:</b> En Torito Grill celebramos tu
            cumpleaños de una manera especial. Si vienes a celebrar tu
            cumpleaños con nosotros, puedes disfrutar de nuestros premios
            exclusivos. El cumpleañero deberá identificarse con su DNI y tendrá
            que elegir una de las tres opciones.
          </p>
          <p style={{ marginTop: 30, fontSize: 22 }}>
            <b>Reservas:</b> Se aceptan todo tipo de reservas, consultar al +51
            978 105 066 para ver la disponibilidad de fechas. Toda reserva es
            con el 50% de adelanto. Atención de comidas hasta las 11:00pm y bar
            hasta las 12:00pm.
          </p>
          <br />
          <p style={{ fontSize: 18 }}>
            <i>
              Obs: No permitimos el ingreso de bebidas o comidas externas. Así
              como también personas en estado etílico.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};
