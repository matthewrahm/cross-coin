import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CloudCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function CloudCard({ children, className = '', delay = 0 }: CloudCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className={`relative group w-full max-w-sm ${className}`}
    >
      {/* Main cloud shape */}
      <div className="relative bg-white/90 backdrop-blur-md p-4 sm:p-6 shadow-[0_12px_40px_rgba(255,255,255,0.8),0_8px_24px_rgba(135,206,235,0.5)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.9),0_12px_32px_rgba(255,215,0,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cloud-shape">
        {/* Cloud bubbles for organic shape */}
        <div className="absolute -top-2 left-1/4 w-8 h-8 bg-white/80 rounded-full blur-[1px]"></div>
        <div className="absolute -top-1 right-1/4 w-6 h-6 bg-white/70 rounded-full blur-[1px]"></div>
        <div className="absolute -left-2 top-1/3 w-10 h-10 bg-white/85 rounded-full blur-[1px]"></div>
        <div className="absolute -right-2 top-2/3 w-8 h-8 bg-white/80 rounded-full blur-[1px]"></div>
        <div className="absolute -bottom-1 left-1/3 w-7 h-7 bg-white/75 rounded-full blur-[1px]"></div>
        <div className="absolute -bottom-2 right-1/3 w-9 h-9 bg-white/85 rounded-full blur-[1px]"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Inner glow */}
        <div className="absolute inset-2 bg-gradient-to-br from-white/30 via-transparent to-cross-sky/10 rounded-full blur-sm opacity-60"></div>
      </div>
      
      <style jsx>{`
        .cloud-shape {
          border-radius: 50px 80px 60px 70px / 40px 50px 80px 60px;
          position: relative;
        }
        .cloud-shape::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 20%;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(2px);
        }
        .cloud-shape::after {
          content: '';
          position: absolute;
          top: -6px;
          right: 25%;
          width: 18px;
          height: 18px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          filter: blur(1px);
        }
      `}</style>
    </motion.div>
  )
}
