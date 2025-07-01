import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <h1 className="bg-purple-500">The Title</h1>
      <div className="flex flex-row flex-wrap w-screen justify-around bg-blue-600 rounded-4xl h-72 pl-9">
        <p>something</p>
        <p>something else</p>
        <p>secret third thing</p>
      </div>
    </>
  );
}
