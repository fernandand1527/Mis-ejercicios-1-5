import * as ejercicios from "../the imported ones.js";

describe('Sprint: Validación de Despliegue Individual (Rango 11-15)', () => {
    
    test('Actividad 11: Validando exportación y función', () => {
        expect(ejercicios.actv11).toBeDefined();
        expect(typeof ejercicios.actv11.cargarActv11).toBe('function');
    });

    test('Actividad 12: Validando exportación y función', () => {
        expect(ejercicios.actv12).toBeDefined();
        expect(typeof ejercicios.actv12.cargarActv12).toBe('function');
    });

    test('Actividad 13: Validando exportación y función', () => {
        expect(ejercicios.actv13).toBeDefined();
        expect(typeof ejercicios.actv13.cargarActv13).toBe('function');
    });

    test('Actividad 14: Validando exportación y función', () => {
        expect(ejercicios.actv14).toBeDefined();
        expect(typeof ejercicios.actv14.cargarActv14).toBe('function');
    });

    test('Actividad 15: Validando exportación y función', () => {
        expect(ejercicios.actv15).toBeDefined();
        expect(typeof ejercicios.actv15.cargarActv15).toBe('function');
    });
});