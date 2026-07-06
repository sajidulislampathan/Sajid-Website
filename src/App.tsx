import { motion, useScroll, useTransform } from "motion/react";
import { 
  Users, 
  Youtube, 
  TrendingUp, 
  Briefcase, 
  Mail, 
  Instagram, 
  Facebook,
  Linkedin, 
  Twitter, 
  ArrowRight,
  Globe,
  Award,
  MessageSquare
} from "lucide-react";
import { useRef } from "react";

const stats = [
  { label: "Total Audience", value: "80M+", icon: Users },
  { label: "Creators Managed", value: "30+", icon: Youtube },
  { label: "Brand Partnerships", value: "35+", icon: Award },
  { label: "Campaigns Run", value: "1000+", icon: TrendingUp },
];

const services = [
  {
    title: "Social Media Management",
    description: "Strategic growth and management for high-profile content creators and YouTube channels.",
    icon: Globe
  },
  {
    title: "Influencer Marketing",
    description: "Connecting brands with the right creators to drive authentic engagement and conversions.",
    icon: Users
  },
  {
    title: "Brand Sponsorships",
    description: "Negotiating and securing high-value sponsorship deals for our creator network.",
    icon: Briefcase
  }
];

const brands = [
  { name: "bKash", logoUrl: "https://i.postimg.cc/63qzvgpR/bkash.png" }, // You can paste image URLs here (e.g., https://i.postimg.cc/...)
  { name: "Duolingo", logoUrl: "https://i.postimg.cc/BQ4p5j6Y/Duolingo.png" },
  { name: "TapTap Send", logoUrl: "https://i.postimg.cc/FszdQvnr/Tap-Tap-Send.png" },
  { name: "Likee", logoUrl: "https://i.postimg.cc/dVqqKj08/Likee.png" },
  { name: "Ghorer Bazar", logoUrl: "https://i.postimg.cc/NjgXFnDs/ghorerbazar.png" },
  { name: "Grammarly", logoUrl: "https://i.postimg.cc/mD2RFQqV/Grammarly.png" },
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen font-sans selection:bg-brand selection:text-surface">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tighter">
            SAJID<span className="text-brand">.ASIA</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="transition-colors hover:text-brand"
            >
              About
            </a>
            <a href="#stats" className="transition-colors hover:text-brand">Impact</a>
            <a href="#services" className="transition-colors hover:text-brand">Services</a>
            <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="rounded-full bg-brand px-6 py-2 text-sm font-bold text-surface transition-transform hover:scale-105 active:scale-95"
          >
            LET'S TALK
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:flex-row">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center"
        >
          <div className="z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold tracking-widest text-brand uppercase"
            >
              Social Media Expert & Influencer Marketer
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-6xl font-bold leading-tight md:text-8xl"
            >
              MD SAJIDUL <br />
              <span className="text-brand">ISLAM PATHAN</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-white/60 md:text-xl"
            >
              Managing 30+ content creators and YouTube channels with a combined audience of 80 million. 
              Bridging the gap between brands and creators through strategic sponsorships and growth.
            </motion.p>

          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex flex-col items-center w-full"
          >
            <div className="absolute -inset-4 rounded-full bg-brand/20 blur-3xl opacity-60" />
            
            {/* Framed Picture Container */}
            <div 
              className="relative overflow-hidden w-full max-w-[420px] h-[560px] rounded-[32px] border border-white/10 bg-surface-muted shadow-2xl transition-all duration-500 ease-out hover:border-brand/30 hover:shadow-brand/5 group"
            >
              <img 
                src="https://i.postimg.cc/YqR1HGFd/j.jpg" 
                alt="MD SAJIDUL ISLAM PATHAN"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-surface-muted py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8 transition-all hover:border-brand/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform group-hover:scale-110">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                <div className="mt-1 text-sm font-medium uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-serif text-4xl font-bold md:text-6xl">Expertise & <span className="text-brand">Services</span></h2>
            <p className="mt-4 max-w-2xl text-lg text-white/60">
              Tailored strategies to scale digital presence and maximize brand value in the creator economy.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-surface-muted p-10 transition-all hover:bg-white/5"
              >
                <div className="mb-6 text-brand">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-white/50">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-y border-white/5 py-16 overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase">Trusted by 35+ Global Brands</span>
        </div>
        
        {/* Infinite Scrolling Marquee Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Masks for Seamless Edge Fading */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent md:w-48" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent md:w-48" />
          
          {/* Scrolling Content */}
          <div className="flex w-full">
            <motion.div 
              className="flex items-center gap-16 pr-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              style={{ display: "flex", width: "max-content" }}
            >
              {/* Duplicate the brand array multiple times to ensure seamless infinite flow */}
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div 
                  key={i} 
                  className="inline-flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-4 shrink-0"
                >
                  {brand.logoUrl ? (
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-lg md:text-xl font-bold tracking-tight text-white/80 hover:text-white transition-colors duration-300">
                      {brand.name}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-brand p-12 md:p-24">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-10">
              <MessageSquare size={400} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-serif text-5xl font-bold text-surface md:text-7xl">
                Ready to scale your <span className="italic">influence?</span>
              </h2>
              <p className="mt-8 text-xl text-surface/80">
                Whether you're a creator looking for management or a brand seeking sponsorship opportunities, 
                let's build something extraordinary together.
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <a 
                  href="mailto:mail@sajid.asia" 
                  className="flex items-center gap-3 rounded-full bg-surface px-8 py-4 font-bold text-white transition-transform hover:scale-105"
                >
                  <Mail size={20} /> mail@sajid.asia
                </a>
                <div className="flex gap-4">
                  {[ Facebook].map((Icon, i) => (
                    <a key={i} href="https://www.facebook.com/SRJ.Sajid786" className="flex h-14 w-14 items-center justify-center rounded-full border border-surface/20 text-surface transition-all hover:bg-surface hover:text-white">
                      <Icon size={24} />
                    </a>
                  ))}
                  {[ Instagram].map((Icon, i) => (
                    <a key={i} href="https://www.instagram.com/sajidul_islam_pathan" className="flex h-14 w-14 items-center justify-center rounded-full border border-surface/20 text-surface transition-all hover:bg-surface hover:text-white">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Sajidul Islam Pathan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
