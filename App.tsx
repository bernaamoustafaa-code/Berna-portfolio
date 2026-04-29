import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Phone, ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { useRef } from "react";

interface ProjectSectionProps {
  title: string;
  images: string[];
  index: number;
  priority?: boolean;
  key?: number | string;
}

const ProjectSection = ({ title, images, index, priority }: ProjectSectionProps) => {
  const isVice = title === "VICE";
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="flex justify-between items-end mb-12 border-b border-zinc-400/30 pb-6">
        <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-[0.05em] uppercase text-metal">
          {title}
        </h2>
        <span className="text-xl font-serif font-bold text-black/10 tracking-widest">/0{index + 1}</span>
      </div>
      <div className={`grid gap-4 ${
        isVice 
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.4fr] max-w-7xl mx-auto' 
          : images.length === 4 
            ? 'grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto' 
            : images.length === 3
              ? 'grid-cols-1 sm:grid-cols-3 max-w-7xl mx-auto'
              : images.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
      }`}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className={`relative overflow-hidden bg-black/5 ${
              isVice && i === 4 
                ? 'sm:col-span-2 md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto' 
                : isVice && i === 2
                  ? 'aspect-[3/4] md:translate-y-24'
                  : 'aspect-[3/4]'
            }`}
          >
            <img
              src={src}
              alt={`${title} image ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projects = [
    {
      title: "MATTER BREWS",
      images: [
        "/images/girl_matcha_v2.webp",
        "/images/bag_matcha_v2.webp",
      ]
    },
    {
      title: "DOXX HOUSE",
      images: [
        "/images/doxx_1_v2.webp",
        "/images/doxx_2_v2.webp",
        "/images/doxx_3_v2.webp",
      ]
    },
    {
      title: "VICE",
      images: [
        "/images/vice_shot_1_v2.webp",
        "/images/vice_shot_2_v2.webp",
        "/images/vice_logo_shot_v2.webp",
        "/images/vice_sleeve_shot_v2.webp",
        "/images/vice_shot_3_v2.webp",
      ]
    },
    {
      title: "SELF",
      images: [
        "/images/blonde_girl_shot_v2.webp",
        "/images/both_girls_shot_v2.webp",
      ]
    },
    {
      title: "VENGEANCE",
      images: [
        "/images/comp_shoot_full_body_v2.webp",
        "/images/comp_shoot_half_body_v2.webp",
      ]
    },
    {
      title: "WORD",
      images: [
        "/images/word_1_v2.webp",
        "/images/word_2_v2.webp",
        "/images/word_3_v2.webp",
      ]
    }
  ];

  return (
    <main ref={containerRef} className="min-h-screen selection:bg-black selection:text-white relative bg-transparent">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-zinc-900">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-serif font-bold tracking-[0.1em] uppercase"
        >
          Berna Moustapha
        </motion.div>
        <div className="flex gap-4 sm:gap-8 text-[10px] uppercase tracking-widest font-bold">
          <a href="#about" className="hover:text-zinc-500 transition-colors">About</a>
          <a href="#work" className="hover:text-zinc-500 transition-colors">Creations</a>
          <a href="#contact" className="hover:text-zinc-500 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 w-full text-center"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.8em] mb-6 block text-zinc-500">portfolio</span>
          <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw] font-serif font-bold leading-none tracking-[0.05em] uppercase break-words text-metal">
            Berna<br />Moustapha
          </h1>
        </motion.div>
        
        {/* Background Decorative Text - Hidden on mobile for performance */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, -500]) }}
          className="hidden md:block absolute top-1/2 left-0 whitespace-nowrap text-[30vw] font-serif text-zinc-900 opacity-[0.03] pointer-events-none select-none tracking-[0.1em]"
        >
          AI CREATIVE CREATOR • AI CREATIVE CREATOR • AI CREATIVE CREATOR
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif font-bold mb-16 leading-tight tracking-[0.05em] uppercase text-metal"
          >
            designed by mind,<br />powered by AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-light leading-relaxed max-w-4xl text-zinc-700"
          >
            I'm an AI visual creator focused on cinematic fashion narratives and bold visual identities. 
            I use artificial intelligence as a creative tool — combining lighting, mood, composition and brand identity 
            to build imagery that feels intentional, styled, and real.
          </motion.p>
        </div>
      </section>

      {/* Creations Section */}
      <div id="work">
        {projects.map((project, idx) => (
          <ProjectSection 
            key={idx} 
            index={idx} 
            title={project.title} 
            images={project.images} 
            priority={idx === 0}
          />
        ))}
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-4xl font-serif font-bold mb-12 tracking-[0.05em] uppercase text-metal"
            >
              Start a<br />collaboration
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base text-zinc-600 leading-relaxed mb-12"
            >
              If you have a campaign to build, a brand to elevate, or a visual world that needs to exist — reach out. 
              I work with brands, designers, and artists who believe in the power of intention-driven imagery.
            </motion.p>
          </div>
          
          <div className="flex flex-col justify-center gap-8">
            {/* Socials removed as requested */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="text-zinc-400 text-xs uppercase tracking-[0.3em]">
          &copy; 2026 Berna Moustapha • All Rights Reserved
        </div>
        <div className="flex flex-col gap-4 items-end text-xs uppercase tracking-widest text-zinc-500">
          <a href="tel:01014415541" className="flex items-center gap-2 hover:text-black transition-colors">
            <Phone className="w-3 h-3" />
            01014415541
          </a>
          <a href="mailto:bernaamoustafaa@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
            <Mail className="w-3 h-3" />
            bernaamoustafaa@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
