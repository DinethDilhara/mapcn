import { Header } from "@/components/header";
import { Hero } from "./_components/hero";
import { Examples } from "./_components/examples";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Header className="max-w-5xl mx-auto w-full xl:px-0" />

      <main className="flex-1 px-6 py-20 mx-auto w-full">
        <section className="max-w-5xl mx-auto flex flex-col gap-20">
          <Hero />
          <Examples />
        </section>
      </main>

      <Footer />
    </div>
  );
}
