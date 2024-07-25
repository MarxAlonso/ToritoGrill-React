import { useState } from 'react';
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Nosotros, NosotrosTwo, NosotrosThree } from "../../components/Nosotros/Nosotros";
export const NosotrosPage = () =>{
    const [showChatBot, setShowChatBot] = useState(false);
    const toggleChatBot = () => {
        setShowChatBot(prev => !prev);
    };
    return(
        <>
            <Header />
            <Nosotros />
            <NosotrosTwo />
            <NosotrosThree />
            <ChatBotComponent show={showChatBot} />
            <ChatBotIcon onClick={toggleChatBot} />
            <Footer />
        </>
    )
}