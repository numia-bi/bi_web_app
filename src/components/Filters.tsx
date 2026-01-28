import { Card } from './ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { FilterState, MrrRecord } from '@/types'

interface FiltersProps {
  filters: FilterState
  setFilters: (filters: FilterState) => void
  allData: MrrRecord[]
}

export default function Filters({ filters, setFilters, allData }: FiltersProps) {
  // Extract unique values from data
  const estadoOptions = ['Todas', ...Array.from(new Set(allData.map(r => r.estadoSuscripcion)))]
  const segmentacionOptions = ['Todas', ...Array.from(new Set(allData.map(r => r.segmentacion)))]
  const aeOptions = ['Todas', ...Array.from(new Set(allData.map(r => r.accountExecutive)))]

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <div className="p-4 flex items-center gap-4">
        {/* Estado Suscripción */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Estado Suscripción</label>
          <Select
            value={filters.estadoSuscripcion}
            onValueChange={(value) => setFilters({ ...filters, estadoSuscripcion: value })}
          >
            <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              {estadoOptions.map((option) => (
                <SelectItem key={option} value={option} className="text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Segmentación */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Segmentación</label>
          <Select
            value={filters.segmentacion}
            onValueChange={(value) => setFilters({ ...filters, segmentacion: value })}
          >
            <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              {segmentacionOptions.map((option) => (
                <SelectItem key={option} value={option} className="text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Account Executive */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Account Executive</label>
          <Select
            value={filters.accountExecutive}
            onValueChange={(value) => setFilters({ ...filters, accountExecutive: value })}
          >
            <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              {aeOptions.map((option) => (
                <SelectItem key={option} value={option} className="text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}
