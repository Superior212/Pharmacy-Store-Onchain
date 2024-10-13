"use client";
import MemoLogo from "@/icons/Logo";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBody from "./ChatBody";

const ChatWindow = () => {
    const [messages, setMessages] = useState([
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
            const newMsg = {
                sender: "patient",
                message: newMessage,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages([...messages, newMsg]);
            setNewMessage("");
        }
    };

    return (
        <div className="bg-blue-500 p-12 m-10 rounded-2xl">
            <div className="flex h-screen bg-[#FAFAFA] rounded-2xl">
                {/* Sidebar */}
                <div className="relative w-[52px] p-2 ">
                    <svg width="1em" height="1em" viewBox="0 0 174 48" fill="none" className=" h-12 w-32" >
                        <rect width={48} height={48} rx={24} fill="#1364FF" />

                    </svg>
                    <div className="absolute bottom-4 grid space-y-4">
                        <img
                            src="/settings.svg"
                            alt="settings"
                        />
                        <img
                            src="/shape.svg"
                            alt="out"
                        />
                    </div>
                </div>
                <Sidebar />

                {/* Chat Window */}
                <ChatBody />

            </div>
        </div>

    );
};

export default ChatWindow;