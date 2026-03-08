import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const welcomeMessages: Record<string, string> = {
  en: "Hello! I'm the THK virtual assistant. I can help you learn about our video infrastructure services for universities, healthcare, corporations, government, and more. How can I help you today?",
  es: "¡Hola! Soy el asistente virtual de THK. Puedo ayudarte a conocer nuestros servicios de infraestructura de video para universidades, hospitales, corporativos, gobierno y más. ¿Cómo puedo ayudarte hoy?",
  zh: "您好！我是 THK 虚拟助手。我可以帮助您了解我们为高校、医疗、企业、政府等机构提供的视频基础设施服务。请问有什么可以帮您？",
  ru: "Здравствуйте! Я виртуальный ассистент THK. Я могу рассказать о наших услугах видеоинфраструктуры для университетов, медицины, бизнеса, государственных учреждений и других отраслей. Чем могу помочь?",
}

export function ChatInterface() {
  const { lang, t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: welcomeMessages[lang],
    },
  ])

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === 'welcome' ? { ...m, content: welcomeMessages[lang] } : m
      )
    )
  }, [lang])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setIsTyping(true)
    setError(null)

    const assistantId = (Date.now() + 1).toString()

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      // Add placeholder for streaming response
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '' },
      ])

      // Read the stream
      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('No response body')
      }

      const decoder = new TextDecoder()
      let fullContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value, { stream: true })
        fullContent += text

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: fullContent } : m
          )
        )
      }

      // Final decode
      const remaining = decoder.decode()
      if (remaining) {
        fullContent += remaining
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: fullContent } : m
          )
        )
      }

    } catch (err) {
      console.error('Chat error:', err)
      setError('Connection error. Please try again.')
      // Remove the empty assistant message on error
      setMessages((prev) => prev.filter((m) => m.id !== assistantId))
    } finally {
      setIsLoading(false)
      setIsTyping(false)
    }
  }

  return (
    <div className="flex flex-col h-[450px] sm:h-[500px] lg:h-[600px] bg-navy-950 rounded-2xl border border-blue-500/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 sm:px-4 py-3 border-b border-blue-500/10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold truncate">THK Sales Assistant</div>
            <div className="text-[10px] sm:text-xs text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">Powered by Claude</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scroll-smooth"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              'flex gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300',
              m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0',
                m.role === 'user'
                  ? 'bg-blue-500/20'
                  : 'bg-gradient-to-br from-blue-500 to-cyan-400'
              )}
            >
              {m.role === 'user' ? (
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              ) : (
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              )}
            </div>

            {/* Message bubble */}
            <div
              className={cn(
                'max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words',
                m.role === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-md'
                  : 'bg-navy-900 text-slate-300 rounded-bl-md border border-blue-500/10'
              )}
            >
              {m.content || <Loader2 className="w-4 h-4 animate-spin" />}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="bg-navy-900 text-slate-300 rounded-2xl rounded-bl-md border border-blue-500/10 px-4 py-3 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="text-center text-xs sm:text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 sm:px-4 py-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {error}
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-blue-500/10 bg-navy-950/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            className="flex-1 text-xs sm:text-sm"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </Button>
        </div>
        <p className="text-[9px] sm:text-[10px] text-slate-500 text-center mt-2">
          {t('chat.powered')}
        </p>
      </form>
    </div>
  )
}
