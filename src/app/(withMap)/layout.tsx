import Header from "../../components/header/Header";
import MapboxMap from "../../components/map/Map";

export const metadata = {
  title: "Entries | Suggeriscimi",
  description: "Curated entries in Lisbon",
};

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <section>
        <MapboxMap />
      </section>
      <section>{children}</section>
    </div>
  );
}
