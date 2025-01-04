import React, { useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Chat Application</h1>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <p className="text-gray-600">
          Welcome to our chat application. Connect and communicate with others in real-time.
        </p>
      </div>

      {/* Chat Window Section */}
      <div className="flex-1 bg-white rounded-lg shadow-md flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                {message}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
