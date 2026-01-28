export interface MrrRecord {
  ref: string
  clienteOdoo: string
  logo: string
  tier: string
  sector: string
  closedMrr: number
  mrrToActivate: number
  activeMrr: number
  sku: string
  producto: string
  estadoSuscripcion: string
  segmentacion: string
  accountExecutive: string
}

export interface FilterState {
  estadoSuscripcion: string
  segmentacion: string
  accountExecutive: string
}

export interface SearchState {
  ref: string
  clienteOdoo: string
  logo: string
}

export interface KpiData {
  clientes: number
  closedMrr: number
  mrrPendingActivation: number
  activeMrr: number
}
