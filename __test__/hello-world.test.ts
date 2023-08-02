describe('Test Hello World', (): void => {
    it('It must return hello world', (): void => {
        const sayHello = 'Hello World!';
        expect(sayHello).toBe('Hello World!');
    });
});
