interface AsistenciaTypes {
  id: number;
  // personal_id: number;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha: string;
  hora_entrada?: string;
  comentario_entrada?: string;
  hora_almuerzo?: string;
  comentario_almuerzo?: string;
  hora_salida?: string;
  comentario_salida?: string;
  vino?: string;
}

export default AsistenciaTypes;
