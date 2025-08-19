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
      {/* Main cloud shape with multiple protrusions */}
      <div className="relative bg-white/95 backdrop-blur-md p-4 sm:p-6 shadow-[0_12px_40px_rgba(255,255,255,0.8),0_8px_24px_rgba(135,206,235,0.5)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.9),0_12px_32px_rgba(255,215,0,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cloud-shape">
        
        {/* Multiple cloud bubble protrusions for authentic cloud look */}
        <div className="absolute -top-3 left-1/6 w-10 h-10 bg-white/90 rounded-full blur-[1px]"></div>
        <div className="absolute -top-2 left-1/3 w-8 h-8 bg-white/85 rounded-full blur-[1px]"></div>
        <div className="absolute -top-4 left-1/2 w-12 h-12 bg-white/95 rounded-full blur-[1px]"></div>
        <div className="absolute -top-1 right-1/3 w-6 h-6 bg-white/80 rounded-full blur-[1px]"></div>
        <div className="absolute -top-3 right-1/6 w-9 h-9 bg-white/90 rounded-full blur-[1px]"></div>
        
        <div className="absolute -left-3 top-1/4 w-11 h-11 bg-white/90 rounded-full blur-[1px]"></div>
        <div className="absolute -left-2 top-1/2 w-8 h-8 bg-white/85 rounded-full blur-[1px]"></div>
        <div className="absolute -left-4 top-3/4 w-10 h-10 bg-white/95 rounded-full blur-[1px]"></div>
        
        <div className="absolute -right-3 top-1/3 w-9 h-9 bg-white/90 rounded-full blur-[1px]"></div>
        <div className="absolute -right-2 top-2/3 w-7 h-7 bg-white/85 rounded-full blur-[1px]"></div>
        <div className="absolute -right-4 top-1/2 w-11 h-11 bg-white/95 rounded-full blur-[1px]"></div>
        
        <div className="absolute -bottom-2 left-1/4 w-9 h-9 bg-white/90 rounded-full blur-[1px]"></div>
        <div className="absolute -bottom-3 left-1/2 w-11 h-11 bg-white/95 rounded-full blur-[1px]"></div>
        <div className="absolute -bottom-1 right-1/4 w-7 h-7 bg-white/85 rounded-full blur-[1px]"></div>
        <div className="absolute -bottom-4 right-1/2 w-10 h-10 bg-white/90 rounded-full blur-[1px]"></div>
        
        {/* Inner cloud texture bubbles */}
        <div className="absolute top-2 left-1/4 w-4 h-4 bg-white/60 rounded-full blur-[0.5px]"></div>
        <div className="absolute top-3 right-1/3 w-3 h-3 bg-white/50 rounded-full blur-[0.5px]"></div>
        <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-white/70 rounded-full blur-[0.5px]"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-white/60 rounded-full blur-[0.5px]"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Enhanced inner glow for cloud depth */}
        <div className="absolute inset-3 bg-gradient-to-br from-white/40 via-transparent to-cross-sky/15 rounded-full blur-md opacity-70"></div>
        <div className="absolute inset-1 bg-gradient-to-br from-white/20 via-transparent to-cross-sky/10 rounded-full blur-sm opacity-50"></div>
      </div>
      
      <style jsx>{`
        .cloud-shape {
          border-radius: 60px 80px 70px 90px / 50px 60px 80px 70px;
          position: relative;
          overflow: visible;
        }
        .cloud-shape::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 15%;
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          filter: blur(2px);
        }
        .cloud-shape::after {
          content: '';
          position: absolute;
          top: -8px;
          right: 20%;
          width: 22px;
          height: 22px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(1.5px);
        }
      `}</style>
    </motion.div>
  )
}
