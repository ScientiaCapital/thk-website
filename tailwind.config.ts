import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Navy Palette
        navy: {
          DEFAULT: '#0a1628',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1a2a4a',
          950: '#131f38',
        },

        // Accent Colors
        thk: {
          blue: '#3b82f6',
          'blue-glow': '#60a5fa',
          cyan: '#22d3ee',
          green: '#10b981',
          orange: '#f97316',
          purple: '#a78bfa',
        },

        // Semantic Colors (for shadcn/ui)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },

      // Custom Gradients
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'gradient-cyan': 'linear-gradient(135deg, #22d3ee, #3b82f6)',
        'gradient-green': 'linear-gradient(135deg, #10b981, #22d3ee)',
        'gradient-orange': 'linear-gradient(135deg, #f97316, #22d3ee)',
        'gradient-purple': 'linear-gradient(135deg, #a78bfa, #3b82f6)',
        'gradient-hero': 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(34, 211, 238, 0.06) 0%, transparent 50%)',
      },

      // Border Radius
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '16px',
        '2xl': '24px',
      },

      // Box Shadows
      boxShadow: {
        'thk-sm': '0 4px 20px rgba(59, 130, 246, 0.3)',
        'thk-md': '0 8px 30px rgba(59, 130, 246, 0.4)',
        'thk-lg': '0 12px 40px rgba(0, 0, 0, 0.3)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.3)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.3)',
      },

      // Animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        blink: 'blink 2s infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
