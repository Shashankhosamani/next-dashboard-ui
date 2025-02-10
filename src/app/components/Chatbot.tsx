"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message,  MessageInput } from '@chatscope/chat-ui-kit-react';



export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessage] = useState([
    {
      message: "Hello, how can I help you today?",
      sender: "ChatGPT"
      
    }
  ]);
  const [input, setInput] = useState("");

  const handlesend = async (message:string) => {
    const newmessage={
      message: message,
      sender: "user"
    }
    setMessage([...messages, newmessage]);

   
  }


  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed flex flex-col bottom-20 right-6 w-[45%]  h-[75%] bg-gradient-to-b from-blue-50 to-blue-100 shadow-2xl rounded-lg border p-4 overflow-x-auto  overflow-scroll">
          <div className="flex justify-between items-center">

            <h3 className="text-2xl font-bold">Chat-Bot</h3>
            <X size={24} />
          </div>
          <MainContainer >
            <ChatContainer>

              <MessageList>
               {messages.map((message, index) => (
                <Message key={index} model={message} />
               ))}
              </MessageList>
              <MessageInput
                value={input}
                onChange={(val) => setInput(val)}
                placeholder="Type message here"
                onSend={handlesend(input)}
              />
            </ChatContainer>
          </MainContainer>         
        </div>
      )}

    </div>
  );
}
