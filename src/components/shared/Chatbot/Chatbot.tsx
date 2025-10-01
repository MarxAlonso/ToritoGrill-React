import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGE = {
  text: '¡Hola! Soy el asistente virtual de Torito Grill. ¿En qué puedo ayudarte hoy?',
  isBot: true,
  timestamp: new Date()
};

const FAQ = [
  {
    keywords: ['horario', 'abierto', 'cerrado', 'hora', 'atienden'],
    response: 'Nuestro horario de atención es de lunes a domingo de 12:00 PM a 11:00 PM.'
  },
  {
    keywords: ['reserva', 'reservar', 'mesa', 'reservación'],
    response: 'Para hacer una reserva, puedes llamarnos al (01) 123-4567 o escribirnos por WhatsApp al +51 987 654 321.'
  },
  {
    keywords: ['ubicación', 'dirección', 'donde', 'dónde', 'llegar'],
    response: 'Nos encontramos en Av. Principal 123, Miraflores, Lima. Puedes ver la ubicación exacta en nuestra sección de Locales.'
  },
  {
    keywords: ['menú', 'carta', 'platos', 'comida', 'especialidad'],
    response: 'Nuestra carta incluye parrillas, pollos a la brasa y deliciosas entradas. Puedes ver el menú completo en la sección Carta de nuestra web.'
  },
  {
    keywords: ['delivery', 'domicilio', 'envío', 'llevar'],
    response: 'Sí, contamos con servicio de delivery. Puedes hacer tu pedido llamando al (01) 123-4567 o a través de nuestras apps asociadas.'
  },
  {
    keywords: ['evento', 'celebración', 'fiesta', 'corporativo', 'cumpleaños'],
    response: 'Organizamos eventos corporativos y celebraciones. Para más información, visita nuestra sección de Eventos o contáctanos directamente.'
  }
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Buscar en las preguntas frecuentes
    for (const item of FAQ) {
      if (item.keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
        return item.response;
      }
    }

    // Respuestas para saludos
    if (/hola|buenos días|buenas tardes|buenas noches|saludos/i.test(lowerCaseMessage)) {
      return '¡Hola! ¿En qué puedo ayudarte hoy?';
    }

    // Respuestas para agradecimientos
    if (/gracias|agradecido|agradezco/i.test(lowerCaseMessage)) {
      return '¡De nada! Estoy aquí para ayudarte. ¿Necesitas algo más?';
    }

    // Respuesta por defecto
    return 'Lo siento, no tengo información sobre eso. ¿Puedo ayudarte con nuestros horarios, ubicaciones, reservas o menú?';
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(userMessage.text),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="chatbot-container">
      {/* Botón para abrir/cerrar el chat */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Chatbot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Torito Grill - Asistente Virtual</h3>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message ${msg.isBot ? 'bot' : 'user'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              aria-label="Mensaje"
            />
            <button type="submit" aria-label="Enviar">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};