import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import SmoothScroll from "@/components/SmoothScroll";
import SimpleBackground from "@/components/SimpleBackground";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-charcoal">
      {/* Simple Background */}
      <SimpleBackground />
      
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
        <footer className="py-12 md:py-16 px-4 text-center relative z-10">
          <p className="text-white/40 text-sm md:text-base mb-2">
            Built by Gen-Z, for Gen-Z
          </p>
          <p className="text-white/30 text-xs md:text-sm mb-3 md:mb-4">
            Because only we understand how we feel
          </p>
          <a 
            href="https://www.linkedin.com/in/karamvir-singh-842838177/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 md:mt-4 text-white/50 hover:text-white/80 text-xs md:text-sm transition-colors underline underline-offset-4"
          >
            Connect with the builder
          </a>
        </footer>
      </div>
    </main>
  );
}
