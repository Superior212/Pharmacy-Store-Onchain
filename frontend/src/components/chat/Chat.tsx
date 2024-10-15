"use client";
import React from "react";
import Sidebar from "./Sidebar";
import ChatBody from "./ChatBody";
import Image from "next/image";

const ChatWindow = () => {

    return (
        <div className="w-full mx-auto bg-blue-500 p-12 m-10 rounded-2xl">
            <div className="flex h-screen bg-[#FAFAFA] rounded-2xl">
                {/* Sidebar */}
                <div className="relative w-[52px] p-3">
                    <svg width="1em" height="1em" viewBox="0 0 174 48" fill="none" className=" h-12 w-32" >
                        <rect width={48} height={48} rx={24} fill="#1364FF" />

                    </svg>
                    <div className="absolute bottom-4 grid space-y-4">
                        <Image
                            width={20}
                            height={20}
                            src="/settings.svg"
                            alt="settings"
                        />
                        <Image
                            width={20}
                            height={20}
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