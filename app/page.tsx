'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Video, FileText, Copy, Check } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ScriptSegment {
  tool: string
  script: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Namaste! 🙏 Main aapka AI Scripting Assistant hoon. Main aapko YouTube video scripts likhne mein madad karunga.

Aapne jo tools bataye hain:
• Lover Art
• Base 44
• Bhendi AI
• Light PDF (PDF Editor)
• Vercept
• Prompt AI

Main aapke liye ek engaging hook aur perfect script create karunga jo Hinglish mein hoga. Bataye kaise shuru karein?

Aap mujhse puch sakte ho:
- Hook likhne ke liye
- Individual tool segments ke liye
- Complete script ke liye
- Koi bhi specific section improve karne ke liye`
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, main abhi respond nahi kar paa raha. Kripya thodi der baad try karein.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const generateHook = () => {
    setInput('Mujhe ek powerful hook chahiye video ke liye jo viewer ko turant grab kar le')
    document.getElementById('chat-input')?.focus()
  }

  const generateFullScript = () => {
    setInput('Mere liye complete video script likho sabhi tools ke liye proper segments ke saath')
    document.getElementById('chat-input')?.focus()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto max-w-5xl h-screen flex flex-col p-4">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                AI Scripting Assistant
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                YouTube Video Scripts in Hinglish
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={generateHook}
              className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Generate Hook
            </button>
            <button
              onClick={generateFullScript}
              className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Full Script
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.role === 'assistant' && (
                    <Sparkles className="w-5 h-5 mt-1 flex-shrink-0 text-purple-500" />
                  )}
                  <div className="flex-1 message-content">{message.content}</div>
                  {message.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(message.content, index)}
                      className="ml-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-4">
          <div className="flex gap-3">
            <input
              id="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Apna message yahan type karein..."
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-purple-500 focus:outline-none transition-colors"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
