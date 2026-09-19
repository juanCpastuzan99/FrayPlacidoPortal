export interface User {
  uid: string;
  email: string;
  displayName: string;
  numeroDocumento: string;
  promocion: string;
  sede: string;
  jornada: string;
  enfasis: string;
  rol: "egresado" | "egresado_verificado" | "admin" | "moderador";
  estadoVerificacion: "PENDIENTE" | "VERIFICADO" | "RECHAZADO";
  telefono?: string;
  direccion?: string;
  fotoUrl?: string;
  creadoEn: string;
  actualizadoEn: string;
}

export interface TracerResponse {
  id: string;
  uid: string;
  year: number;
  estado: "EMPLEADO" | "DESEMPLEADO" | "EMPRENDEDOR" | "ESTUDIANDO" | "EMPLEADO_Y_ESTUDIANDO";
  sectorEconomico?: string;
  tipoContrato?: string;
  relacionConEstudio?: number;
  rangoIngresos?: string;
  municipio?: string;
  departamento?: string;
  modalidad?: string;
  emprendimientoSector?: string;
  emprendimientoEmpleados?: number;
  emprendimientoFormalizado?: boolean;
  institucionEstudio?: string;
  programaEstudio?: string;
  semestre?: number;
  financiacion?: string;
  consentimientoIngresos?: boolean;
  creadoEn: string;
  actualizadoEn: string;
}

export interface SolicitudDocumento {
  id: string;
  folio: string;
  uid: string;
  tipo: "CERT_NOTAS" | "CONSTANCIA_GRADO" | "DIPLOMA_DIGITAL" | "CONSTANCIA_ESTUDIO" | "DUPLICADO";
  finalidad: string;
  anioGrado: string;
  estado: "SOLICITADO" | "EN_REVISION" | "APROBADO" | "RECHAZADO" | "CORRECCION" | "GENERADO" | "LISTO";
  motivoRechazo?: string;
  urlDocumento?: string;
  creadoEn: string;
  actualizadoEn: string;
}

export interface Oportunidad {
  id: string;
  titulo: string;
  tipo: "CONVENIO" | "BECA" | "UNIVERSIDAD" | "EMPLEO" | "CURSO";
  institucion: string;
  vigenciaInicio: string;
  vigenciaFin: string;
  requisitos: string;
  link: string;
  cupos?: number;
  enfasisAfin?: string[];
  documentoUrl?: string;
  estado: "BORRADOR" | "PUBLICADO" | "CERRADO" | "VENCIDO";
  creadoEn: string;
}
