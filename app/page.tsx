"use client";

import LocationCard from "./components/locationCard";
import Search from "./components/search";

export default function Home() {
  return (
    <div id="home-container">
      <Search />
      <LocationCard />
    </div>
  );
}
