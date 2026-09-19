export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Plataforma de Egresados
          <span className="text-emerald-700"> I.E. Fray Plácido</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Seguimiento laboral, orientación educativa y trámites académicos
          para la comunidad de graduados de Mocoa, Putumayo.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/auth/login" className="btn-primary text-lg px-8 py-3">
            Iniciar Sesión
          </a>
          <a href="/documentos" className="btn-secondary text-lg px-8 py-3">
            Solicitar Documentos
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué puedes hacer?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">📊 Tracer Study</h3>
            <p className="text-gray-600 dark:text-gray-300">Actualiza tu situación laboral y académica para el seguimiento institucional.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">🎓 Oportunidades</h3>
            <p className="text-gray-600 dark:text-gray-300">Convenios, becas y convocatorias de universidades aliadas.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">📄 Documentos</h3>
            <p className="text-gray-600 dark:text-gray-300">Solicita certificados, constancias y diplomas digitales.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
