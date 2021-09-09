export async function request(url: string): Promise<string> {
  const res = await fetch(url);
  return await res.text();
}
