import { Contact } from "./_compenents/Contact";
import { Footer } from "./_compenents/Footer";
import { Header } from "./_compenents/Header";
import { Hero } from "./_compenents/Hero";
import { Skills } from "./_compenents/Skills";
import { Spacing } from "./_compenents/Spacing";
import { Status } from "./_compenents/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
      <Footer />
      <Footer />
    </main>
  );
}
