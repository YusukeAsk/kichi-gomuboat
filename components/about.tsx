"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-4 text-foreground/90 leading-relaxed"
        >
          <p className="text-lg md:text-xl font-serif text-foreground text-balance">
            ゴムボートは、少し手を伸ばせば手に入る自由のかたち。
          </p>
          <p className="text-muted-foreground text-balance">
            豪華なクルーザーではなく、気軽に持ち出せるゴムボートで、
            <br className="hidden md:block" />
            初夏の湖をぷかぷか漂う——そんなシンプルな時間を大切にしています。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
