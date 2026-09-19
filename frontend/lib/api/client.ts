import { createContext, useContext } from "react";
import { User, TracerResponse, SolicitudDocumento, Oportunidad } from "@/types";

interface AppContextType {
  user: User | null;
  tracerData: TracerResponse | null;
  solicitudes: SolicitudDocumento[];
  oportunidades: Oportunidad[];
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
export function useApp() { return useContext(AppContext); }
