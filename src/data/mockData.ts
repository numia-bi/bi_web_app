import { MrrRecord } from '../types'

const ESTADOS = ['Activa', 'Pendiente', 'Cancelada', 'En Proceso']
const SEGMENTACIONES = ['Account Executive', 'Self Service', 'Enterprise', 'Channel Partner']
const ACCOUNT_EXECUTIVES = ['Juan Pérez', 'María García', 'Carlos López', 'Ana Martínez', 'Diego Silva', 'Laura Torres']
const TIERS = ['Enterprise', 'Professional', 'Standard', 'Basic', 'Premium']
const SECTORES = ['Tecnología', 'Finanzas', 'Retail', 'Salud', 'Educación', 'Manufactura', 'Servicios', 'Gobierno']
const PRODUCTOS = [
  'Analytics Pro',
  'Business Intelligence Suite',
  'Data Platform',
  'Customer 360',
  'Marketing Cloud',
  'Sales Automation',
  'Service Hub',
  'Integration Platform',
  'AI Assistant',
  'Security Module'
]

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateRef(index: number): string {
  return `REF-${String(index + 1000).padStart(4, '0')}`
}

function generateSKU(index: number): string {
  const prefix = ['SKU', 'PROD', 'ITEM'][Math.floor(Math.random() * 3)]
  return `${prefix}-${String(index + 5000).padStart(5, '0')}`
}

function generateCompanyName(index: number): string {
  const prefixes = ['Tech', 'Digital', 'Smart', 'Global', 'Mega', 'Ultra', 'Super', 'Neo', 'Prime', 'Elite']
  const suffixes = ['Corp', 'Solutions', 'Systems', 'Group', 'Industries', 'Enterprises', 'Holdings', 'Partners']
  return `${randomItem(prefixes)} ${randomItem(suffixes)} ${index + 1}`
}

function generateLogo(companyName: string): string {
  return companyName.split(' ')[0]
}

function generateMrrValues(): { closed: number; toActivate: number; active: number } {
  const closed = Math.floor(Math.random() * 50000) + 5000
  const toActivate = Math.random() > 0.6 ? Math.floor(Math.random() * 15000) : 0
  const active = Math.floor(Math.random() * 45000) + 3000
  return {
    closed,
    toActivate,
    active
  }
}

export function generateMockData(count: number): MrrRecord[] {
  const data: MrrRecord[] = []
  
  for (let i = 0; i < count; i++) {
    const companyName = generateCompanyName(i)
    const mrr = generateMrrValues()
    
    data.push({
      ref: generateRef(i),
      clienteOdoo: companyName,
      logo: generateLogo(companyName),
      tier: randomItem(TIERS),
      sector: randomItem(SECTORES),
      closedMrr: mrr.closed,
      mrrToActivate: mrr.toActivate,
      activeMrr: mrr.active,
      sku: generateSKU(i),
      producto: randomItem(PRODUCTOS),
      estadoSuscripcion: randomItem(ESTADOS),
      segmentacion: randomItem(SEGMENTACIONES),
      accountExecutive: randomItem(ACCOUNT_EXECUTIVES)
    })
  }
  
  return data
}
