import { useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { askPortfolioAssistant } from "../api/portfolioAssistant.api";

const starterMessages = [
  {
    role: "assistant",
    text: "Hello! I'm Mujtaba AI assistant. I can help you learn about his work, projects, services, stack, and experience. How can I assist you today?",
  },
];

const suggestionPool = [
  "What services do you provide?",
  "Which stack does he use?",
  "Tell me about Pets Veta",
  "How can I contact him?",
  "What websites can you build?",
  "Show frontend technologies",
  "Show backend technologies",
  "Explain MERN and PERN stack",
  "Tell me about his projects",
  "What databases does he use?",
  "Tell me about his experience",
  "What is his education?",
  "Can he build dashboards?",
  "Can he build REST APIs?",
  "Summarize for a recruiter",
];

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePrompts, setVisiblePrompts] = useState(() => suggestionPool.slice(0, 4));
  const nextPromptIndex = useRef(4);
  const inputRef = useRef(null);

  function toggleAssistant() {
    setIsOpen((current) => !current);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }

  function getNextPrompt(currentPrompts, usedPrompt) {
    for (let index = 0; index < suggestionPool.length; index += 1) {
      const candidate = suggestionPool[nextPromptIndex.current % suggestionPool.length];
      nextPromptIndex.current += 1;

      if (candidate !== usedPrompt && !currentPrompts.includes(candidate)) {
        return candidate;
      }
    }

    return usedPrompt;
  }

  function replacePrompt(usedPrompt) {
    setVisiblePrompts((currentPrompts) =>
      currentPrompts.map((prompt) => (prompt === usedPrompt ? getNextPrompt(currentPrompts, usedPrompt) : prompt)),
    );
  }

  async function sendMessage(messageText) {
    const question = messageText.trim();

    if (!question || isLoading) {
      return;
    }

    setInputValue("");
    setMessages((current) => [...current, { role: "user", text: question }]);
    setIsLoading(true);

    try {
      const result = await askPortfolioAssistant(question);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: result.reply,
          suggestions: result.suggestions,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I could not process that question. Please ask me about Mujtaba's projects, skills, experience, education, or contact details.",
          suggestions: ["Tell me about projects", "Show backend skills", "How can I contact him?"],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePromptClick(prompt) {
    replacePrompt(prompt);
    sendMessage(prompt);
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(inputValue);
  }

  return (
    <aside className={`portfolio-assistant${isOpen ? " open" : ""}`} aria-label="Portfolio AI assistant">
      {isOpen ? (
        <section className="assistant-panel" aria-live="polite">
          <header className="assistant-header">
            <span className="assistant-mark">
              <span className="ai-sparkle-icon" aria-hidden="true">
                <span className="ai-sparkle-main"></span>
                <span className="ai-sparkle-small"></span>
              </span>
            </span>
            <span>
              <strong>Mujtaba's Assistant</strong>
              <em>
                <span className="assistant-online-dot"></span>
                Online - Ask me anything!
              </em>
            </span>
            <button className="assistant-icon-btn" type="button" aria-label="Close assistant" onClick={toggleAssistant}>
              <FiX aria-hidden="true" />
            </button>
          </header>

          <div className="assistant-messages">
            {messages.map((message, index) => (
              <p className={`assistant-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
            {isLoading ? <p className="assistant-message assistant loading">Thinking...</p> : null}
          </div>

          <div className="assistant-prompts">
            {visiblePrompts.map((prompt) => (
              <button type="button" key={prompt} onClick={() => handlePromptClick(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="assistant-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              placeholder="Ask about Mujtaba..."
              aria-label="Ask the portfolio assistant"
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" aria-label="Send message" disabled={isLoading || !inputValue.trim()}>
              <FiSend aria-hidden="true" />
            </button>
          </form>
        </section>
      ) : null}

      {!isOpen ? (
        <button className="assistant-launcher" type="button" aria-label="Open portfolio AI assistant" onClick={toggleAssistant}>
          <span className="ai-sparkle-icon" aria-hidden="true">
            <span className="ai-sparkle-main"></span>
            <span className="ai-sparkle-small"></span>
          </span>
        </button>
      ) : null}
    </aside>
  );
}
