import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Plane,
  DollarSign,
  ChevronRight,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0A0118] bg-gradient-to-b from-violet-950/20 to-black/90 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#8B5CF6_0%,_transparent_40%)]" 
      />
      
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          opacity: 0.3
        }} />
      </div>
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20"
          >
            Coming Soon
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-gradient"
          >
            Your AI Assistant for
            <span className="text-primary italic"> Everyday Tasks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-geist text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Meet Paradox, your AI companion that handles everything from finding the best deals 
            to booking flights, while you focus on what matters most.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4 md:space-y-0 md:space-x-4"
          >
            <Button 
              size="lg" 
              className="rounded-full bg-primary/90 hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gradient">
              Everything you need in <span className="italic">one place</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-400 font-geist">
              Let our AI assistant handle your everyday tasks while you focus on what
              matters most.
            </p>
          </motion.div>

          <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="neo-blur p-6 transition-all duration-300 hover:bg-white/10 shimmer-effect group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary border border-primary/20 group-hover:bg-primary/20"
                  >
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </motion.div>
                  <h3 className="mb-2 text-lg md:text-xl font-normal text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 font-geist">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Paradox Section */}
      <section className="min-h-screen flex items-center py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <div className="space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gradient">
                Meet <span className="italic text-primary">Paradox</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-geist">
                Paradox is more than just an AI assistant - it's your personal companion 
                designed to understand and adapt to your unique needs. With advanced 
                natural language processing and learning capabilities, Paradox gets 
                better at helping you with every interaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-normal text-white mb-2">Available 24/7</h3>
                  <p className="text-sm text-gray-400">Always ready to assist you, day or night</p>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-white mb-2">Personalized</h3>
                  <p className="text-sm text-gray-400">Learns and adapts to your preferences</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="neo-blur rounded-2xl p-8 border border-primary/20 relative z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                <div className="relative space-y-4">
                  <MessageCircle className="text-primary w-8 h-8" />
                  <p className="text-lg md:text-xl font-normal text-white italic">
                    "Think of me as your digital companion, here to make your life simpler 
                    and more efficient, one task at a time."
                  </p>
                  <p className="text-primary font-medium">- Paradox</p>
                </div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary/20 px-6 py-16 md:py-24 shadow-xl sm:px-24 border border-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gradient">
                  Ready to <span className="italic">simplify</span> your life?
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-400 font-geist">
                  Join our waitlist and be among the first to experience the future
                  of personal assistance.
                </p>
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
                >
                  Join Waitlist
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Paradox AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

const features = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Find and book the cheapest flights with real-time price comparisons and alerts.",
  },
  {
    icon: DollarSign,
    title: "Deal Finding",
    description:
      "Automatically search and apply the best available coupons and deals.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "Save hours of research with instant, AI-powered recommendations.",
  },
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description:
      "Chat naturally with our AI just like you would with a human assistant.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description:
      "Get personalized recommendations based on your preferences and history.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your data is encrypted and never shared with third parties.",
  },
];

export default Index;
