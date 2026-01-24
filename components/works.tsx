"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Smartphone, 
  Users, 
  Hammer, 
  Fish, 
  Sparkles 
} from "lucide-react"

const categories = [
  {
    icon: Smartphone,
    title: "アプリ開発",
    titleEn: "App Development",
    description: "日常を便利にするアプリケーションを開発しています。",
  },
  {
    icon: Users,
    title: "コーチング",
    titleEn: "Coaching",
    description: "一人ひとりの成長をサポートするコーチングを提供。",
  },
  {
    icon: Hammer,
    title: "DIY",
    titleEn: "Woodworking",
    description: "木工を中心に、暮らしを豊かにするものづくり。",
  },
  {
    icon: Fish,
    title: "釣り",
    titleEn: "Fishing",
    description: "自然と向き合い、心を整える時間を大切に。",
  },
  {
    icon: Sparkles,
    title: "スピリチュアル",
    titleEn: "Spirituality",
    description: "内なる声に耳を傾け、本質と繋がる探求。",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Works() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="works" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-primary mb-3">WORKS</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            活動カテゴリ
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div 
                className={`glass rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  index % 2 === 0 ? "animate-float" : "animate-float-delay-1"
                }`}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <p className="text-xs tracking-[0.15em] text-muted-foreground mb-1">
                  {category.titleEn}
                </p>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
