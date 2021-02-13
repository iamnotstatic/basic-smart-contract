const Counter = artifacts.require('Counter');

contract('Counter', async accounts => {
    it('should deploy with a constructor', async () => {
        const a = 4;
        const instance = await Counter.new(a);
        const count = await instance.count();
        assert.equal(count, a);
    });
});

