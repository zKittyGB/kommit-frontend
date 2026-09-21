import { apiGet } from '@/lib/api/client'
import type { DbHealth, ProcessHealth } from '@/types/apiContract'

export function fetchHealth(): Promise<ProcessHealth> {
  return apiGet<ProcessHealth>('/health')
}

// Le backend répond 503 avec un corps DbHealth quand la base est injoignable.
export function fetchDbHealth(): Promise<DbHealth> {
  return apiGet<DbHealth>('/db-health', [503])
}
