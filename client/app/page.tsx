import Cards from "@/components/Cards";
import LongCarousel from "@/components/LongCarousel";

export default function Home() {
  return (
    <div className="max-w-bigScreen mx-auto">
      <LongCarousel/>
      <Cards/>
    </div>
  );
}
