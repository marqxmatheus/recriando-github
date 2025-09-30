import { GITHUB_TOKEN } from './env';

const baseHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
};

export async function ghGql<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}
