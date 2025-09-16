import Header from "@/composants/header";
import Hero from "@/composants/hero";
import TechnicienGrille from "@/ui/techgrille";
import HowItWorks from "@/ui/howItwork";
import AvisClient from "@/ui/avisClient";
import Footer from "@/composants/footer";
export default function Home() {
  return (
    <main className="flex flex-col gap-15 overflow-x-hidden">
      <section>
         <Header />
         <Hero />
      </section>
      <section className="flex flex-col gap-12">
          <TechnicienGrille/>
          <HowItWorks/>
          <AvisClient/>
      </section>
    
      <Footer />

  
    </main>
  )
}
