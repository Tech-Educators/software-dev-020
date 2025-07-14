import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Home page</h2>
      <Button>
        <div>
          <p>THis is in the button tag</p>
          <p>So is this</p>
        </div>
      </Button>
    </div>
  );
}


'localhost:3000/pages/dogs'