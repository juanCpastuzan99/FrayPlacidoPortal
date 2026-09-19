"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ displayName: "", email: "", password: "", confirmPassword: "", numeroDocumento: "", sede: "", jornada: "", enfasis: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (form.password !== form.confirmPassword) throw new Error("Las contraseñas no coinciden");
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await sendEmailVerification(cred.user);
      // Guardar perfil en Firestore (vía API)
      router.push("/auth/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="card max-w-lg w-full mx-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Regístrate como Egresado</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: "displayName", label: "Nombre completo", type: "text" },
            { key: "email", label: "Correo electrónico", type: "email" },
            { key: "numeroDocumento", label: "Número de documento", type: "text" },
            { key: "sede", label: "Sede de grado", type: "text" },
            { key: "jornada", label: "Jornada", type: "text" },
            { key: "enfasis", label: "Énfasis técnico/académico", type: "text" },
            { key: "password", label: "Contraseña (mín. 8 caracteres)", type: "password" },
            { key: "confirmPassword", label: "Confirmar contraseña", type: "password" },
          ].map(({ key, label, type }) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input type={type} value={(form as any)[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                required />
            </div>
          ))}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Registrando..." : "Registrarse"}
          </button>
          <p className="text-sm text-center text-gray-500">
            Al registrarte aceptas la Ley 1581/2012 de protección de datos.
          </p>
        </form>
      </div>
    </div>
  );
}
