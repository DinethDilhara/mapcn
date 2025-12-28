import { Header } from "@/components/header";
import { Hero } from "./_components/hero";
import { Examples } from "./_components/examples";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header className="max-w-5xl mx-auto" />

      <main className="flex-1 px-6 py-16 mx-auto">
        <section className="max-w-5xl w-full space-y-12">
          <Hero />
          <Examples />
        </section>
      </main>

      <Footer />
    </div>
  );
}
