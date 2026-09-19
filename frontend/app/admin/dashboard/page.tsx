"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalEgresados: 450, verificados: 312, tasaEmpleo: 0.68, tracerResponse: 0.45 });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Panel Administrativo</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Egresados", value: stats.totalEgresados },
          { label: "Verificados", value: stats.verificados },
          { label: "Tasa Empleo", value: `${(stats.tasaEmpleo * 100).toFixed(0)}%` },
          { label: "Tracer Response", value: `${(stats.tracerResponse * 100).toFixed(0)}%` },
        ].map(({ label, value }) => (
          <div key={label} className="card text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold text-emerald-700">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card"><h2 className="text-xl font-semibold mb-4">Usuarios Pendientes</h2>
          <p className="text-gray-500">138 registros esperando verificación</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Documentos Pendientes</h2>
          <p className="text-gray-500">24 solicitudes en revisión</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Gestionar Oportunidades</h2>
          <p className="text-gray-500">Publicar convenios y becas</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Reportes Exportar</h2>
          <p className="text-gray-500">CSV/XLSX de datos anonimizados</p></div>
      </div>
    </div>
  );
}
