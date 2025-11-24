import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import ConsultationSteps from "@/components/sections/ConsultationSteps";
import DoubtsCarousel from "@/components/sections/DoubtsCarousel";
import MyProgram from "@/components/sections/MyProgram";
import EmailSignup from "@/components/sections/EmailSignup";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <ConsultationSteps />
      <DoubtsCarousel />
      <MyProgram />
      <EmailSignup />
    </div>
  );
}
