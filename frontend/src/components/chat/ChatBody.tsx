"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface Message {
    sender: 'doctor' | 'patient';
    message: string;
    time: string;
}

const ChatBody: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "doctor",
            message: "Hi, I see that you've booked a consultation. Can you tell me a bit about what's been bothering you?",
            time: "15:42",
        },
        {
            sender: "patient",
            message: "I've had some headaches recently.",
            time: "15:42",
        },
        {
            sender: "doctor",
            message: "I understand. How long have you been experiencing these headaches?",
            time: "15:42",
        },
        {
            sender: "patient",
            message: "About a week now.",
            time: "15:42",
        },
        {
            sender: "doctor",
            message:
                "Are there any specific times of day when the headaches are worse, or do they happen randomly?",
            time: "15:42",
        },
        {
            sender: "patient",
            message: "They usually get worse in the afternoon.",
            time: "15:43",
        },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            const newMsg: Message = {
                sender: "patient",
                message: newMessage,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages([...messages, newMsg]);
            setNewMessage("");
        }
    };

    return (
        <div className="w-3/4 h-screen flex flex-col border-l border-[#EEEEEE]">
            {/* Chat Header */}
            <div className="p-4  text-[#000000D9] flex items-center justify-between relative border-b border-[#EEEEEE]">
                {/* Doctor Info */}
                <div className="flex items-center space-x-3">
                    <Image
                        width={20}
                        height={20}
                        src="/doctor-avatar.png"
                        alt="Doctor"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Dr. Robinhood</h2>
                        <p className="text-sm text-[#1364FF]">Online</p>
                    </div>
                </div>
                <Image
                    width={20}
                    height={20}
                    src="/vector.svg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                />

            </div>
            <div className="relative flex items-center justify-center py-2">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-3/4 mx-auto border-t border-[#EEEEEE]"></div>
                </div>
                <span className="relative bg-white px-4 rounded-full text-[#00000073] font-medium">Today</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4  overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className={`flex my-4 ${message.sender === 'patient' ? 'justify-end' : ''}`}>
                        {message.sender === 'doctor' && (
                            <Image
                                width={20}
                                height={20}
                                src="/doctor-avatar.png"
                                alt="Doctor"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                        )}
                        <div className="p-4 rounded-e-2xl rounded-l-2xl inline-block bg-[#F4F4F7] max-w-lg">
                            <p>{message.message}</p>
                            <span className="text-xs text-gray-400">{message.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chat Input */}
            <div className="my-4 flex items-center border-t border-[#EEEEEE] p-4" >
                <Image
                    width={20}
                    height={20}
                    src="/attachment.svg"
                    alt="add documents"
                // className="w-10 h-10 rounded-full"
                />
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-2 focus:outline-none rounded-lg "
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    className=" text-[#27AE60] px-4 py-2 font-medium bg-transparent"
                    onClick={handleSendMessage}
                >
                    Send message
                </button>
            </div>
        </div>
    );
};

export default ChatBody;
