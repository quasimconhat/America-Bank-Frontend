"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ChatMessage {
  avatar: string;
  message: string;
  isUser: boolean;
}

const Form: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        avatar: '/assets/user-avatar.png', // Replace with actual user avatar path
        message: inputMessage,
        isUser: true,
      };
      setChatHistory([...chatHistory, newMessage]);
      setInputMessage('');
      // Here you would typically send the message to a backend or AI service
      // and then add the response to the chat history
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`flex mb-4 ${chat.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex ${chat.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
              <Image
                src={chat.avatar}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className={`mx-2 p-3 rounded-lg bg-gray-200 max-w-xs`}>
                <p>{chat.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow mr-2 p-2 border rounded"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
