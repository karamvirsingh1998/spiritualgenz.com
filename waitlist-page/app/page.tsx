import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import SpiritualBackground from "@/components/SpiritualBackground";
import ColorBlobs from "@/components/ColorBlobs";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-charcoal">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal z-0"></div>
      <AnimatedGradientBackground />
      <SpiritualBackground />
      <ColorBlobs />
      
      {/* Content - Only 3 Sections */}
      <div className="relative z-10">
        <SmoothScroll />
        <ScrollIndicator />
        
        {/* Section 1: Hero with Dynamic What If Questions */}
        <Hero />
        
        {/* Section 2: How It Works */}
        <HowItWorks />
        
        {/* Section 3: Contact/Waitlist */}
        <WaitlistForm />
        
        {/* Footer */}
        <footer className="py-12 px-4 text-center relative z-10">
          <p className="text-white/30 text-sm">Made for Gen-Z</p>
        </footer>
      </div>
    </main>
  );
}
