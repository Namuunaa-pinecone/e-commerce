"use client";

import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const BACKEND_ENDPOINT = "http://localhost:8080/product";


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
