import { useState } from 'react';
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  Servicios,
  ServiciosTwo,
  ServiciosThree,
  ServiciosFour,
  ServiciosFive,
} from "../../components/Servicios/Servicios";
import { NosotrosThree } from "../../components/Nosotros/Nosotros";
export const ServiciosPage = () => {
    const [showChatBot, setShowChatBot] = useState(false);
    const toggleChatBot = () => {
        setShowChatBot(prev => !prev);
    };
    return (
    <>
      <Header />
      <Servicios />
      <ServiciosTwo />
      <ServiciosThree />
      <ServiciosFour />
      <ServiciosFive />
      <NosotrosThree />
      <ChatBotComponent show={showChatBot} />
      <ChatBotIcon onClick={toggleChatBot} />
      <Footer />
    </>
  );
};
