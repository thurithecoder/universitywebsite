import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { answerQuestion } from '../utils/ai';

const starterMessages = [
    { role: 'bot', text: 'Hi, I can help with programs, applications, intakes, and contact details.' },
];

export default function AiChatbot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState(starterMessages);

    const sendMessage = (e) => {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;

        setMessages((current) => [
            ...current,
            { role: 'user', text },
            { role: 'bot', text: answerQuestion(text) },
        ]);
        setInput('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
            {open && (
                <div className="mb-3 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-2xl border border-red-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                    <div className="flex items-center justify-between bg-gradient-to-r from-[#de2203] to-[#990000] px-4 py-3 text-white">
                        <div>
                            <p className="m-0 text-sm font-black">AI Admissions Assistant</p>
                            <p className="m-0 text-[11px] text-white/75">Rule-based support demo</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20"
                            aria-label="Close chatbot"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>

                    <div className="max-h-[45vh] space-y-3 overflow-y-auto bg-gray-50 p-4 sm:max-h-80">
                        {messages.map((message, index) => (
                            <div
                                key={`${message.role}-${index}`}
                                className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                                    message.role === 'user'
                                        ? 'ml-8 bg-[#de2203] text-white'
                                        : 'mr-8 border border-red-100 bg-white text-gray-700'
                                }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={sendMessage} className="flex gap-2 border-t border-red-100 bg-white p-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about IT course, fees, how to apply..."
                            className="min-w-0 flex-1 rounded-lg border border-red-100 px-3 py-2 text-sm outline-none focus:border-[#de2203] focus:ring-4 focus:ring-red-50"
                        />
                        <button
                            type="submit"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#de2203] text-white hover:bg-[#990000]"
                            aria-label="Send message"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </form>
                </div>
            )}

            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#de2203] text-white shadow-[0_18px_35px_rgba(222,34,3,0.35)] transition hover:-translate-y-1 hover:bg-[#990000] sm:h-14 sm:w-14"
                aria-label="Open AI chatbot"
            >
                <FontAwesomeIcon icon={open ? faXmark : faMessage} className="text-xl" />
            </button>
        </div>
    );
}
