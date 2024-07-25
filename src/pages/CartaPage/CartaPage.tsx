import { useState } from "react";
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";
import { Carta, CartaThree, CartaTwo } from "../../components/Carta/Carta";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { NosotrosThree } from "../../components/Nosotros/Nosotros";
export const CartaPage = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const toggleChatBot = () => {
    setShowChatBot((prev) => !prev);
  };
  return (
    <>
      <Header />
      <Carta />
      <CartaTwo />
      <CartaThree />
      <NosotrosThree />
      <ChatBotComponent show={showChatBot} />
      <ChatBotIcon onClick={toggleChatBot} />
      <Footer />
    </>
  );
};
