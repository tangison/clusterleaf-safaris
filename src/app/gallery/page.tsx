"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Share2, MapPin, Expand, Grid3X3, LayoutGrid, Play, Pause, Camera, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { galleryImages, galleryCategories } from "@/lib/content";
import { createBreadcrumbSchema } from "@/lib/schema";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Gallery", url: "/gallery" },
]);

// Featured collections derived from gallery categories
const collections = [
  {
    id: "1",
    title: "Apex Predators",
    count: 24,
    images: ["/assets/images/gallery/wildlife-lion-close-up.webp", "/assets/images/gallery/wildlife-leopard-tree.webp"],
    description: "The raw power of Africa's most formidable hunters."
  },
  {
    id: "2",
    title: "Ethereal Sands",
    count: 18,
    images: ["/assets/images/gallery/landscape-desert-dunes.webp", "/assets/images/gallery/landscape-desert-colors.webp"],
    description: "The shifting patterns and timeless silence of the Namib."
  },
  {
    id: "3",
    title: "Ancient Lineage",
    count: 15,
    images: ["/assets/images/gallery/culture-himba-woman.webp", "/assets/images/gallery/culture-san-bushmen-skills.webp"],
    description: "A tribute to the enduring cultures of the savannah."
  },
  {
    id: "4",
    title: "Safari Echoes",
    count: 32,
    images: ["/assets/images/gallery/safari-sunset-drive.webp", "/assets/images/gallery/guest-sundowners-bush.webp"],
    description: "Candid moments of wonder from our fellow travelers."
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Filter images based on category
  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Handle scroll for sticky filter bar
  useEffect(() => {
    const handleScroll = () => {
      setIsFilterSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setIsSlideshow(false);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback((direction: number) => {
    setCurrentImageIndex(prev => {
      const newIndex = prev + direction;
      if (newIndex < 0) return filteredImages.length - 1;
      if (newIndex >= filteredImages.length) return 0;
      return newIndex;
    });
  }, [filteredImages.length]);

  const toggleFavorite = useCallback((imageId: string) => {
    setFavorites(prev => 
      prev.includes(imageId)
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "ArrowLeft": navigateLightbox(-1); break;
        case "ArrowRight": navigateLightbox(1); break;
        case "Escape": closeLightbox(); break;
        case "i": case "I": setShowInfo(prev => !prev); break;
        case " ": e.preventDefault(); setIsSlideshow(prev => !prev); break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, navigateLightbox, closeLightbox]);

  // Slideshow auto-advance
  useEffect(() => {
    if (!isSlideshow || !lightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % filteredImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isSlideshow, lightboxOpen, filteredImages.length]);

  const currentImage = filteredImages[currentImageIndex];

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Avant-Garde Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/assets/images/gallery/landscape-namibia-plains.webp"
            alt="Gallery Hero"
            fill
            quality={100}
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sunset font-sans text-xs tracking-[0.5em] uppercase mb-6 bg-sunset/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              The Digital Archive
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              Wild <br />
              <span className="text-savanna italic">Atmospheres</span>
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="h-px w-20 bg-savanna drop-shadow-lg" />
              <p className="text-lg font-medium tracking-wide max-w-md drop-shadow-xl text-white" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
                A definitive collection of light, wildlife, and the raw silence of the African landscape.
              </p>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Premium Filter Bar */}
      <div
        className={`sticky top-0 z-50 transition-all duration-500 border-b border-transparent ${
          isFilterSticky ? "bg-white/80 backdrop-blur-2xl py-3 border-gray-100 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat.id ? "text-charcoal" : "text-gray-400 hover:text-charcoal"
                  }`}
                >
                  {cat.name}
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeCat"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-savanna"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {filteredImages.length} Artifacts
              </span>
              <div className="flex items-center bg-gray-100/50 rounded-full p-1 ring-1 ring-gray-200">
                <button
                  aria-label="Masonry View"
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === "masonry" ? "bg-white text-charcoal shadow-sm" : "text-gray-400 hover:text-charcoal"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  aria-label="Grid View"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === "grid" ? "bg-white text-charcoal shadow-sm" : "text-gray-400 hover:text-charcoal"
                  }`}
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Curations - Magazine Style */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-savanna font-sans text-[10px] tracking-[0.4em] uppercase mb-4 block">Curated Series</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight">Featured Collections</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed italic">
            "Photography is the only language that can be understood anywhere in the world."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((coll, idx) => (
            <motion.div
              key={coll.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors z-[1]" />
                <Image
                  src={coll.images[0]}
                  alt={coll.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 z-[2]">
                   <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 text-[9px] uppercase tracking-tighter">
                     {coll.count} Plates
                   </Badge>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-savanna transition-colors">{coll.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[90%]">{coll.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Gallery Engine */}
      <section className="container mx-auto px-6 pb-32">
        <motion.div
          layout
          className={
            viewMode === "masonry"
              ? "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index % 10 * 0.05 }}
                className={`group relative perspective-1000 ${
                  viewMode === "masonry" ? "break-inside-avoid" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-sm bg-white shadow-lg transition-all duration-700 hover:shadow-2xl ${
                    viewMode === "grid" ? "aspect-square" : "h-auto"
                  } cursor-pointer`}
                  onClick={() => openLightbox(index)}
                >
                  <motion.div 
                    whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={1000}
                      className={`w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 ${
                        viewMode === "masonry" ? "h-auto" : "h-full"
                      }`}
                    />
                    
                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                      <button
                        title="Favorite"
                        aria-label="Favorite"
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(image.id); }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all ${
                          favorites.includes(image.id) ? "bg-sunset text-white" : "bg-white/10 text-white hover:bg-white"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(image.id) ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/98 backdrop-blur-3xl flex flex-col"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between p-6 z-20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                   <Camera className="w-4 h-4 text-savanna" />
                </div>
              </div>
              <button
                aria-label="Close Lightbox"
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 relative flex items-center justify-center px-6 overflow-hidden">
               <button
                aria-label="Previous Image"
                onClick={() => navigateLightbox(-1)}
                className="absolute left-6 z-50 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-savanna hover:border-savanna transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <motion.div
                key={currentImage.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-7xl w-full h-[70vh]"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              <button
                aria-label="Next Image"
                onClick={() => navigateLightbox(1)}
                className="absolute right-6 z-50 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-savanna hover:border-savanna transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer / Controls */}
            <div className="p-8 border-t border-white/5 bg-charcoal/50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="hidden md:flex flex-col">
                    <span className="text-white/30 text-[9px] uppercase tracking-widest mb-2">Sequence</span>
                    <span className="text-white font-mono text-sm tracking-tighter">
                      {String(currentImageIndex + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSlideshow(!isSlideshow)}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest ${
                        isSlideshow ? "bg-savanna text-white" : "bg-white/5 text-white hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {isSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isSlideshow ? "Pause Cycle" : "Start Cycle"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button aria-label="Information" onClick={() => setShowInfo(!showInfo)} className={`p-4 rounded-full transition-all ${showInfo ? 'bg-savanna text-white' : 'bg-white/5 text-white'}`}>
                    <Info className="w-4 h-4" />
                  </button>
                  <button aria-label="Favorite Image" onClick={() => toggleFavorite(currentImage.id)} className={`p-4 rounded-full transition-all ${favorites.includes(currentImage.id) ? 'bg-sunset text-white' : 'bg-white/5 text-white'}`}>
                    <Heart className={`w-4 h-4 ${favorites.includes(currentImage.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button aria-label="Share Image" className="p-4 rounded-full bg-white/5 text-white hover:bg-white/20 border border-white/10">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Collapsible Info */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="max-w-2xl mx-auto pt-8 pb-4 text-center">
                       <p className="text-white/60 text-sm leading-relaxed tracking-wide">
                         Capturing the essence of {currentImage.location}, this plate represents a singular moment in the {currentImage.category === 'wildlife' ? 'wildlife cycles' : currentImage.category === 'landscapes' ? 'geological narrative' : 'cultural history'} of Southern Africa.
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </main>
  );
}
