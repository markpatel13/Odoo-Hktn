"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { 
  Search, 
  Users, 
  Package, 
  TrendingUp, 
  AlertCircle, 
  Settings, 
  Bell, 
  Menu, 
  X,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Filter,
  MoreVertical,
  User,
  ShoppingCart,
  Recycle,
  Heart,
  Star,
  ChevronDown,
  RefreshCw
} from 'lucide-react';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
const router = useRouter();

  // Sample data
  const stats = [
    { 
      id: 1, 
      title: 'Total Users', 
      value: '25,847', 
      change: '+12.5%', 
      icon: Users, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-100'
    },
    { 
      id: 2, 
      title: 'Active Listings', 
      value: '8,492', 
      change: '+8.2%', 
      icon: Package, 
      color: 'bg-green-500',
      bgColor: 'bg-green-100'
    },
    { 
      id: 3, 
      title: 'Items Swapped', 
      value: '52,318', 
      change: '+15.3%', 
      icon: Recycle, 
      color: 'bg-purple-500',
      bgColor: 'bg-purple-100'
    },
    { 
      id: 4, 
      title: 'Reported Items', 
      value: '23', 
      change: '-5.1%', 
      icon: AlertCircle, 
      color: 'bg-red-500',
      bgColor: 'bg-red-100'
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      joinDate: '2024-07-10',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b25df089?w=100&h=100&fit=crop&crop=face',
      itemsListed: 12
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      joinDate: '2024-07-09',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      itemsListed: 8
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma.w@email.com',
      joinDate: '2024-07-08',
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      itemsListed: 5
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.b@email.com',
      joinDate: '2024-07-07',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      itemsListed: 15
    }
  ];

  const recentListings = [
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      user: 'Sarah Johnson',
      category: 'Fashion',
      condition: 'Like New',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop',
      dateAdded: '2024-07-12',
      points: 25
    },
    {
      id: 2,
      title: 'Designer Handbag',
      user: 'Emma Wilson',
      category: 'Accessories',
      condition: 'Excellent',
      status: 'Pending Review',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop',
      dateAdded: '2024-07-12',
      points: 45
    },
    {
      id: 3,
      title: 'Running Shoes',
      user: 'Mike Chen',
      category: 'Sports',
      condition: 'Good',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      dateAdded: '2024-07-11',
      points: 30
    },
    {
      id: 4,
      title: 'Leather Boots',
      user: 'David Brown',
      category: 'Footwear',
      condition: 'Fair',
      status: 'Reported',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100&h=100&fit=crop',
      dateAdded: '2024-07-11',
      points: 20
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'listings', label: 'Listings', icon: Package },
    { id: 'reports', label: 'Reports', icon: AlertCircle },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusColor = (status: string) => {
      switch (status.toLowerCase()) {
        case 'active': return 'bg-green-100 text-green-800';
        case 'pending': return 'bg-yellow-100 text-yellow-800';
        case 'pending review': return 'bg-orange-100 text-orange-800';
        case 'reported': return 'bg-red-100 text-red-800';
        case 'suspended': return 'bg-gray-100 text-gray-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-3 lg:hidden"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              <div
  className="flex-shrink-0 flex items-center cursor-pointer"
  onClick={() => router.push('/Admin')}
>
  <Recycle className="h-8 w-8 text-green-600 mr-2" />
  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
    ReWear Admin
  </h1>
</div>

            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`lg:w-64 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      selectedTab === item.id
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg text-gray-800 placeholder-gray-500 text-lg"
                  placeholder="Search users, listings, or reports..."
                />
              </div>
            </div>

            {selectedTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6 border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                          <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                        </div>
                        <span className={`text-sm font-medium ${
                          stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.title}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Users */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                      <button className="text-green-600 hover:text-green-500 font-medium transition-colors text-sm">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-12 h-12 rounded-full object-cover shadow-md"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 truncate">{user.name}</h3>
                            <p className="text-sm text-gray-500 truncate">{user.email}</p>
                            <p className="text-xs text-gray-400">{user.itemsListed} items listed</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <StatusBadge status={user.status} />
                            <span className="text-xs text-gray-400 mt-1">{user.joinDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Listings */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Recent Listings</h2>
                      <button className="text-green-600 hover:text-green-500 font-medium transition-colors text-sm">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentListings.map((listing) => (
                        <div
                          key={listing.id}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-12 h-12 rounded-lg object-cover shadow-md"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 truncate">{listing.title}</h3>
                            <p className="text-sm text-gray-500">by {listing.user}</p>
                            <p className="text-xs text-gray-400">{listing.points} points • {listing.condition}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <StatusBadge status={listing.status} />
                            <span className="text-xs text-gray-400 mt-1">{listing.dateAdded}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Approve Pending</span>
                    </button>
                    <button className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      <XCircle className="h-5 w-5" />
                      <span className="font-medium">Review Reports</span>
                    </button>
                    <button className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      <Download className="h-5 w-5" />
                      <span className="font-medium">Export Data</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'users' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">User Management</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Filter className="h-4 w-4" />
                      <span className="text-sm">Filter</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200">
                      <RefreshCw className="h-4 w-4" />
                      <span className="text-sm">Refresh</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Items</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <span className="font-medium text-gray-900">{user.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{user.email}</td>
                          <td className="py-4 px-4">
                            <StatusBadge status={user.status} />
                          </td>
                          <td className="py-4 px-4 text-gray-600">{user.itemsListed}</td>
                          <td className="py-4 px-4 text-gray-600">{user.joinDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selectedTab === 'listings' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Listing Management</h2>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <Filter className="h-4 w-4" />
                      <span className="text-sm">Filter</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200">
                      <RefreshCw className="h-4 w-4" />
                      <span className="text-sm">Refresh</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Item</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Points</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentListings.map((listing) => (
                        <tr key={listing.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={listing.image}
                                alt={listing.title}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                              <span className="font-medium text-gray-900">{listing.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{listing.user}</td>
                          <td className="py-4 px-4 text-gray-600">{listing.category}</td>
                          <td className="py-4 px-4">
                            <StatusBadge status={listing.status} />
                          </td>
                          <td className="py-4 px-4 text-gray-600">{listing.points}</td>
                          <td className="py-4 px-4 text-gray-600">{listing.dateAdded}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                                <XCircle className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Add similar sections for other tabs */}
            {selectedTab === 'reports' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Reports & Issues</h2>
                <div className="text-center py-12">
                  <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No active reports to review</p>
                </div>
              </div>
            )}

            {selectedTab === 'analytics' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
                <div className="text-center py-12">
                  <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Analytics data will be displayed here</p>
                </div>
              </div>
            )}

            {selectedTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">System Settings</h2>
                <div className="text-center py-12">
                  <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Settings panel will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;