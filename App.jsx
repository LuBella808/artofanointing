import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
)

const GoldLine = () => (
  <div className="flex items-center gap-4 my-2">
    <div className="h-px flex-1 bg-gold opacity-30" />
    <div className="w-1 h-1 rounded-full bg-gold opacity-50" />
    <div className="h-px flex-1 bg-gold opacity-30" />
  </div>
)

const Eyebrow = ({ children }) => (
  <p className="font-sans text-xs tracking-widest2 uppercase text-gold mb-4 opacity-80">
    {children}
  </p>
)

const VideoBg = ({ src, overlay = 'bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70' }) => (
  <div className="absolute inset-0">
    <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
      <source src={src} type="video/mp4" />
    </video>
    <div className={`absolute inset-0 ${overlay}`} />
  </div>
)

export default function App() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  const [navScrolled, setNavScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-ivory text-ink font-sans">

      {/* NAV */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${navScrolled ? 'glass border-b border-gold border-opacity-20' : ''}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="font-serif text-ivory text-sm italic tracking-wide">Lucinda Rae</span>
        <div className="hidden md:flex items-center gap-6 glass rounded-full px-6 py-2">
          {['Book', 'The Apothecary', 'Listen', 'The Academy', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="font-sans text-xs tracking-widest uppercase text-ivory opacity-80 hover:opacity-100 transition-opacity">
              {item}
            </a>
          ))}
        </div>
        <a href="https://artofanointing.substack.com" target="_blank" rel="noopener noreferrer"
          className="font-sans text-xs tracking-widest uppercase text-gold border border-gold border-opacity-50 rounded-full px-4 py-1.5 hover:border-opacity-100 transition-all">
          Substack
        </a>
      </motion.nav>

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata"
            poster="/hero-poster.jpg">
            <source src="/983b5ef947d04385b17d563f51c0e41c.HD720p2.1Mbps42525527.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-[#8B5E1A]/20 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <motion.div style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p className="font-sans text-xs tracking-widest2 uppercase text-gold-pale mb-6 opacity-90"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
            A Modern Path into Embodied Living Prayer
          </motion.p>
          <motion.h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] text-shadow-warm max-w-4xl"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8 }}>
            Remember the Light<br />
            <span className="italic text-gold-pale">God Placed Within You</span>
          </motion.h1>
          <motion.p className="font-sans text-sm md:text-base text-ivory/70 mt-6 max-w-md leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
            For the woman who is faithful but exhausted.<br />
            Who believes but feels far.<br />
            Who has forgotten her own skin is sacred ground.
          </motion.p>
          <motion.a href="#pathways"
            className="mt-10 font-sans text-xs tracking-widest2 uppercase text-ivory border border-ivory/40 rounded-full px-8 py-3 hover:border-gold hover:text-gold transition-all duration-300"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}>
            Come Inside
          </motion.a>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.4 }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/50" />
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative bg-ivory py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp><Eyebrow>The Art of Anointing</Eyebrow></FadeUp>
          <FadeUp delay={0.1}>
            <blockquote className="font-serif text-2xl md:text-3xl italic text-ink leading-relaxed mb-10">
              "The oil is ready.<br />Your body is holy.<br />
              <span className="text-gold">And you were never meant to carry this alone.</span>"
            </blockquote>
          </FadeUp>
          <GoldLine />
          <FadeUp delay={0.2}>
            <div className="font-sans text-ink-soft text-base md:text-lg leading-loose mt-10 space-y-5">
              <p>The Art of Anointing is not a method. It is not a program.</p>
              <p>It is a return.</p>
              <p>To the body. To beauty. To prayer.<br />To the oldest wisdom your hands already know.</p>
              <p>For thousands of years, women carried oil.<br />
              They poured it over what was broken, what was beloved,<br />
              what needed to be made holy again.</p>
              <p className="text-ink font-medium">
                They understood something we are only now remembering:<br />
                <span className="italic">God meets us in the body.<br />
                Healing comes through the senses.<br />
                Beauty is not frivolous — it is formative.</span>
              </p>
              <p>This is a place to exhale. To create. To be held.<br />
              To come home to yourself and to God.</p>
              <p className="font-serif text-xl italic text-gold mt-6">Welcome.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STORY */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <VideoBg
          src="/Professional_Mode_She_brings_her_hands_to_her_face_1.mp4"
          overlay="bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center py-24">
          <FadeUp>
            <div className="text-ivory">
              <Eyebrow>How It Began</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                There was a season<br />
                <span className="italic text-gold-pale">when I was drowning.</span>
              </h2>
              <div className="font-sans text-ivory/80 text-base leading-loose space-y-5">
                <p>A mother in crisis. Cortisol-soaked and hypervigilant, holding everything for everyone, unable to feel God anywhere near me.</p>
                <p>I reached for olive oil from the Holy Land.</p>
                <p>I had been studying the ancient ways. I understood that oil was for consecrating something holy. And I needed to consecrate myself back into existence.</p>
                <p>That single act cracked something open.</p>
                <p>A quiet return. A sensory remembrance that my body was not the enemy. That God's presence was not only something I could think about. It was something I could <em>feel.</em></p>
                <p>What began as a personal practice became oils, then rituals, then a book, then an academy, then this: a living body of work for every woman who needs to be reminded she is not broken.</p>
                <p className="font-serif italic text-gold-pale text-lg">She has simply forgotten. And she can return.</p>
              </div>
              <a href="#about" className="inline-block mt-8 font-sans text-xs tracking-widest2 uppercase text-gold border border-gold/50 rounded-full px-7 py-3 hover:border-gold transition-all">
                Read More About Lucinda
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="relative">
              <img src="/lucinda-candle.jpg" alt="Lucinda Rae"
                className="rounded-sm w-full max-w-md mx-auto object-cover shadow-2xl" />
              <div className="absolute -bottom-4 -left-4 glass rounded-sm px-5 py-4 max-w-xs">
                <p className="font-serif italic text-ivory text-sm leading-relaxed">
                  "When someone you love is struggling and you can't fix it, it can consume your entire life. You don't have to live that way."
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PATHWAYS */}
      <section id="pathways" className="bg-champagne py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <Eyebrow>Find Your Way In</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">Every path leads home.</h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { symbol: '✦', eyebrow: 'The Book', title: 'The Art of Anointing', sub: 'Holy Oils, Daily Rituals, and the Ancient Practice of Meeting God in Your Body', cta: 'Join the Waitlist', href: 'https://artofanointing.substack.com', external: true },
              { symbol: '◦', eyebrow: 'The Apothecary', title: 'Anointed Rituals', sub: 'Botanically crafted oils and perfumes rooted in ancient wisdom. Each one a prayer in a bottle.', cta: 'Shop the Collection', href: 'https://anointedrituals.com', external: true },
              { symbol: '♪', eyebrow: 'Listen', title: 'Return to Sacred Sensuality', sub: 'A private audio space for the woman who has been holding everything and is ready to feel held too.', cta: 'Access the Podcast — Free', href: '#listen' },
              { symbol: '✧', eyebrow: 'The Academy', title: 'Anointed Artist Academy', sub: 'Formation and certification for creative women called to guide others through sacred creativity and return.', cta: 'Learn More', href: '#the-academy' },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.1}>
                <a href={card.href} target={card.external ? '_blank' : undefined} rel={card.external ? 'noopener noreferrer' : undefined}
                  className="group block bg-ivory rounded-sm p-8 border border-gold/20 hover:border-gold/60 transition-all duration-300 h-full">
                  <span className="text-gold text-2xl block mb-4">{card.symbol}</span>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2 opacity-70">{card.eyebrow}</p>
                  <h3 className="font-serif text-xl text-ink mb-3 leading-snug">{card.title}</h3>
                  <p className="font-sans text-sm text-ink-soft leading-relaxed mb-6">{card.sub}</p>
                  <span className="font-sans text-xs tracking-widest uppercase text-gold group-hover:text-coral transition-colors">{card.cta} →</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* APOTHECARY */}
      <section id="the-apothecary" className="bg-ivory py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-6">
              <Eyebrow>The Sacred Collection</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Each oil is a threshold.</h2>
              <p className="font-sans text-ink-soft text-base max-w-lg mx-auto leading-relaxed">A sensory invitation to slow down, return, and remember.</p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              { name: 'BLESSING', sub: 'Sacred Perfume & Ritual Oil', price: '$58', desc: 'For the woman who needs to remember she is beloved. Luminous. Gentle. An anointing of grace.', img: '/oil-blessing.png', time: 'Morning' },
              { name: 'NECTAR', sub: 'Sensual Ritual Oil', price: '$60', desc: 'For the woman who has forgotten she is alive in her body. Warm. Honeyed. An anointing for the senses.', img: '/oil-nectar.jpg', time: 'Midday' },
              { name: 'TEMPLE', sub: 'Evening Ritual Oil', price: '$77', desc: 'For the sacred closing of the day. Deep. Still. A prayer for what you are releasing.', img: '/oil-temple.jpg', time: 'Evening' },
            ].map((oil, i) => (
              <FadeUp key={oil.name} delay={i * 0.12}>
                <div className="group flex flex-col">
                  <div className="relative overflow-hidden rounded-sm mb-5 aspect-[4/5] bg-champagne">
                    <img src={oil.img} alt={oil.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3">
                      <span className="font-sans text-xs tracking-widest uppercase text-gold-pale bg-ink/40 backdrop-blur-sm rounded-full px-3 py-1">{oil.time}</span>
                    </div>
                  </div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-1 opacity-70">{oil.sub}</p>
                  <h3 className="font-serif text-2xl text-ink mb-1">{oil.name}</h3>
                  <p className="font-sans text-sm text-ink-soft leading-relaxed mb-4">{oil.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-serif text-lg text-gold">{oil.price}</span>
                    <a href="https://anointedrituals.com" target="_blank" rel="noopener noreferrer"
                      className="font-sans text-xs tracking-widest uppercase text-ink-soft hover:text-gold transition-colors">Shop →</a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* COVENANT */}
          <FadeUp delay={0.1}>
            <div className="mt-20 relative rounded-sm overflow-hidden min-h-[420px] flex items-end">
              <img src="/covenant.webp" alt="Covenant Botanical Perfume"
                className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />
              <div className="relative z-10 p-10 md:p-14 max-w-lg">
                <Eyebrow>A Perfume for the Threshold</Eyebrow>
                <h3 className="font-serif text-4xl md:text-5xl text-ivory mb-4 italic">Covenant</h3>
                <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-5">Botanical Perfume · $190</p>
                <blockquote className="font-serif italic text-gold-pale text-base mb-5 border-l border-gold/40 pl-4">
                  "I will betroth you to Me forever." — Hosea 2:19
                </blockquote>
                <p className="font-sans text-ivory/80 text-sm leading-relaxed mb-7">
                  Inspired by the Ark of the Covenant. Incense. Sacred woods. Trilogy rose. This is not simply a fragrance. It is a threshold. A consecration. Something to wear when you are ready to be met.
                </p>
                <a href="https://anointedrituals.com" target="_blank" rel="noopener noreferrer"
                  className="inline-block font-sans text-xs tracking-widest uppercase text-ivory border border-ivory/40 rounded-full px-7 py-3 hover:border-gold hover:text-gold transition-all">
                  Shop Covenant
                </a>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-center mt-10">
              <a href="https://anointedrituals.com" target="_blank" rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase text-gold hover:text-coral transition-colors">
                Enter the Apothecary →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="bg-teal py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <div className="flex justify-center">
              <div className="relative">
                <img src="/book-cover.jpg" alt="The Art of Anointing book cover"
                  className="w-56 md:w-72 shadow-2xl rounded-sm" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm pointer-events-none" />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="text-ivory">
              <Eyebrow>Coming Soon</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-3">The Art of Anointing</h2>
              <p className="font-sans text-gold-pale text-sm tracking-wide mb-6">
                Holy Oils, Daily Rituals, and the Ancient Practice<br />of Meeting God in Your Body
              </p>
              <GoldLine />
              <div className="font-sans text-ivory/80 text-sm leading-loose space-y-4 mt-6">
                <p>This is a book about coming home to yourself through oil, touch, and the oldest prayer language the body knows.</p>
                <p>Part spiritual history. Part embodied practice. Part quiet theology. Biblically rooted. Not churchy. Sensory without being self-indulgent.</p>
                <p className="font-serif italic text-gold-pale text-base">Written for the woman who believes but feels far.</p>
              </div>
              <a href="https://artofanointing.substack.com" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-ivory border border-ivory/40 rounded-full px-7 py-3 hover:border-gold-pale hover:text-gold-pale transition-all">
                Be the First to Know — Join the Substack
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PODCAST */}
      <section id="listen" className="relative py-28 px-6 overflow-hidden">
        <VideoBg
          src="/5015B1AE5B404B10B5544462D2D10EEC.mp4"
          overlay="bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-ivory">
          <FadeUp>
            <Eyebrow>Private Podcast</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl italic leading-tight mb-6">
              ANOINTED:<br /><span className="text-gold-pale">Return to Sacred Sensuality</span>
            </h2>
            <p className="font-sans text-sm text-ivory/80 leading-loose max-w-xl mx-auto mb-4">
              A private audio space for the woman who has been holding everything and is ready to feel held too.
            </p>
            <div className="font-serif italic text-gold-pale text-base space-y-1 mb-8">
              <p>Come back to your body.</p>
              <p>Come back to God.</p>
              <p>Come back to yourself.</p>
            </div>
            <a href="https://anointedrituals.com/pages/podcast" target="_blank" rel="noopener noreferrer"
              className="inline-block font-sans text-xs tracking-widest uppercase text-ivory border border-ivory/50 rounded-full px-8 py-3 hover:border-gold hover:text-gold transition-all">
              Listen — Free
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ART */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <Eyebrow>From the Studio</Eyebrow>
            <blockquote className="font-serif text-xl md:text-2xl italic text-ink max-w-2xl mx-auto leading-relaxed mb-8">
              "My art is a prayer: an offering to the wild beauty of this creation and the quiet presence of Divine Grace. Through my vision, I desire to make visible and felt — heaven on earth and within."
            </blockquote>
            <a href="https://lucindaraeart.com" target="_blank" rel="noopener noreferrer"
              className="font-sans text-xs tracking-widest uppercase text-gold hover:text-coral transition-colors">
              Visit the Gallery →
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="the-academy" className="bg-champagne py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <Eyebrow>For the Woman Called to Lead</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">Anointed Artist Academy</h2>
              <div className="font-sans text-ink-soft text-base leading-loose max-w-2xl mx-auto space-y-3">
                <p>What if your creativity was not a hobby — but a healing modality?</p>
                <p>What if beauty was not indulgent — but a pathway back to God?</p>
                <p>What if your calling came with a framework, a community, and a way to share it with others?</p>
              </div>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-ivory rounded-sm p-8 border border-gold/20 h-full">
                <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">The Studio</p>
                <h3 className="font-serif text-2xl text-ink mb-3">Personal Formation</h3>
                <p className="font-sans text-sm text-ink-soft leading-relaxed mb-6">
                  A cohort-based immersion in the Art of Anointing practice. For the creative woman ready to go deeper in beauty, prayer, and embodied creativity.
                </p>
                <p className="font-serif text-2xl text-gold mb-5">$1,800</p>
                <a href="#email" className="font-sans text-xs tracking-widest uppercase text-ink-soft hover:text-gold transition-colors">Learn More →</a>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-ink rounded-sm p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-teal-dark opacity-80" />
                <div className="relative z-10">
                  <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">The Certification</p>
                  <h3 className="font-serif text-2xl text-ivory mb-3">Certified Facilitator</h3>
                  <p className="font-sans text-sm text-ivory/70 leading-relaxed mb-6">
                    For women called to guide others. Become a certified Anointed Artist Facilitator and lead this work in your practice, retreats, and community.
                  </p>
                  <p className="font-serif text-2xl text-gold mb-5">$4,997</p>
                  <a href="#email"
                    className="inline-block font-sans text-xs tracking-widest uppercase text-ivory border border-gold/40 rounded-full px-6 py-2.5 hover:border-gold transition-all">
                    Apply Now
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section id="email" className="relative py-28 px-6 overflow-hidden">
        <VideoBg
          src="/WhatsApp_Video_20250624_at_20.51.15_11b883ad.mp4"
          overlay="bg-gradient-to-b from-ink/70 via-ink/60 to-ink/80"
        />
        <div className="relative z-10 max-w-xl mx-auto text-center text-ivory">
          <FadeUp>
            <Eyebrow>Come Inside</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl italic leading-tight mb-5">
              Essays. Reflections. Paintings.<br /><span className="text-gold-pale">Anointed mornings.</span>
            </h2>
            <p className="font-sans text-sm text-ivory/70 leading-relaxed mb-8">
              The ongoing conversation around beauty, creativity, prayer, and sacred living. Join the Substack and be the first to know when the book releases.
            </p>
            <a href="https://artofanointing.substack.com" target="_blank" rel="noopener noreferrer"
              className="inline-block font-sans text-xs tracking-widest uppercase text-ink bg-gold hover:bg-gold-pale transition-colors rounded-full px-10 py-4 font-medium">
              Yes, I'm Coming Home
            </a>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-serif italic text-gold text-2xl mb-1">The Art of Anointing</p>
            <p className="font-sans text-xs tracking-widest uppercase text-ivory/40">
              Lucinda Rae · Artist · Author · Perfumer · Teacher
            </p>
          </div>
          <GoldLine />
          <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 opacity-70">Explore</p>
              {[['Book','#book'],['The Apothecary','#the-apothecary'],['Listen','#listen'],['The Academy','#the-academy']].map(([label,href]) => (
                <a key={label} href={href} className="block font-sans text-sm text-ivory/50 hover:text-ivory/90 transition-colors mb-1.5">{label}</a>
              ))}
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 opacity-70">Connected Worlds</p>
              {[['Anointed Rituals','https://anointedrituals.com'],['Lucinda Rae Art','https://lucindaraeart.com'],['Substack','https://artofanointing.substack.com']].map(([label,href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="block font-sans text-sm text-ivory/50 hover:text-ivory/90 transition-colors mb-1.5">{label} ↗</a>
              ))}
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 opacity-70">Follow</p>
              {[['Instagram','#'],['TikTok','#'],['Substack','https://artofanointing.substack.com']].map(([label,href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="block font-sans text-sm text-ivory/50 hover:text-ivory/90 transition-colors mb-1.5">{label}</a>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="font-sans text-xs text-ivory/25">© 2026 Lucinda Rae · artofanointing.com</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
