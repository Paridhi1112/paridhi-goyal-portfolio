"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotKnowledge, ChatMessage } from "@/app/data/index";
import { Bot, X, Send, Sparkles, User, RefreshCw } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: chatbotKnowledge.persona },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user message
    const newMessages: ChatMessage[] = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Matching query against knowledge base patterns
    setTimeout(() => {
      const lower = query.toLowerCase();
      let response = chatbotKnowledge.fallback;

      for (const faq of chatbotKnowledge.faqs) {
        if (faq.patterns.some((p) => lower.includes(p))) {
          response = faq.response;
          break;
        }
      }

      setMessages([...newMessages, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative p-4 rounded-2xl bg-[#00FFA3] text-black shadow-[0_0_30px_rgba(0,255,163,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle AI Assistant"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <Bot className="w-6 h-6" />
        </button>
      </div>

      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] glass rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)]/95 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Widget Header */}
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/20 flex items-center justify-center text-[#00FFA3]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[var(--color-text)]">
                    Portfolio AI Assistant
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00FFA3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" /> Online · FAQ Knowledge Base
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[var(--color-subtle)] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body / Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-[#00FFA3]/10 border border-[#00FFA3]/20 flex items-center justify-center text-[#00FFA3] shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#00FFA3] text-black font-medium rounded-tr-none"
                        : "bg-[var(--color-surface2)] text-[var(--color-text)] border border-[var(--color-border)] rounded-tl-none"
                    }`}
                  >
                    {m.content}
                  </div>

                  {m.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-[var(--color-surface2)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-subtle)] shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--color-muted)] pl-2">
                  <RefreshCw className="w-3 h-3 animate-spin text-[#00FFA3]" /> Synthesizing response...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-2 border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 flex flex-wrap gap-1.5 overflow-x-auto">
              {chatbotKnowledge.quickReplies.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-[var(--color-surface2)] text-[var(--color-subtle)] border border-[var(--color-border)] hover:border-[#00FFA3]/40 hover:text-[#00FFA3] transition-all whitespace-nowrap"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Paridhi's work or stack..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] text-xs text-[var(--color-text)] focus:outline-none focus:border-[#00FFA3] transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#00FFA3] text-black hover:scale-105 transition-all shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
