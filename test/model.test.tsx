describe('Model Tests', () => {
  it('the model should have set image styles', async () => {
    const timezones = await import('../src/timezones');
    expect((timezones as any)?.NewYork).not.toBeUndefined();
  });
});
