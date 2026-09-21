export type ProcessHealth = {
  status: 'ok'
  uptime: number
  timestamp: string
}

export type DbHealth =
  | { status: 'ok'; latencyMs: number }
  | { status: 'unreachable' }
