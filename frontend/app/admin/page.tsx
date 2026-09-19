export default function AdministracionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Gestión Administrativa</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card"><h2 className="text-xl font-semibold mb-4">Gestionar Usuarios</h2>
          <p className="text-gray-500">Buscar, verificar y asignar roles</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Gestionar Promociones</h2>
          <p className="text-gray-500">Carga masiva por CSV</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Gestionar Oportunidades</h2>
          <p className="text-gray-500">CRUD de convenios y becas</p></div>
        <div className="card"><h2 className="text-xl font-semibold mb-4">Auditoría</h2>
          <p className="text-gray-500">Log de acciones realizadas</p></div>
      </div>
    </div>
  );
}
