import Image from "next/image";
import { Inter } from "next/font/google";
import MapboxMap from "../components/map/Map";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-pink" style={{ width: "100vw", height: "100vh" }}>
      <Header />
    </main>
  );
}
