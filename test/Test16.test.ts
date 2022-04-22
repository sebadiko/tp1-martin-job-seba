import { Equipo } from "../Archivos/Equipo";
import { Grupo } from "../Archivos/Grupo";
import { Partido } from "../Archivos/Partido";

test('16_Cuando_Partidos_Deberia_Empezar_Con_3JuecesPartido_3JuecesVar', () => {
    const g = new Grupo("C");
    g.AgregarEquipo("Argentina", "AR");
    g.AgregarEquipo("Mexico", "MX");
    g.AgregarEquipo("Arabia Saudita", "AS");
    g.AgregarEquipo("Polonia", "PO");

    const local = new Equipo("Argentina", "AR");
    const visitante = new Equipo("Mexico", "MX");

    const partido = new Partido();
    partido.PartidosConArbitros(1, g, local, visitante, 3, 3);

    expect(partido.ArbitrosPartidos.toString(3));
    expect(partido.ArbitrosVar.toString(3));
});