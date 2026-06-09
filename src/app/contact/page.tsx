"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companyInfo, safaris } from "@/lib/content";
import { useToast } from "@/hooks/use-toast";
import CompactFAQ from "@/components/sections/CompactFAQ";
import { faqItems } from "@/lib/faqData";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    safari: "",
    project: "",
    travelers: "",
    referralSource: "",
    referrerName: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. First send to our API (database/email)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to system");
      }

      // 2. Format detailed message for WhatsApp - Clean & Professional
      const messageParts = [
        "NEW INQUIRY: WEB",
        "--------------------------",
        `CLIENT: ${formData.name}`,
        `EMAIL: ${formData.email}`,
        `PHONE: ${formData.phone}`,
        `TRAVELERS: ${formData.travelers}`,
        `SAFARI/PROJECT: ${formData.project || formData.safari || "Custom Inquiry"}`,
        `SOURCE: ${formData.referralSource}${formData.referrerName ? ` (${formData.referrerName})` : ""}`,
        "",
        "MESSAGE:",
        formData.message
      ];

      const waMessage = messageParts.map(part => encodeURIComponent(part)).join("%0A");

      const waLink = `https://wa.me/${companyInfo.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}?text=${waMessage}`;

      toast({
        title: "Inquiry Sent!",
        description: "Your inquiry has been logged. Redirecting you to WhatsApp to start a conversation...",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        safari: "",
        project: "",
        travelers: "",
        referralSource: "",
        referrerName: "",
        message: "",
      });

      // Redirect after a short delay
      setTimeout(() => {
        window.open(waLink, "_blank");
      }, 1500);

    } catch {
      toast({
        title: "Error",
        description: "Failed to process inquiry. Please try again or message us on WhatsApp directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-savanna">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Let&apos;s start planning your African adventure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a personalized safari proposal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1 rounded-none focus:border-savanna"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1 rounded-none focus:border-savanna"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1 rounded-none focus:border-savanna"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project">Project Name / Reference</Label>
                    <Input
                      id="project"
                      value={formData.project}
                      onChange={(e) =>
                        setFormData({ ...formData, project: e.target.value })
                      }
                      className="mt-1 rounded-none focus:border-savanna"
                      placeholder="e.g. Family Safari 2026"
                    />
                  </div>
                  <div>
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select
                      value={formData.travelers}
                      onValueChange={(value) =>
                        setFormData({ ...formData, travelers: value })
                      }
                    >
                      <SelectTrigger className="mt-1 rounded-none">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                          <SelectItem key={num} value={String(num)}>
                            {num} {num === 1 ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="safari">Interested Safari</Label>
                  <Select
                    value={formData.safari}
                    onValueChange={(value) =>
                      setFormData({ ...formData, safari: value })
                    }
                  >
                    <SelectTrigger className="mt-1 rounded-none">
                      <SelectValue placeholder="Select a safari" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom Safari</SelectItem>
                      {safaris.map((safari) => (
                        <SelectItem key={safari.id} value={safari.slug}>
                          {safari.shortTitle}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="referralSource">How did you hear about us?</Label>
                    <Select
                      value={formData.referralSource}
                      onValueChange={(value) =>
                        setFormData({ ...formData, referralSource: value })
                      }
                    >
                      <SelectTrigger className="mt-1 rounded-none">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Referral">Referral / Word of Mouth</SelectItem>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Google">Google Search</SelectItem>
                        <SelectItem value="SafariBookings">SafariBookings</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {formData.referralSource === "Referral" && (
                    <div>
                      <Label htmlFor="referrerName">Who referred you?</Label>
                      <Input
                        id="referrerName"
                        value={formData.referrerName}
                        onChange={(e) =>
                          setFormData({ ...formData, referrerName: e.target.value })
                        }
                        className="mt-1 rounded-none focus:border-savanna"
                        placeholder="Friend's name"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1 rounded-none focus:border-savanna resize-none"
                    placeholder="Tell us about your dream safari, preferred travel dates, and any special requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sunset hover:bg-sunset-dark text-white uppercase tracking-widest py-6 rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to speak directly with us? We&apos;re always happy to chat
                about your African adventure.
              </p>

              <div className="space-y-6 mb-12">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-4 p-4 bg-off-white hover:bg-desert/20 transition-colors group"
                >
                  <Phone className="h-6 w-6 text-savanna flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal group-hover:text-savanna transition-colors">
                      Phone
                    </p>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-off-white hover:bg-desert/20 transition-colors group"
                >
                  <svg
                    className="h-6 w-6 text-savanna flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal group-hover:text-savanna transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-gray-600">Message us anytime</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-off-white hover:bg-desert/20 transition-colors group"
                >
                  <Mail className="h-6 w-6 text-savanna flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal group-hover:text-savanna transition-colors">
                      Email
                    </p>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-off-white">
                  <MapPin className="h-6 w-6 text-savanna flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Location</p>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-savanna/10">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-savanna" />
                  <h3 className="font-serif text-lg text-charcoal">
                    Office Hours
                  </h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM (CAT)</p>
                  <p>Saturday: 9:00 AM - 1:00 PM (CAT)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230375.62368945678!2d17.0!3d-22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0c1c7c7f5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sWindhoek%2C%20Namibia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Windhoek, Namibia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="py-16 bg-off-white/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <CompactFAQ items={faqItems} maxItems={4} />
        </div>
      </section>
    </>
  );
}
