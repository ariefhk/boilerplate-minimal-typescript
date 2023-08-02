const sayHello = (name: string): string => {
    return `Hello ${name}`;
};

describe('Test function', (): void => {
    it('it must return same with the function', (): void => {
        expect(sayHello('Arief')).toBe('Hello Arief');
    });
});
