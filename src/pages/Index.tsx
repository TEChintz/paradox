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
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-16 text-center lg:pt-32 relative">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
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
            From finding the best deals to booking flights, let AI handle your daily
            tasks while you focus on what matters most.
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

        {/* Feature Preview */}
        <div className="mx-auto mt-12 md:mt-20 max-w-5xl animate-fade-up px-4 [animation-delay:600ms]">
          <Card className="overflow-hidden border-0 shadow-2xl neo-blur">
            <div className="relative p-6 md:p-8 bg-gradient-to-br from-black/40 to-primary/5">
              <div className="absolute inset-0 backdrop-blur-xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                  </div>
                  <div className="text-xs text-white/40 font-geist">AI Assistant</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-xl bg-primary/10 p-3 backdrop-blur-lg border border-primary/20 shadow-lg shadow-primary/10">
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="rounded-2xl bg-white/5 p-4 md:p-5 text-sm md:text-base text-gray-200 font-geist shadow-lg border border-white/10 backdrop-blur-md">
                        Find me the cheapest flight from New York to London next
                        month.
                      </p>
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60 delay-100" />
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/30 delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
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
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary/20 px-6 py-16 md:py-24 shadow-xl sm:px-24 border border-primary/20">
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
          </div>
        </div>
      </motion.section>
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
