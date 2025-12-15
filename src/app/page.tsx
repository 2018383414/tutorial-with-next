"use client";

//import { useEffect, useState } from "react";
//import { Dino } from "./types";
//import Link from "next/link";

//export default function Home() {

export default async function Home() {
  const res = await fetch('http://ip-api.com/json', {
    cache: 'no-store'
  });

  const data = await res.json();

  return (
    <main style={{ padding: 24, fontFamily: 'monospace' }}>
      <h1>Hello from Deno Deploy 🌍</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

