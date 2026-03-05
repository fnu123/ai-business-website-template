"use client"

import { useState } from "react"
import { Phone, Menu, X, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/business"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">
              {business.city}
            </span>

            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {business.name}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneLink}
            className="flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            {business.phone}
          </a>

          <Button asChild>
            <a href="#contact">{business.ctaPrimary}</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={business.phoneLink}
              className="flex items-center gap-2 px-3 text-base font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {business.phone}
            </a>

            <Button asChild className="w-full">
              <a href="#contact">{business.ctaPrimary}</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}