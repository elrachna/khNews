import Container from "@/components/Container";
import Entertainment from "@/components/entertainment/Entertainment";
import Header from "@/components/header/Header";
import Slide from "@/components/Slide";
import Sport from "@/components/sport/Sport";

export default function Home() {
  return (
    <section className="w-full -z-10 overflow-hidden">
      <Container>
        <Entertainment />
        <Sport />
        <div className="bg-red-700 mt-4 h-6 w-full SFPro text-2xl text-white font-bold py-6 flex items-center justify-center">
          Sponsor
        </div>
        <div className="w-screen h-[100vh]"></div>
      </Container>
    </section>
  );
}
