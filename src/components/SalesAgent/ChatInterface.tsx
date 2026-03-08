import { useChat } from '@ai-sdk/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hello! I'm the THK virtual assistant. I can help you learn about our video infrastructure services, answer questions about pricing, and connect you with our team. How can I help you today?",
      },
    ],
  })

  return (
    <div className="flex flex-col h-[450px] bg-navy-950 rounded-2xl border border-blue-500/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-3 border-b border-blue-500/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold">THK Sales Assistant</div>
            <div className="text-xs text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              'flex gap-3',
              m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                m.role === 'user'
                  ? 'bg-blue-500/20'
                  : 'bg-gradient-to-br from-blue-500 to-cyan-400'
              )}
            >
              {m.role === 'user' ? (
                <User className="w-4 h-4 text-blue-400" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Message bubble */}
            <div
              className={cn(
                'max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed',
                m.role === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-md'
                  : 'bg-navy-900 text-slate-300 rounded-bl-md border border-blue-500/10'
              )}
            >
              {m.content}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-navy-900 border border-blue-500/10 px-4 py-2.5 rounded-2xl rounded-bl-md">
              <Loader2 className="w-4 h-4 animate-spin text-thk-cyan" />
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="text-center text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
            Connection error. Please try again.
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-blue-500/10">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about our video services..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-[10px] text-slate-500 text-center mt-2">
          Powered by Claude AI. Your data is secure.
        </p>
      </form>
    </div>
  )
}
