import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState("verificando");
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      fetch(`/api/auth/verify?code=${code}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.verified ? "verified" : "failed");
          if (data.verified) setTimeout(() => router.push("/"), 2000);
        });
    }
  }, [code, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card text-center">
        {status === "verifying" && <p className="text-lg">Verificando tu correo...</p>}
        {status === "verified" && <p className="text-green-600 text-lg">¡Correo verificado! Redirigiendo...</p>}
        {status === "failed" && (
          <>
            <p className="text-red-600 text-lg">Error en la verificación.</p>
            <button onClick={() => router.push("/auth/login")} className="btn-primary mt-4">Reintentar</button>
          </>
        )}
      </div>
    </div>
  );
}
