import Container from "@/components/Container";
import Entertainment from "@/components/entertainment/Entertainment";
import Header from "@/components/header/Header";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <section className="w-full -z-10 overflow-auto">
      <Container>
        <Entertainment />
        <div className="w-screen h-[200vh]"></div>
      </Container>
    </section>
  );
}
