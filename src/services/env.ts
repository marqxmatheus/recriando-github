export const GITHUB_TOKEN: string | undefined =
  (import.meta.env.VITE_GITHUB_TOKEN ?? '').trim() || undefined;
