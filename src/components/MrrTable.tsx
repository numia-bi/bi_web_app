import { useMemo } from 'react'
import { Card } from './ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { formatCurrency } from '@/lib/utils'
import { MrrRecord } from '@/types'

interface MrrTableProps {
  data: MrrRecord[]
}

export default function MrrTable({ data }: MrrTableProps) {
  const totals = useMemo(() => {
    return data.reduce(
      (acc, record) => ({
        closedMrr: acc.closedMrr + record.closedMrr,
        mrrToActivate: acc.mrrToActivate + record.mrrToActivate,
        activeMrr: acc.activeMrr + record.activeMrr,
      }),
      { closedMrr: 0, mrrToActivate: 0, activeMrr: 0 }
    )
  }, [data])

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <div className="table-container overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-800/50">
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Ref</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Cliente Odoo</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Logo</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Tier</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Sector</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs text-right whitespace-nowrap">
                Closed MRR [usd]
              </TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs text-right whitespace-nowrap">
                MRR to Activate [usd]
              </TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs text-right whitespace-nowrap">
                Active MRR [usd]
              </TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">SKU</TableHead>
              <TableHead className="text-slate-300 font-semibold text-xs whitespace-nowrap">Producto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((record, index) => (
              <TableRow
                key={`${record.ref}-${index}`}
                className="border-slate-700 hover:bg-slate-700/30 text-xs"
              >
                <TableCell className="text-slate-200 font-mono">{record.ref}</TableCell>
                <TableCell className="text-slate-200">{record.clienteOdoo}</TableCell>
                <TableCell className="text-slate-200 font-semibold">{record.logo}</TableCell>
                <TableCell className="text-slate-200">{record.tier}</TableCell>
                <TableCell className="text-slate-200">{record.sector}</TableCell>
                <TableCell className="text-slate-200 text-right font-mono">
                  {formatCurrency(record.closedMrr)}
                </TableCell>
                <TableCell className="text-fuchsia-400 text-right font-mono">
                  {formatCurrency(record.mrrToActivate)}
                </TableCell>
                <TableCell className="text-emerald-400 text-right font-mono">
                  {formatCurrency(record.activeMrr)}
                </TableCell>
                <TableCell className="text-slate-200 font-mono">{record.sku}</TableCell>
                <TableCell className="text-slate-200">{record.producto}</TableCell>
              </TableRow>
            ))}
            
            {/* Total Row */}
            <TableRow className="border-slate-600 bg-slate-900/70 hover:bg-slate-900/70 font-bold">
              <TableCell colSpan={5} className="text-white text-sm">
                Total
              </TableCell>
              <TableCell className="text-white text-right font-mono text-sm">
                {formatCurrency(totals.closedMrr)}
              </TableCell>
              <TableCell className="text-fuchsia-400 text-right font-mono text-sm">
                {formatCurrency(totals.mrrToActivate)}
              </TableCell>
              <TableCell className="text-emerald-400 text-right font-mono text-sm">
                {formatCurrency(totals.activeMrr)}
              </TableCell>
              <TableCell colSpan={2}></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
