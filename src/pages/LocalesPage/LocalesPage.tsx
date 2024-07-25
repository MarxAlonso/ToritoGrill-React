import React, { useState } from 'react';
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Locales } from "../../components/Locales/Locales"
import { NosotrosThree } from "../../components/Nosotros/Nosotros"
import { ChatBotComponent } from "../../components/ChatBot/ChatBotComponent";
import ChatBotIcon from "../../components/ChatBot/ChatBotIcon";
export const LocalesPage = () =>{
    const [showChatBot, setShowChatBot] = useState(false);
    const toggleChatBot = () => {
        setShowChatBot(prev => !prev);
    };
    return(
        <>
        <Header />
        <Locales />
        <NosotrosThree />
        <ChatBotComponent show={showChatBot} />
        <ChatBotIcon onClick={toggleChatBot} />
        <Footer />
        </>
    )
}