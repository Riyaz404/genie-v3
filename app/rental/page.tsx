"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Key } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function RentalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Key className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rental & Leasing
            </h1>
            <p className="text-muted-foreground text-lg">
              Rental listings are not included in the current Sunshine Realtors property sheet.
              Contact us to ask about availability.
            </p>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
