import React, { useState } from 'react';
import { Header } from "../../components/Header/Header";
import { Contenido, ContenidoTwo, ContenidoThree, ContenidoFour, Home } from "../../components/Home/Home";
import { Footer } from "../../components/Footer/Footer";
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";

export const HomePage: React.FC = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => {
    setShowChatBot(prev => !prev);
  };

  return (
    <>
      <Header />
      <Home />
      <Contenido />
      <ContenidoTwo />
      <ContenidoThree />
      <ChatBotComponent show={showChatBot} />
      <ChatBotIcon onClick={toggleChatBot} />
      <ContenidoFour />
      <Footer />
    </>
  );
};
