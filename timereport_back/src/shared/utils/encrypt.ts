import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

async function encrypt(text: string): Promise<string> {
  const hash = await bcrypt.hash(text, saltOrRounds);
  return hash;
}

async function compare(text1, text2): Promise<boolean> {
  const isMatch = await bcrypt.compare(text1, text2);
  return isMatch;
}

export { encrypt, compare };
