export interface CreateOportunidadDto {
  titulo: string;
  tipo: string;
  institucion: string;
  vigenciaInicio: string;
  vigenciaFin: string;
  requisitos: string;
  link: string;
  cupos?: number;
  enfasisAfin?: string[];
  documentoUrl?: string;
}
