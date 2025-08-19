import { motion } from 'framer-motion'
import Image from 'next/image'

interface CrossCoinLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CrossCoinLogo({ size = 'md', className = '' }: CrossCoinLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
    >
      <Image
        src="/cross-coin-logo.png"
        alt="Cross Coin Logo"
        width={128}
        height={128}
        className="w-full h-full object-contain drop-shadow-cross"
        priority
        unoptimized
      />
    </motion.div>
  )
}
