import Image from "next/image";
import { Poppins } from "next/font/google";
import MapboxMap from "../../components/map/Map";
import Header from "../../components/header/Header";

const inter = Poppins({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <main
      className={`${inter.variable} font-sans`}
      style={{ width: "100vw", height: "100vh" }}
    >
      <div>
        <Header />
        <section>
          <MapboxMap />
        </section>
      </div>
    </main>
  );
}
