import { useState } from "react";
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { NosotrosThree } from "../../components/Nosotros/Nosotros";
import { TerminosCondiciones } from "../../components/TerminosCondiciones/TerminosCondiciones";

export const TerminosCondicionesPage = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const toggleChatBot = () => {
    setShowChatBot((prev) => !prev);
  };
  return (
    <>
      <Header />
      <TerminosCondiciones />
      <NosotrosThree />
      <ChatBotComponent show={showChatBot} />
      <ChatBotIcon onClick={toggleChatBot} />
      <Footer />
    </>
  );
};
