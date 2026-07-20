import { BookingProvider } from "@/context/BookingContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Courses />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </BookingProvider>
  );
}
