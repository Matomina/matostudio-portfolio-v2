const TIMEOUT_MS = 10_000

function getApiBaseUrl() {
  return (import.meta.env.VITE_API_URL ?? 'http://localhost:3000').replace(/\/$/, '')
}

export class ApiRequestError extends Error {
  constructor(readonly status: number) {
    super(`API error: ${status}`)
    this.name = 'ApiRequestError'
  }
}

export async function apiFetch(endpoint: string, payload: unknown): Promise<void> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(`${getApiBaseUrl()}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new ApiRequestError(response.status)
    }
  } finally {
    clearTimeout(timeout)
  }
}
