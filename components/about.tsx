"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary mb-3">ABOUT</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            屋号の由来
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12 animate-float"
        >
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg md:text-xl font-serif text-foreground">
              「ゴムボート」という名前には、私の哲学が込められています。
            </p>
            
            <p>
              ゴムボートは、少し手を伸ばせば手に入れられるもの。
              けれど、それがあるだけで行動範囲や自由度は劇的に広がります。
            </p>
            
            <p>
              豪華なクルーザーではなく、気軽に持ち出せるゴムボート。
              初夏の晴れた日に、湖をゆったりとぷかぷか漂う——
              そんなシンプルでクリアな時間を大切にしたいと思っています。
            </p>

            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">活動領域</p>
              <div className="flex flex-wrap gap-3">
                {["システムエンジニア", "個人開発者", "DIY愛好家"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
