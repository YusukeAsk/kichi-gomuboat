"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ChefHat, Gamepad2, Wrench, Palette, Moon, ArrowUpRight } from "lucide-react"

const sites = [
  {
    icon: ChefHat,
    title: "パパごはん",
    url: "https://papagohan.kichi.page/",
    domain: "papagohan.kichi.page",
    description: "週末にこしらえた料理を、ひと皿ずつ置いていく台所。",
    ready: true,
  },
  {
    icon: Gamepad2,
    title: "play",
    url: "https://play.kichi.page/",
    domain: "play.kichi.page",
    description: "ブラウザですぐ遊べる、小さなゲームの遊び場。",
    ready: false,
  },
  {
    icon: Wrench,
    title: "仕事の便利ツール",
    url: "https://tools.kichi.page/",
    domain: "tools.kichi.page",
    description: "無料・登録不要。ファイルを外に送らない仕事の道具箱。",
    ready: false,
  },
  {
    icon: Palette,
    title: "アトリエ",
    url: "https://art.kichi.page/",
    domain: "art.kichi.page",
    description: "動くアート、AIアート、物語、絵本を並べていく場所。",
    ready: false,
  },
  {
    icon: Moon,
    title: "cosmo",
    url: "https://cosmo.kichi.page/",
    domain: "cosmo.kichi.page",
    description: "星と暦で、自分の巡りを静かに眺める占いの部屋。",
    ready: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Sites() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sites" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] text-primary">SITES</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sites.map((site) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group glass rounded-2xl p-8 flex gap-5 items-start transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <site.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-2">
                  <h3 className="font-serif text-xl text-foreground">{site.title}</h3>
                  <ArrowUpRight className="w-4 h-4 mt-1.5 ml-auto shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="flex flex-wrap items-center gap-2 text-xs tracking-[0.05em] text-muted-foreground mt-1">
                  {site.domain}
                  {!site.ready && (
                    <span className="whitespace-nowrap text-[11px] px-2 py-0.5 rounded-full border border-border">
                      準備中
                    </span>
                  )}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{site.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
