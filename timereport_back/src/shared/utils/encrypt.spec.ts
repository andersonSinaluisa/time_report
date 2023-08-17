import { compare, encrypt } from './encrypt';

describe('Encrypt', () => {
  it('should be defined', () => {
    expect(encrypt).toBeDefined();
  });
  it('Encrypt Text', async () => {
    const res = await encrypt('text');
    expect(res).toBeDefined();
    expect(res).not.toBe('text');
  });
  it('Compare Text', async () => {
    const res = await encrypt('text');
    const finalt = await compare('text', res);
    expect(finalt).toBe(true);
  });
});
