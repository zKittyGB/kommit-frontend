import { QueryClientProvider } from '@tanstack/react-query'
import BackendStatus from '@/components/pages/BackendStatus/BackendStatus'
import { Toaster } from '@/components/ui/sonner'
import { queryClient } from '@/lib/queryClient'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BackendStatus />
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  )
}
