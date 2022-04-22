import { Equipo } from "../Archivos/Equipo";
import { Partido } from "../Archivos/Partido";


test('10_ Los nombres de los equipos no pueden comenzar con un número y no deben ser mayor a 50 caracteres', () => {
    let aux = new Equipo("1Argentina", "AR");
    expect(aux.getNombre()).toBe(null);
});

test('13_ Se debe poder hacer que en un partido un equipo no se presente y automáticamente gana el equipo contrario (sin goles a ninguno)', () => {
    let local = new Equipo("Argentina", "AR");
    let visitante = new Equipo("Mexico", "MX");

    let partido = new Partido();
    partido.creacionPartidos2(1, local);
    expect(partido.equipoLocal.puntosTotal).toBe(3);
});