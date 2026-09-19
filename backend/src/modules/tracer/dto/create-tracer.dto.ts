export interface CreateTracerDto {
  uid: string;
  year: number;
  estado: string;
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
}
