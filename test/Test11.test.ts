import { Estadio } from "../Archivos/Estadio";



test('11_Cuando_SeCreaUnEstadio_Deberia_Poseer_posicionGeografica_Latitud_Longitud', () => {
    const estadio = new Estadio("Bombonera", 34, 58);
    expect(estadio.Latitud).toBe(34);
    expect(estadio.Longitud).toBe(58);
});