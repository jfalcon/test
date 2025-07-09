describe('Model Tests', () => {
  it('the model should have set image styles', async () => {
    const timezones = await import('../src/timezones');
    expect(timezones.NewYork).not.toBeUndefined();
  });
});
