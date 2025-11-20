import React from 'react'
import { ArrowUp, TrendingUp } from 'lucide-react'

const Statistics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Overview Statistics</h1>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ArrowUp className="h-4 w-4 text-green-400" />
                <span className="text-gray-400 text-sm">Top item this month</span>
              </div>
              <span className="text-white font-semibold text-lg">Office Comps</span>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-gray-400 text-sm">Performance</p>
            <p className="text-green-400 font-bold">+32% growth</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics