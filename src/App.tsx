import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ManagedServices } from '@/components/sections/ManagedServices'
import { EventProduction } from '@/components/sections/EventProduction'
import { Equipment } from '@/components/sections/Equipment'
import { Verticals } from '@/components/sections/Verticals'
import { WhyThk } from '@/components/sections/WhyThk'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { ChatBubble } from '@/components/SalesAgent/ChatBubble'
import { LanguageProvider } from '@/contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <ManagedServices />
          <EventProduction />
          <Equipment />
          <Verticals />
          <WhyThk />
          <About />
          <Contact />
        </main>
        <Footer />
        <ChatBubble />
      </div>
    </LanguageProvider>
  )
}

export default App
