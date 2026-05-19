import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'whileInView'> & {
  children: ReactNode
  delay?: number
}

const revealTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
} as const

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ ...revealTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
