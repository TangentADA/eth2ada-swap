import React, { useState } from "react";
import Meta from "../components/Meta";
import axios from "axios";

export default function Terminal() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Grok, here to help you create a Cardano-to-Ethereum dictionary term. Let's start by defining a term. What term would you like to create?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Call the xAI API via proxy
      const response = await axios.post("/api/xai-proxy", {
        model: "grok-beta", // Updated to grok-beta to match working dictionary/index.jsx
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant that helps users create dictionary entries for Cardano-to-Ethereum terms step by step. Guide the user through the process: 1) Ask for the term name, 2) Ask for a description in the context of Cardano, 3) Ask for a description in the context of Ethereum, 4) Provide a summary of the term in the format:\nTitle: [term]\nDescription (Cardano context): [description]\nDescription (Ethereum context): [description]\nText Preview: [short preview up to 100 characters]\nIf the term is specific to Cardano and has no Ethereum equivalent, state that explicitly in the Ethereum context. Respond conversationally and guide the user at each step.",
          },
          ...messages,
          userMessage,
        ],
        max_tokens: 500,
      });

      const aiResponse = response.data.choices[0].message.content;
      setMessages([...messages, userMessage, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error calling xAI API via proxy:", error.response?.data || error.message);
      setMessages([
        ...messages,
        userMessage,
        { role: "assistant", content: "Sorry, there was an error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Meta title="Ask xAI - Eth2Ada Terminal" />
      <section className="relative pt-[5.5rem] lg:pt-24">
        <div className="py-16">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>

          <div className="container">
            <h1 className="font-display text-jacarta-700 mb-8 text-3xl dark:text-white text-center">
              Ask xAI: Create a Dictionary Term
            </h1>

            <div className="max-w-2xl mx-auto bg-white dark:bg-jacarta-700 rounded-lg shadow-lg p-6">
              {/* Chat Interface */}
              <div className="h-96 overflow-y-auto mb-4 p-4 border border-jacarta-100 dark:border-jacarta-600 rounded-lg">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-accent text-white"
                          : "bg-jacarta-100 dark:bg-jacarta-600 text-jacarta-700 dark:text-white"
                      }`}
                    >
                      {message.content}
                    </span>
                  </div>
                ))}
                {loading && (
                  <div className="text-center">
                    <span className="text-jacarta-700 dark:text-white">Generating...</span>
                  </div>
                )}
              </div>

              {/* Input Field */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-jacarta-100 dark:border-jacarta-600 rounded-lg bg-white dark:bg-jacarta-700 text-jacarta-700 dark:text-white focus:outline-none"
                  disabled={loading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading}
                  className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
