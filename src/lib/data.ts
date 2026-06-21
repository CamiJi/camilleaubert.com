// Shared data fetching helper — avoids duplicate fetch logic
// Used by index.astro and home.astro

export async function fetchWithFallback<T>(
  endpoint: string,
  fallback: T,
  baseUrl?: string,
): Promise<T> {
  if (!baseUrl) return fallback;

  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return (await response.json()) as T;
  } catch (error) {
    console.error(`API fetch failed for ${endpoint}, falling back to local data`, error);
    return fallback;
  }
}
