import axios from 'axios';

export async function request(url: string): Promise<string> {
  const res = await axios.get<string>(url);
  return res.data;
}
