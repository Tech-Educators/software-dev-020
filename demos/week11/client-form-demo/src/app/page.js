"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [options, setOptions] = useState([]);
  const [state, setState] = useState({
    title: "",
    categoryId: "",
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api`);
      const dogs = await res.json();
      setOptions(dogs);
    }
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={state.title}
        onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
        required
      />

      <select
        value={state.categoryId}
        onChange={(e) =>
          setState((s) => ({ ...s, categoryId: e.target.value }))
        }
        required
      >
        {/* display options that were fetched from API route */}
        <option value="">Select category</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </form>
  );
}
