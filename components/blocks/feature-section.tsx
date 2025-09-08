"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className,
  title = "How to Get Started",
  autoPlayInterval = 4000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          {title}
        </h2>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2",
                  index === currentFeature
                    ? "bg-primary border-primary text-primary-foreground scale-110"
                    : "bg-muted border-muted-foreground"
                )}
              >
                {index <= currentFeature ? (
                  <span className="text-lg font-bold">✓</span>
                ) : (
                  <span className="text-lg font-semibold">{index + 1}</span>
                )}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {feature.title || feature.step}
                </h3>
                <p className="mt-2 text-sm md:text-lg text-muted-foreground leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}