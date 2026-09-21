import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { backendStatusContent as content } from '@/data/backendStatus'
import { fetchDbHealth, fetchHealth } from '@/lib/api/health'
import { queryKeys } from '@/lib/api/queryKeys'
import { formatLatency, formatUptime } from '@/logic/health/format/format'

function toastBackendDown() {
  toast.error(content.backendDownTitle, { description: content.backendDownDescription })
}

export default function BackendStatus() {
  // Pas de retry : un backend éteint doit être signalé tout de suite, pas après 3 essais.
  const healthQuery = useQuery({
    queryKey: queryKeys.health,
    queryFn: fetchHealth,
    enabled: false,
    retry: false,
  })
  const dbHealthQuery = useQuery({
    queryKey: queryKeys.dbHealth,
    queryFn: fetchDbHealth,
    enabled: false,
    retry: false,
  })

  async function checkServer() {
    const { data, isError } = await healthQuery.refetch()

    if (isError || !data) return toastBackendDown()
    toast.success(content.serverUpTitle, {
      description: `${content.uptimeLabel} : ${formatUptime(data.uptime)}`,
    })
  }

  async function checkDb() {
    const { data, isError } = await dbHealthQuery.refetch()

    if (isError || !data) return toastBackendDown()
    if (data.status === 'unreachable') {
      return toast.error(content.dbDownTitle, { description: content.dbDownDescription })
    }
    toast.success(content.dbUpTitle, {
      description: `${content.latencyLabel} : ${formatLatency(data.latencyMs)}`,
    })
  }

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{content.heading}</h1>
        <p className="text-lg text-muted-foreground">{content.subtitle}</p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" onClick={checkServer} disabled={healthQuery.isFetching}>
          {content.checkServerLabel}
        </Button>
        <Button size="lg" variant="outline" onClick={checkDb} disabled={dbHealthQuery.isFetching}>
          {content.checkDbLabel}
        </Button>
      </div>
    </main>
  )
}
