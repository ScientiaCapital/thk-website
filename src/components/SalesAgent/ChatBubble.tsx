import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { ChatInterface } from './ChatInterface'
import { cn } from '@/lib/utils'

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={cn(
          'absolute bottom-16 right-0 w-[380px] transition-all duration-300 origin-bottom-right',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        )}
      >
        <ChatInterface />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300',
          'shadow-thk-md hover:shadow-thk-lg hover:-translate-y-0.5',
          isOpen
            ? 'bg-slate-700 hover:bg-slate-600'
            : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Notification dot when closed */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
      )}
    </div>
  )
}
