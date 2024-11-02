import Container from "@/components/Container";
import Entertainment from "@/components/entertainment/Entertainment";
import Religion from "@/components/religion/Religion";
import Slide from "@/components/Slide";
import Sport from "@/components/sport/Sport";
import { datas } from "@/utils/datas";

export default function Home() {
  return (
    <section className="w-full">
      <Container>
        <Slide datas={datas} />
        <Entertainment />
        <Sport />
        <div className="bg-red-700 mt-4 h-6 w-full SFPro text-2xl text-white font-bold py-6 flex items-center justify-center">
          Sponsor
        </div>
        <Religion />
        <div className="w-full h-[100vh]"></div>
      </Container>
    </section>
  );
}
