import CoolText from "@/components/CoolText";
import EvenCoolerText from "@/components/EvenCoolerText";

export default function Page() {
  return (
    <div className="bg-midnight">
      <CoolText />
      <br />
      <EvenCoolerText />
      <div className="flex flex-row w-full gap-5 mx-5 my-50 p-5 border-4 border-b-cyan-600">
        <div className="h-20 w-[600px] bg-white">
          <p>
            This is some text
          </p>
        </div>
        <p className="hover:animate-spin hover:text-amber-400 text-4xl bg-emerald-300">
          This is cool stuff with tailwind
        </p>
      </div>
    </div>
  )
}