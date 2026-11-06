"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Maximize2, Bed, Bath } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { properties, formatPropertyPrice } from '@/lib/properties-data'

export function FeaturedProperties() {
  const featuredProperties = properties.slice(0, 6)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            GENIE REALTY Project List
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            GENIE REALTY Project List
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the latest projects from GENIE REALTY.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/properties?id=${property.id}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.imageIsRepresentative
                        ? `Representative ${property.propertyType} image, not specific to ${property.title}`
                        : `Project image for ${property.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {property.imageIsRepresentative && (
                        <Badge variant="secondary" className="bg-card/90 text-foreground">Representative image</Badge>
                      )}
                      {property.tags.includes('new') && (
                        <Badge className="bg-accent text-accent-foreground">New</Badge>
                      )}
                      {property.tags.includes('hot-deal') && (
                        <Badge className="bg-destructive text-destructive-foreground">Hot Deal</Badge>
                      )}
                      {property.isRecent && (
                        <Badge variant="secondary" className="bg-card/90 text-foreground">Recently Added</Badge>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 left-4">
                      <div className="text-2xl font-bold text-background">
                        {formatPropertyPrice(property)}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1 text-primary" />
                      <span className="text-sm">{property.location}, {property.city}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      {property.bedroomLabel && (
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          <span>{property.bedroomLabel}</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      )}
                      {property.areaLabel && (
                        <div className="flex items-center gap-1">
                          <Maximize2 className="w-4 h-4" />
                          <span>{property.areaLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/properties">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
