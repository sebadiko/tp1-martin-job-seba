import { Equipo } from "../Archivos/Equipo";
import { Grupo } from "../Archivos/Grupo";
import { Estadio } from "../Archivos/Estadio";
import { Partido } from "../Archivos/Partido";
import { Manager } from "../Archivos/Manager";


test('11_Cuando_SeCreaUnEstadio_Deberia_Poseer_posicionGeografica_Latitud_Longitud', () => {
    const estadio = new Estadio("Bombonera", 5, 4);
    expect(estadio.Latitud).toBe(5);
    expect(estadio.Longitud).toBe(4);
});