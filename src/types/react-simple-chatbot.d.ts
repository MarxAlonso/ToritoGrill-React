// src/components/ChatBot/ChatBotComponent.js
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const ChatBotWrapper = styled.div`
  position: fixed;
  bottom: 80px; /* Ajusta según el tamaño del icono del chat */
  right: 20px;
  width: 400px;
  height: 500px;
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const ChatBotComponent = ({ show }) => {
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
      end: true,
    },
    {
      id: 'hours',
      message: 'Estamos abiertos de Lunes a Viernes de 12:00 pm a 11:00 pm...',
      end: true,
    },
    {
      id: 'location',
      message: 'Estamos ubicados en Los Olivos...',
      end: true,
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
