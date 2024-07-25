import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

interface ChatBotWrapperProps {
  show: boolean;
}

const ChatBotWrapper = styled.div<ChatBotWrapperProps>`
  position: fixed;
  bottom: 80px; 
  right: 20px;
  width: 400px;
  height: 500px;
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
`;

interface ChatBotComponentProps {
  show: boolean;
}

export const ChatBotComponent: React.FC<ChatBotComponentProps> = ({ show }) => {
  const steps = [
    {
      id: '1',
      message: '¡Hola! Bienvenido a Torito Grill. ¿En qué puedo ayudarte hoy?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'menu', label: 'Ver el menú', trigger: 'menu' },
        { value: 'hours', label: 'Horarios de atención', trigger: 'hours' },
        { value: 'location', label: 'Ubicación', trigger: 'location' },
      ],
    },
    {
      id: 'menu',
      message: 'Nuestro menú incluye una variedad de platos deliciosos...',
      trigger: 'options', // Muestra nuevamente las opciones
    },
    {
      id: 'hours',
      message: 'Estamos abiertos de Lunes a Viernes de 12:00 pm a 11:00 pm y los Sábados, Domingos y Feriados de 12:00pm a 11:00pm en ambos locales',
      trigger: 'options', // Muestra nuevamente las opciones
    },
    {
      id: 'location',
      message: 'Estamos ubicados en Los Olivos...',
      trigger: 'options', // Muestra nuevamente las opciones
    },
  ];

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#862510',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#862510',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <ChatBotWrapper show={show}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </ChatBotWrapper>
  );
};
