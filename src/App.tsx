import { useState, useMemo } from 'react'
import KpiBar from './components/KpiBar'
import Filters from './components/Filters'
import SearchRow from './components/SearchRow'
import MrrTable from './components/MrrTable'
import { generateMockData } from './data/mockData'
import { MrrRecord, FilterState, SearchState } from './types'

function App() {
  const allData = useMemo(() => generateMockData(60), [])
  
  const [filters, setFilters] = useState<FilterState>({
    estadoSuscripcion: 'Todas',
    segmentacion: 'Account Executive',
    accountExecutive: 'Todas',
  })

  const [searches, setSearches] = useState<SearchState>({
    ref: '',
    clienteOdoo: '',
    logo: '',
  })

  const filteredData = useMemo(() => {
    return allData.filter((record: MrrRecord) => {
      // Filter by Estado Suscripción
      if (filters.estadoSuscripcion !== 'Todas' && record.estadoSuscripcion !== filters.estadoSuscripcion) {
        return false
      }

      // Filter by Segmentación
      if (filters.segmentacion !== 'Todas' && record.segmentacion !== filters.segmentacion) {
        return false
      }

      // Filter by Account Executive
      if (filters.accountExecutive !== 'Todas' && record.accountExecutive !== filters.accountExecutive) {
        return false
      }

      // Search by Ref
      if (searches.ref && !record.ref.toLowerCase().includes(searches.ref.toLowerCase())) {
        return false
      }

      // Search by Cliente Odoo
      if (searches.clienteOdoo && !record.clienteOdoo.toLowerCase().includes(searches.clienteOdoo.toLowerCase())) {
        return false
      }

      // Search by Logo
      if (searches.logo && !record.logo.toLowerCase().includes(searches.logo.toLowerCase())) {
        return false
      }

      return true
    })
  }, [allData, filters, searches])

  const kpiData = useMemo(() => {
    const uniqueClientes = new Set(filteredData.map((r: MrrRecord) => r.logo)).size
    const closedMrr = filteredData.reduce((sum: number, r: MrrRecord) => sum + r.closedMrr, 0)
    const mrrPendingActivation = filteredData.reduce((sum: number, r: MrrRecord) => sum + r.mrrToActivate, 0)
    const activeMrr = filteredData.reduce((sum: number, r: MrrRecord) => sum + r.activeMrr, 0)

    return {
      clientes: uniqueClientes,
      closedMrr,
      mrrPendingActivation,
      activeMrr,
    }
  }, [filteredData])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto p-4 space-y-4">
        <KpiBar {...kpiData} />
        <Filters filters={filters} setFilters={setFilters} allData={allData} />
        <SearchRow searches={searches} setSearches={setSearches} />
        <MrrTable data={filteredData} />
      </div>
    </div>
  )
}

export default App
