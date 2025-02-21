
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Coming Soon
          </span>
          <h1 className="animate-fade-up text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-gray-900">
            Your AI Assistant for
            <span className="text-primary italic"> Everyday Tasks</span>
          </h1>
          <p className="animate-fade-up font-geist text-base md:text-lg text-gray-600 max-w-2xl mx-auto [animation-delay:200ms]">
            From finding the best deals to booking flights, let AI handle your daily
            tasks while you focus on what matters most.
          </p>
          <div className="animate-fade-up space-y-4 md:space-y-0 md:space-x-4 [animation-delay:400ms]">
            <Button size="lg" className="rounded-full">
              Join Waitlist
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="mx-auto mt-12 md:mt-20 max-w-5xl animate-fade-up px-4 [animation-delay:600ms]">
          <Card className="overflow-hidden border-2 shadow-lg">
            <div className="bg-white p-4 md:p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg bg-gray-100 p-3">
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="rounded-lg bg-gray-100 p-3 md:p-4 text-sm md:text-base text-gray-700 font-geist">
                        Find me the cheapest flight from New York to London next
                        month.
                      </p>
                    </div>
                  </div>
                  <div className="ml-16 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                      <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                      <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-gray-900">
            Everything you need in <span className="italic">one place</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 font-geist">
            Let our AI assistant handle your everyday tasks while you focus on what
            matters most.
          </p>
        </div>

        <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-up border border-gray-200 p-6 transition-all duration-300 hover:border-primary/20 [animation-delay:600ms]"
            >
              <div
                className={`mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary`}
              >
                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="mb-2 text-lg md:text-xl font-normal">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 font-geist">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 md:py-24 shadow-xl sm:px-24">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary" />
            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white">
                  Ready to <span className="italic">simplify</span> your life?
                </h2>
                <p className="mt-4 text-base md:text-lg text-white/90 font-geist">
                  Join our waitlist and be among the first to experience the future
                  of personal assistance.
                </p>
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-white text-primary hover:bg-gray-100"
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
