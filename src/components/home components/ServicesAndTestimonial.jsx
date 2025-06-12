import React from 'react'
import { motion } from "framer-motion";
import { PiCertificateBold } from "react-icons/pi";
import { BsCalendarCheck } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

const stats = [
    { value: "1000+", label: "Happy Clients" },
    { value: "75+", label: "Beauty Experts" },
    { value: "24/7", label: "Booking Support" },
    { value: "100%", label: "Satisfaction Rate" },
];

const features = [
    {
        title: "Certified Professionals",
        icon: PiCertificateBold,
        description: "All beauty experts are licensed, certified, and experienced in their specialized fields.",
        color: "bg-purple-600",
    },
    {
        title: "Flexible Scheduling",
        icon: BsCalendarCheck,
        description: "Book appointments at your convenience with same-day availability for most services.",
        color: "bg-green-600",
    },
    {
        title: "Premium Products",
        icon: MdWorkspacePremium,
        description: "We use only high-quality, professional-grade beauty products and equipment.",
        color: "bg-red-600",
    },
];

const testimonials = [
    {
        initials: "JW",
        name: "Jennifer Williams",
        review: "Amazing hair transformation! Sarah understood exactly what I wanted and delivered beyond expectations.",
        stars: 5,
        color: "bg-indigo-600",
    },
    {
        initials: "RD",
        name: "Rachel Davis",
        review: "The facial treatment was incredible. My skin has never looked better. Highly recommend Emma!",
        stars: 5,
        color: "bg-emerald-600",
    },
    {
        initials: "AB",
        name: "Amanda Brown",
        review: "Perfect makeup for my wedding day. Isabella made me feel like a princess. Absolutely stunning work!",
        stars: 5,
        color: "bg-rose-600",
    },
];

const ServicesAndTestimonial = () => {
  return (
      <div>
          <div className="p-8 max-w-6xl mx-auto space-y-12">
              <div className="text-center">
                  <h2 className="text-3xl font-bold">Why Choose BeautyHub?</h2>
                  <p className="text-gray-600 mt-2">
                      We connect you with certified beauty professionals who deliver exceptional results
                  </p>

                  <div className="grid md:grid-cols-4 gap-6 mt-10">
                      {stats.map((stat, idx) => (
                          <motion.div
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className="text-center"
                          >
                              <p className="text-2xl font-bold text-primary">{stat.value}</p>
                              <p className="text-gray-600">{stat.label}</p>
                          </motion.div>
                      ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                      {features.map((feature, idx) => {
                          const Icon = feature.icon;
                          return (
                          
                          <motion.div
                              key={idx}
                              whileInView={{ opacity: 1, y: 0 }}
                              initial={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.5, delay: idx * 0.2 }}
                              className="card shadow-lg bg-base-100"
                          >
                              <div className="card-body items-center text-center">
                                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${feature.color}`}>
                                          <Icon className="w-6 h-6" />
                                      </div>
                                  <h3 className="card-title mt-2">{feature.title}</h3>
                                  <p>{feature.description}</p>
                              </div>
                          </motion.div>
                      )})}
                  </div>
              </div>

              <div className="text-center">
                  <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                  <p className="text-gray-600 mt-2">
                      Real feedback from satisfied clients who trust BeautyHub for their beauty and wellness needs
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                      {testimonials.map((testimonial, idx) => (
                          <motion.div
                              key={idx}
                              whileHover={{ scale: 1.03 }}
                              className="card bg-base-100 shadow-md"
                          >
                              <div className="card-body">
                                  <div className="flex items-center space-x-4">
                                      <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold ${testimonial.color}`}>
                                          {testimonial.initials}
                                      </div>
                                      <div>
                                          <h4 className="font-semibold">{testimonial.name}</h4>
                                          <div className="text-yellow-400">
                                              {"★".repeat(testimonial.stars)}
                                          </div>
                                      </div>
                                  </div>
                                  <p className="mt-4 text-left">{testimonial.review}</p>
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div> 
    </div>
  )
}

export default ServicesAndTestimonial