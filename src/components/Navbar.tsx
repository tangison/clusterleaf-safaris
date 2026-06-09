"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safaris, companyInfo } from "@/lib/content";
import { SearchDialog } from "@/components/SearchDialog";

// Minimal navigation items - only essential links visible
const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "Safaris",
    href: "/safaris",
    dropdown: "safaris",
  },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "More", href: "#", dropdown: "more" },
];

// Secondary links - available in "More" dropdown and mobile menu
const secondaryLinks = [
  { name: "Destinations", href: "/destinations", description: "Explore Namibia, Botswana & beyond" },
  { name: "Reviews", href: "/reviews", description: "Guest testimonials & stories" },
  { name: "Blog", href: "/blog", description: "Travel guides & safari tips" },
  { name: "FAQ", href: "/faq", description: "Common questions answered" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = useCallback((dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350);
  }, []);

  const toggleMobileDropdown = useCallback((dropdown: string) => {
    setExpandedMobileDropdown(expandedMobileDropdown === dropdown ? null : dropdown);
  }, [expandedMobileDropdown]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileDropdown(null);
  }, []);

  // Get featured safaris for dropdown
  const featuredSafaris = safaris.slice(0, 4);

  return (
    <>
      {/* Main Navigation Bar */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "w-[92%] max-w-[1100px]" : "w-[90%] max-w-[1100px]"
        }`}
      >
        <nav
          className={`
            flex items-center justify-between
            px-6 sm:px-8 py-4
            rounded-full
            transition-all duration-300
            ${isScrolled 
              ? "bg-white/95 shadow-lg shadow-black/[0.03]" 
              : "bg-white/80"
            }
            backdrop-blur-2xl
            border border-white/60
          `}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 flex-shrink-0 mr-8"
          >
            <Image
              src="/assets/images/logos/logo-main.webp"
              alt="Cluster Leaf Safaris"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="hidden md:block lg:hidden font-serif text-xl font-bold text-charcoal tracking-tight">
              Cluster Leaf
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="flex items-center">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.dropdown)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-1.5
                      px-5 py-2.5
                      text-sm font-medium
                      rounded-full
                      transition-all duration-200
                      ${activeDropdown === item.dropdown 
                        ? "text-savanna bg-savanna/5" 
                        : "text-charcoal/70 hover:text-charcoal hover:bg-black/[0.03]"
                      }
                    `}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown 
                        size={14} 
                        strokeWidth={2.5}
                        className={`
                          transition-transform duration-200
                          ${activeDropdown === item.dropdown ? "rotate-180" : ""}
                        `}
                      />
                    )}
                  </Link>

                  {/* Safaris Dropdown */}
                  {item.dropdown === "safaris" && activeDropdown === "safaris" && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleDropdownEnter(item.dropdown!)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-gray-100/80 py-2 min-w-[260px]">
                        <Link
                          href="/safaris"
                          className="flex flex-col gap-0.5 px-5 py-3 hover:bg-gray-50 transition-colors rounded-t-xl"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-medium text-charcoal">
                            All Safaris
                          </span>
                          <span className="text-xs text-gray-400">
                            Browse our complete collection
                          </span>
                        </Link>
                        
                        {featuredSafaris.map((safari) => (
                          <Link
                            key={safari.id}
                            href={`/safaris/${safari.slug}`}
                            className="flex flex-col gap-0.5 px-5 py-3 hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-sm font-medium text-charcoal">
                              {safari.shortTitle}
                            </span>
                            <span className="text-xs text-gray-400">
                              {safari.durationDays} days - {safari.countries.join(", ")}
                            </span>
                          </Link>
                        ))}
                        
                        <Link
                          href="/contact"
                          className="flex flex-col gap-0.5 px-5 py-3 hover:bg-gray-50 transition-colors rounded-b-xl"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-medium text-charcoal">
                            Custom Safari
                          </span>
                          <span className="text-xs text-gray-400">
                            Design your own adventure
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* More Dropdown */}
                  {item.dropdown === "more" && activeDropdown === "more" && (
                    <div 
                      className="absolute top-full right-0 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleDropdownEnter(item.dropdown!)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-gray-100/80 py-2 min-w-[240px]">
                        <div className="px-5 py-2 border-b border-gray-100">
                          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Explore More
                          </span>
                        </div>
                        
                        {secondaryLinks.map((link, idx) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`
                              flex flex-col gap-0.5 px-5 py-3 hover:bg-gray-50 transition-colors
                              ${idx === secondaryLinks.length - 1 ? 'rounded-b-xl' : ''}
                            `}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-sm font-medium text-charcoal">
                              {link.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {link.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions: Search + CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/[0.03] transition-colors"
              aria-label="Search"
            >
              <Search size={18} className="text-charcoal/70" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
                hidden sm:inline-flex
                items-center justify-center
                px-6 py-2.5
                bg-savanna text-white
                text-sm font-semibold
                rounded-full
                shadow-sm shadow-savanna/20
                hover:bg-savanna/90
                hover:shadow-md
                transition-all duration-300
              "
            >
              Book Safari
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="
                lg:hidden
                flex items-center justify-center
                w-10 h-10
                rounded-full
                hover:bg-black/[0.03]
                transition-colors duration-200
              "
              aria-label="Open menu"
            >
              <Menu size={20} className="text-charcoal" />
            </button>
          </div>
        </nav>
      </header>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[55] lg:hidden animate-in fade-in duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 z-[60]
          h-full w-[85%] max-w-[380px]
          bg-white
          shadow-2xl shadow-black/10
          transform transition-transform duration-400 ease-out
          lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ borderRadius: "32px 0 0 32px" }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMobileMenu}
            >
              <Image
                src="/assets/images/logos/logo-main.webp"
                alt="Cluster Leaf Safaris"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-serif text-xl font-bold text-charcoal">
                Cluster Leaf
              </span>
            </Link>

            <button
              onClick={closeMobileMenu}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Primary Links */}
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.dropdown)}
                      className="flex items-center justify-between w-full px-6 py-4 text-left text-lg font-medium text-charcoal hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          expandedMobileDropdown === item.dropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedMobileDropdown === item.dropdown && (
                      <div className="bg-gray-50/50 py-2">
                        <Link
                          href="/safaris"
                          onClick={closeMobileMenu}
                          className="block px-8 py-3 text-sm text-charcoal hover:text-savanna transition-colors"
                        >
                          All Safaris
                        </Link>
                        {featuredSafaris.map((safari) => (
                          <Link
                            key={safari.id}
                            href={`/safaris/${safari.slug}`}
                            onClick={closeMobileMenu}
                            className="block px-8 py-3 text-sm text-gray-600 hover:text-savanna transition-colors"
                          >
                            {safari.shortTitle} ({safari.durationDays} Days)
                          </Link>
                        ))}
                        <Link
                          href="/contact"
                          onClick={closeMobileMenu}
                          className="block px-8 py-3 text-sm text-savanna font-medium hover:text-savanna-dark transition-colors"
                        >
                          Custom Safari
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-4 text-lg font-medium text-charcoal hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Divider */}
            <div className="border-t border-gray-100 my-2" />
            
            {/* More Section Header */}
            <div className="px-6 py-2">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                More
              </span>
            </div>
            
            {/* Secondary Links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="block px-6 py-3 text-base text-gray-500 hover:text-charcoal hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-gray-100 space-y-4">
            {/* Search in mobile */}
            <button
              onClick={() => {
                closeMobileMenu();
                setIsSearchOpen(true);
              }}
              className="flex items-center gap-3 w-full py-3 px-4 bg-gray-100 rounded-xl text-gray-600"
            >
              <Search size={18} />
              <span className="text-sm">Search</span>
            </button>
            
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="
                flex items-center justify-center
                w-full py-4
                bg-savanna text-white
                font-semibold rounded-full
                shadow-md shadow-savanna/20
              "
            >
              Book Your Safari
            </Link>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 py-2 text-savanna font-medium"
            >
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
