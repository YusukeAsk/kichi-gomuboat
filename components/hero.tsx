"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      {/* メインビジュアル画像 */}
      <div className="relative w-full max-w-4xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero-rubber-boat.jpg"
            alt="静かな湖面に浮かぶゴムボート"
            fill
            className="object-cover"
            priority
          />
          {/* 画像上のテキストオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wide text-white mb-4 text-balance drop-shadow-lg"
            >
              穏やかな波を、自由に漕ぎ出す。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed text-pretty drop-shadow-md"
            >
              ゴムボート日和 ― 小さな冒険と、広がる創造。
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
