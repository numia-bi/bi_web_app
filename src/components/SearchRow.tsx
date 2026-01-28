import { Card } from './ui/card'
import { Input } from './ui/input'
import { SearchState } from '@/types'

interface SearchRowProps {
  searches: SearchState
  setSearches: (searches: SearchState) => void
}

export default function SearchRow({ searches, setSearches }: SearchRowProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <div className="p-4 flex items-center gap-4">
        {/* Ref Search */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Ref.</label>
          <Input
            placeholder="Search"
            value={searches.ref}
            onChange={(e) => setSearches({ ...searches, ref: e.target.value })}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
          />
        </div>

        {/* Cliente Odoo Search */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Cliente Odoo</label>
          <Input
            placeholder="Search"
            value={searches.clienteOdoo}
            onChange={(e) => setSearches({ ...searches, clienteOdoo: e.target.value })}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
          />
        </div>

        {/* Logo Search */}
        <div className="flex-1">
          <label className="text-xs text-slate-400 mb-2 block">Logo</label>
          <Input
            placeholder="Search"
            value={searches.logo}
            onChange={(e) => setSearches({ ...searches, logo: e.target.value })}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500"
          />
        </div>
      </div>
    </Card>
  )
}
