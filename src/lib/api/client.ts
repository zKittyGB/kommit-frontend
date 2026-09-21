const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export class ApiError extends Error {
  readonly status: number

  constructor(status: number) {
    super(`La requête a échoué avec le statut ${status}`)
    this.status = status
  }
}

export async function apiGet<T>(path: string, acceptedStatuses: number[] = []): Promise<T> {
  const response = await fetch(`${API_URL}${path}`)

  if (!response.ok && !acceptedStatuses.includes(response.status)) {
    throw new ApiError(response.status)
  }

  return response.json()
}
