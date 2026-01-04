import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import EmotionalContext from "@/components/EmotionalContext";
import WaitlistForm from "@/components/WaitlistForm";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import SpiritualBackground from "@/components/SpiritualBackground";
import ColorBlobs from "@/components/ColorBlobs";
import ScrollIndicator from "@/components/ScrollIndicator";
import CoolDivider from "@/components/CoolDivider";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-charcoal">
      {/* Animated Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal z-0"></div>
      <AnimatedGradientBackground />
      <SpiritualBackground />
      <ColorBlobs />
      
      {/* Content */}
      <div className="relative z-10">
        <SmoothScroll />
        <ScrollIndicator />
        
        <Hero />
        <CoolDivider />
        
        <HowItWorks />
        <CoolDivider />
        
        <EmotionalContext />
        <CoolDivider />
        
        <WaitlistForm />
        
        {/* Footer */}
        <footer className="py-16 px-4 text-center text-charcoal/50 text-sm relative z-10">
          <p className="text-white/40">Made with ✨ for Gen-Z souls seeking calm</p>
        </footer>
      </div>
    </main>
  );
}
