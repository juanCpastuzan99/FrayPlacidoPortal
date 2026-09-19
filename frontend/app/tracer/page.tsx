"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const estados = ["EMPLEADO", "DESEMPLEADO", "EMPRENDEDOR", "ESTUDIANDO", "EMPLEADO_Y_ESTUDIANDO"];
const departamentos = ["Putumayo", "Cauca", "Nariño", "Amazonas", "Caquetá", "Huila", "Otro"];
const rangosIngresos = ["Menos de 1 SMMLV", "1-2 SMMLV", "2-3 SMMLV", "3-5 SMMLV", "Más de 5 SMMLV", "Prefiero no decirlo"];

export default function TracerPage() {
  const { user } = useAuth();
  const [form, setForm] = useState({ estado: "EMPLEADO", sectorEconomico: "", tipoContrato: "", relacionConEstudio: 3, rangoIngresos: "", departamento: "Putumayo", municipio: "" });
  const [guardado, setGuardado] = useState(false);

  const guardar = async () => {
    await fetch("/api/tracer", { method: "POST", body: JSON.stringify(form) });
    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Tracer Study</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Actualiza tu situación laboral o académica</p>
      <div className="card space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Estado actual</label>
          <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700">
            {estados.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        {form.estado === "EMPLEADO" && (
          <>
            <div><label className="block text-sm font-medium mb-1">Sector económico (CIIU)</label>
              <input value={form.sectorEconomico} onChange={(e) => setForm({ ...form, sectorEconomico: e.target.value })} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700" /></div>
            <div><label className="block text-sm font-medium mb-1">Tipo de contrato</label>
              <input value={form.tipoContrato} onChange={(e) => setForm({ ...form, tipoContrato: e.target.value })} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700" /></div>
          </>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Relación con lo estudiado (1-5)</label>
          <input type="range" min="1" max="5" value={form.relacionConEstudio} onChange={(e) => setForm({ ...form, relacionConEstudio: Number(e.target.value) })}
            className="w-full" />
          <span>{form.relacionConEstudio}/5</span>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Rango de ingresos (opcional)</label>
          <select value={form.rangoIngresos} onChange={(e) => setForm({ ...form, rangoIngresos: e.target.value })} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700">
            <option value="">Prefiero no decirlo</option>
            {rangosIngresos.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-1">Departamento</label>
            <select value={form.departamento} onChange={(e) => setForm({ ...form, departamento: e.target.value })} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700">
              {departamentos.map((d) => <option key={d} value={d}>{d}</option>)}
            </select></div>
          <div><label className="block text-sm font-medium mb-1">Municipio</label>
            <input value={form.municipio} onChange={(e) => setForm({ ...form, municipio: e.target.value })} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700" /></div>
        </div>
        <button onClick={guardar} className="btn-primary">
          {guardado ? "✓ Guardado" : "Guardar"}
        </button>
      </div>
    </div>
  );
}
