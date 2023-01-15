export const divisionFunc = (a: number = 0, b: number = 0): number => {
    if (a === 0 && b === 0) return 0;

    if (a < b && b === 0) throw new Error('cette opération n\'est pas autorisée');

    return  a < b ?  a/b : b/a;
}