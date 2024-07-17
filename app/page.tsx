import Image from "next/image";
import "@/styles/globals.css"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello.</p>
      <Button variant="destructive">I love you.</Button>
    </main>
  );
}
