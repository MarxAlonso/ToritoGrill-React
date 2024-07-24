import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Servicios, ServiciosTwo, ServiciosThree, ServiciosFour, ServiciosFive } from "../../components/Servicios/Servicios";
import { NosotrosThree } from "../../components/Nosotros/Nosotros";
export const ServiciosPage = () =>{
    return(
        <>
        <Header />
        <Servicios />
        <ServiciosTwo />
        <ServiciosThree />
        <ServiciosFour />
        <ServiciosFive />
        <NosotrosThree />
        <Footer />
        </>
    )
}