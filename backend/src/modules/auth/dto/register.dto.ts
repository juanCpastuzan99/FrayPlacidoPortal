export interface RegisterDto {
  displayName: string;
  email: string;
  password: string;
  numeroDocumento: string;
  sede: string;
  jornada: string;
  enfasis: string;
}
export interface LoginDto {
  email: string;
  password: string;
}
