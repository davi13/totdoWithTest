import {divisionFunc} from "./DivitionFunc";

describe.only('tester ma fonction division', () => {
    test('je verifie que ma fcontion existe', () => {
        const value = divisionFunc();
        expect(value).toBe(0)
        expect(value).not.toBe(2)
    });

    test('je verifie que ma fcontion peut recevoir des argument ou a < b', () => {
        const value = divisionFunc(20, 30);
        expect(value).toBe(2/3)
    });

    test('je verifie que ma fcontion peut recevoir des argument ou a > b', () => {
        const value = divisionFunc(30, 20);
        expect(value).toBe(2/3)
    });

    test('je verifie que ma fcontion peut recevoir un argument positif', () => {
        const value = divisionFunc(30);
        expect(value).toBe(0)
    });

    test('je verifie que ma fcontion peut recevoir un argument negatif', () => {
        try {
            divisionFunc(-30)
        } catch (e) {
            expect((e as Record<string, string>).message).toBe('cette opération n\'est pas autorisée')
        }
    });
})

