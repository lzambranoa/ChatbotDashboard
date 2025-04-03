export interface Respuesta {
    texto: string;
    tipo?: 'texto' | 'boton' | 'enlace';
    accion?: string;
}

export interface PreguntaConfigurada {
    id: number;
    clienteId: string;
    pregunta: string;
    respuestas: Respuesta[];
}
