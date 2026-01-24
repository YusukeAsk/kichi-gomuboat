"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-foreground mb-1">
              ゴムボート日和
            </p>
            <p className="text-sm text-muted-foreground">
              手の届く自由、日常の延長にある冒険。
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} ゴムボート日和. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
