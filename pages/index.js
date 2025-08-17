import { useState, useEffect } from "react";

export default function Home() {
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    fetch("/api/procedures")
      .then(res => res.json())
      .then(data => setProcedures(data));
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🏥 MedCompare India
      </h1>

      {procedures.map((proc, i) => (
        <div key={i} className="bg-white shadow-md p-4 rounded-xl mb-6">
          <h2 className="text-xl font-semibold mb-2">{proc.name}</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Hospital</th>
                <th className="border px-2 py-1">Price</th>
              </tr>
            </thead>
            <tbody>
              {proc.hospitals.map((h, j) => (
                <tr key={j}>
                  <td className="border px-2 py-1">{h.name}</td>
                  <td className="border px-2 py-1">{h.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
