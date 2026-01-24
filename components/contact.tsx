"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // フォーム送信のシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("お問い合わせありがとうございます。")
  }

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary mb-3">CONTACT</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground">
            お気軽にご連絡ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12 animate-float-slow"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  お名前
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="山田 太郎"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  メールアドレス
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                件名
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="お問い合わせの件名"
                required
                className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                メッセージ
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="お問い合わせ内容をご記入ください"
                rows={5}
                required
                className="bg-background/50 border-border/50 focus:border-primary rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              {isSubmitting ? (
                "送信中..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  送信する
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
