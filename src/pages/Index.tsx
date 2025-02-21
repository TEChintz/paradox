
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
    <div className="min-h-screen bg-[#0A0118] bg-gradient-to-b from-violet-950/20 to-black/90 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#8B5CF6_0%,_transparent_40%)] opacity-20" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-16 text-center lg:pt-32 relative">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
            Coming Soon
          </span>
          <h1 className="animate-fade-up text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-gradient">
            Your AI Assistant for
            <span className="text-primary italic"> Everyday Tasks</span>
          </h1>
          <p className="animate-fade-up font-geist text-base md:text-lg text-gray-400 max-w-2xl mx-auto [animation-delay:200ms]">
            From finding the best deals to booking flights, let AI handle your daily
            tasks while you focus on what matters most.
          </p>
          <div className="animate-fade-up space-y-4 md:space-y-0 md:space-x-4 [animation-delay:400ms]">
            <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary">
              Join Waitlist
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="mx-auto mt-12 md:mt-20 max-w-5xl animate-fade-up px-4 [animation-delay:600ms]">
          <Card className="overflow-hidden border-0 shadow-2xl neo-blur">
            <div className="p-4 md:p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-white/5 p-2.5 shadow-sm border border-white/10">
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="rounded-2xl bg-white/5 p-3 md:p-4 text-sm md:text-base text-gray-200 font-geist shadow-sm border border-white/10">
                        Find me the cheapest flight from New York to London next
                        month.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gradient">
            Everything you need in <span className="italic">one place</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 font-geist">
            Let our AI assistant handle your everyday tasks while you focus on what
            matters most.
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-up neo-blur p-6 transition-all duration-300 hover:bg-white/10 [animation-delay:600ms]"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary border border-primary/20">
                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="mb-2 text-lg md:text-xl font-normal text-white">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-400 font-geist">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
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
      </section>
    </div>
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
