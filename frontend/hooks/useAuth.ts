import { useState, useCallback } from "react";
import { useAuth as useFirebaseAuth } from "@/lib/firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

export function useAuth() {
  const { user, loading, isAuthenticated } = useFirebaseAuth();
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  const loginWithGoogle = useCallback(async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  return {
    user,
    loading,
    isAuthenticated,
    role: (user as any)?.customClaims?.rol || "egresado",
    error,
    login,
    loginWithGoogle,
    logout,
  };
}
