"use client"

import { Card } from "./components/Card";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="w-full flex justify-center flex-col">
      <div className="container">
        <Header />
        <div className="grid grid-cols-3 gap-6 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
