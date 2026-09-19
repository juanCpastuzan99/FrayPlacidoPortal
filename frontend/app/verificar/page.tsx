export default function VerificarPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card max-w-md mx-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Verificación de Documento</h1>
        <p className="text-gray-600 mb-6">Ingresa el folio para verificar la autenticidad de un documento emitido por la I.E. Fray Plácido</p>
        <div className="flex gap-2">
          <input type="text" placeholder="FP-2024-0001" className="flex-1 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700" />
          <button className="btn-primary">Verificar</button>
        </div>
      </div>
    </div>
  );
}
