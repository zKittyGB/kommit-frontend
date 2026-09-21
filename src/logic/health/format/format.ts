export function formatUptime(uptimeInSeconds: number): string {
  return `${Math.round(uptimeInSeconds)} s`
}

export function formatLatency(latencyMs: number): string {
  return `${latencyMs} ms`
}
