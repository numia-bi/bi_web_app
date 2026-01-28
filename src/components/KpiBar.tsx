import { Activity } from 'lucide-react'
import { Card } from './ui/card'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { KpiData } from '@/types'

interface KpiBarProps extends KpiData {}

export default function KpiBar({ clientes, closedMrr, mrrPendingActivation, activeMrr }: KpiBarProps) {
  const now = new Date()
  const timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <div className="p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[120px]">
          <Activity className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">numia</span>
        </div>

        {/* KPIs */}
        <div className="flex items-center gap-8 flex-1 justify-center">
          {/* Clientes */}
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-1">Clientes</div>
            <div className="text-3xl font-bold text-white">{formatNumber(clientes)}</div>
          </div>

          {/* Closed MRR */}
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-1">Closed MRR</div>
            <div className="text-3xl font-bold text-white">${formatCurrency(closedMrr)}</div>
          </div>

          {/* MRR Pending Activation */}
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-1">MRR Pending Activation</div>
            <div className="text-3xl font-bold text-fuchsia-400">${formatCurrency(mrrPendingActivation)}</div>
          </div>

          {/* Active MRR */}
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-1">Active MRR</div>
            <div className="text-3xl font-bold text-emerald-400">${formatCurrency(activeMrr)}</div>
          </div>
        </div>

        {/* Timestamp */}
        <div className="text-right min-w-[200px]">
          <div className="text-xs text-slate-400">Última actualización data</div>
          <div className="text-sm text-slate-300 font-mono">{timestamp}</div>
        </div>
      </div>
    </Card>
  )
}
