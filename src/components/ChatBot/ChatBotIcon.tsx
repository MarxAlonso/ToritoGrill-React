import React from 'react';
import styled from 'styled-components';

interface ChatBotIconProps {
  onClick: () => void;
}

const ChatBotIconWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #862510;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
`;

const ChatIcon = styled.div`
  color: #fff;
  font-size: 30px;
`;

const ChatBotIcon: React.FC<ChatBotIconProps> = ({ onClick }) => (
  <ChatBotIconWrapper onClick={onClick}>
    <ChatIcon>💬</ChatIcon> {/* Puedes cambiar el emoji por un ícono SVG si prefieres */}
  </ChatBotIconWrapper>
);

export default ChatBotIcon;
