'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, BookOpen, Users, Calendar, Mail, Info, ShieldCheck, GraduationCap, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a full-bleed dark hero — all other pages need an opaque nav from the start
  const isHomepage = pathname === '/';
  const isOpaque = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'O que é o CMA', href: '/cma', icon: <Info size={20} /> },
    { name: 'Programa', href: '/programa', icon: <GraduationCap size={20} /> },
    { name: 'Reuniões', href: '/reunioes', icon: <Calendar size={20} /> },
    { name: 'Literaturas', href: '/literaturas', icon: <BookOpen size={20} /> },
    { name: 'Apoio a Familiares', href: '/familiares', icon: <Users size={20} /> },
    { name: 'Eventos', href: '/eventos', icon: <Star size={20} /> },
    { name: 'Contato', href: '/contato', icon: <Mail size={20} /> },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-5 px-8 flex justify-between items-center transition-all duration-300 ${isOpaque
      ? 'bg-cma-teal-dark shadow-lg shadow-black/20'
      : 'bg-transparent'
      }`}>
      {/* Left: Menu Trigger & Brand */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white hover:text-cma-gold transition-colors"
        >
          <Menu size={32} strokeWidth={1.5} />
        </button>
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo-cma-small.svg" alt="CMA Brasil" width={32} height={32} className="w-8 h-8 brightness-0 invert" />
          <span className="text-white font-heading font-medium text-xl tracking-tight">
            CMA Brasil
          </span>
        </Link>
      </div>

      {/* Right: CTAs */}
      <div className="flex items-center gap-3">
        <Link
          href="/contato"
          className="hidden md:inline-flex px-5 py-2 border border-white/30 text-white rounded-full text-sm font-medium hover:border-white/70 hover:bg-white/10 transition-all"
        >
          Fale Conosco
        </Link>
        <Link
          href="/reunioes"
          className="px-5 py-2 bg-cma-gold text-white rounded-full text-sm font-medium hover:bg-cma-gold-dim transition-colors shadow-lg shadow-black/20 whitespace-nowrap"
        >
          <span className="md:hidden">Reuniões</span>
          <span className="hidden md:inline">Encontre uma Reunião</span>
        </Link>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cma-teal-dark z-50 flex flex-col p-8 md:p-16 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-white font-heading font-medium text-2xl">CMA Brasil</span>
              <button onClick={closeMenu} className="text-white/50 hover:text-white transition-colors">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-4 text-2xl md:text-4xl font-heading font-light transition-colors ${pathname === item.href ? 'text-cma-gold' : 'text-white hover:text-cma-gold'
                      }`}
                  >
                    <span className="opacity-50">{item.icon}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center text-white/40 text-sm">
              <p>&copy; 2026 CMA Brasil</p>
              <Link href="/acessibilidade" onClick={closeMenu} className="flex items-center gap-2 hover:text-white transition-colors">
                <ShieldCheck size={16} /> Declaração de Acessibilidade
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
