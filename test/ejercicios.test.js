// CAMBIO CLAVE: Usa import en lugar de require
import * as ejercicios from "../the imported ones.js";

describe('Sprint 1: Validación de Despliegue Individual (Ejercicios 1-5)', () => {
    
    test('Actividad 1: Validando exportación y función', () => {
        expect(ejercicios.actv1).toBeDefined();
        expect(typeof ejercicios.actv1.cargarActv1).toBe('function');
    });

    test('Actividad 2: Validando exportación y función', () => {
        expect(ejercicios.actv2).toBeDefined();
        expect(typeof ejercicios.actv2.cargarActv2).toBe('function');
    });

    test('Actividad 3: Validando exportación y función', () => {
        expect(ejercicios.actv3).toBeDefined();
        expect(typeof ejercicios.actv3.cargarActv3).toBe('function');
    });

    test('Actividad 4: Validando exportación y función', () => {
        expect(ejercicios.actv4).toBeDefined();
        expect(typeof ejercicios.actv4.cargarActv4).toBe('function');
    });

    test('Actividad 5: Validando exportación y función', () => {
        expect(ejercicios.actv5).toBeDefined();
        expect(typeof ejercicios.actv5.cargarActv5).toBe('function');
    });
});