import React from 'react'
import { TrendingUp, Users, ShoppingCart, DollarSign, Calendar, ChevronDown } from 'lucide-react'

const Dashboard = () => {
  const statsCards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "bg-green-500"
    },
    {
      title: "Subscribers",
      value: "+2350",
      change: "+180.1% from last month",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: ShoppingCart,
      color: "bg-purple-500"
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: TrendingUp,
      color: "bg-orange-500"
    }
  ]

  return (
    <div className='flex gap-6 p-6'>
      {/* Left side - Main Content */}
      <div className='flex-1 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6'>
        {/* Header */}
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              Dashboard
            </h1>
            <p className='text-gray-400 mt-1'>Welcome back! Here's your analytics overview.</p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='relative'>
              <Calendar className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <select className='pl-10 pr-8 py-2 bg-gray-800/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer text-white'>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
              <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none' />
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {statsCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div 
                key={index}
                className='bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105'
              >
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-300 text-sm font-medium'>{card.title}</p>
                    <p className='text-2xl font-bold text-white mt-2'>{card.value}</p>
                    <p className='text-green-400 text-sm mt-2'>{card.change}</p>
                  </div>
                  <div className={`w-12 h-12 ${card.color}/20 rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${card.color.replace('bg-', 'text-')}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Revenue Chart */}
          <div className='bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-lg font-semibold text-white'>Revenue Overview</h3>
              <span className='text-green-400 text-sm font-medium'>+15.2%</span>
            </div>
            <div className='h-64 bg-gray-900/40 rounded-xl flex items-center justify-center border border-gray-700/30'>
              <p className='text-gray-400'>Revenue chart visualization</p>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className='bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-lg font-semibold text-white'>Traffic Sources</h3>
              <span className='text-blue-400 text-sm font-medium'>Last 7 days</span>
            </div>
            <div className='h-64 bg-gray-900/40 rounded-xl flex items-center justify-center border border-gray-700/30'>
              <p className='text-gray-400'>Traffic sources chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Orders & Recent Activity */}
      <div className='w-80 space-y-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6'>
        {/* Orders Card */}
        <div className='bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-lg font-semibold text-white'>Recent Orders</h3>
            <span className='text-gray-400 text-sm hover:text-white cursor-pointer transition-colors'>View all</span>
          </div>
          
          <div className='space-y-4'>
            {[
              { id: 1, customer: "Alex Johnson", amount: "$149.00", status: "Completed" },
              { id: 2, customer: "Sarah Miller", amount: "$89.99", status: "Pending" },
              { id: 3, customer: "Mike Chen", amount: "$234.50", status: "Completed" },
              { id: 4, customer: "Emma Davis", amount: "$156.75", status: "Processing" }
            ].map((order) => (
              <div key={order.id} className='flex items-center justify-between p-3 bg-gray-900/40 rounded-lg hover:bg-gray-800/60 transition-colors border border-gray-700/30'>
                <div>
                  <p className='text-white font-medium text-sm'>{order.customer}</p>
                  <p className='text-gray-400 text-xs'>{order.amount}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  order.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className='bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6'>
          <h3 className='text-lg font-semibold text-white mb-4'>Performance</h3>
          <div className='space-y-3'>
            <div className='flex justify-between items-center p-2 hover:bg-gray-700/30 rounded-lg transition-colors'>
              <span className='text-gray-300 text-sm'>Conversion Rate</span>
              <span className='text-white font-medium'>3.24%</span>
            </div>
            <div className='flex justify-between items-center p-2 hover:bg-gray-700/30 rounded-lg transition-colors'>
              <span className='text-gray-300 text-sm'>Avg. Session</span>
              <span className='text-white font-medium'>4m 12s</span>
            </div>
            <div className='flex justify-between items-center p-2 hover:bg-gray-700/30 rounded-lg transition-colors'>
              <span className='text-gray-300 text-sm'>Bounce Rate</span>
              <span className='text-white font-medium'>42.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard