export default function OportunidadesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Oportunidades</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Convenios, becas, universidades aliadas y convocatorias</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card">
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Convenio</span>
            <h3 className="font-semibold mt-3">Título de la oportunidad {i}</h3>
            <p className="text-sm text-gray-500 mt-2">Institución de educación superior o empresa aliada</p>
            <a href="#" className="text-emerald-700 text-sm mt-4 inline-block">Ver detalles →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
