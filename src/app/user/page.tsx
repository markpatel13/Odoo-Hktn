"use client"

import React, { useState } from 'react';
import { 
  Edit3, 
  Settings, 
  Plus, 
  Eye, 
  Heart, 
  MessageCircle, 
  Star, 
  Calendar, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  Award,
  MapPin,
  Mail,
  Phone,
  Filter,
  Grid,
  List,
  ShoppingCart,
  User,
  Recycle
} from 'lucide-react';
import Link from 'next/link';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('listings');
  const [viewMode, setViewMode] = useState('grid');

  // User profile data
          const user = {
            name: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
            coverImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=300&fit=crop",
            joinedDate: "March 2023",
            rating: 4.8,
            totalSwaps: 23,
            totalEarnings: "$1,250",
            activeListings: 8,
            completedPurchases: 15,
            bio: "Fashion enthusiast who loves sustainable style. Always looking for unique pieces to add to my wardrobe!"
          };

  // User's listings data
  const userListings = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      title: "Vintage Denim Jacket",
      description: "Classic 90s style denim jacket in excellent condition",
      price: "$45",
      views: 47,
      likes: 12,
      messages: 5,
      status: "active",
      listedDate: "2 days ago"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      title: "Floral Summer Dress",
      description: "Beautiful floral print dress perfect for summer",
      price: "$35",
      views: 32,
      likes: 8,
      messages: 3,
      status: "active",
      listedDate: "1 week ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
      title: "Leather Ankle Boots",
      description: "Genuine leather boots with minimal wear",
      price: "$60",
      views: 89,
      likes: 15,
      messages: 8,
      status: "sold",
      listedDate: "2 weeks ago"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=400&fit=crop",
      title: "Designer Blazer",
      description: "Professional blazer in navy blue",
      price: "$80",
      views: 56,
      likes: 9,
      messages: 6,
      status: "active",
      listedDate: "3 days ago"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1582142306909-195724d33c47?w=400&h=400&fit=crop",
      title: "Casual Sweater",
      description: "Cozy knit sweater in neutral tones",
      price: "$25",
      views: 23,
      likes: 4,
      messages: 2,
      status: "active",
      listedDate: "5 days ago"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      title: "Sport Sneakers",
      description: "Comfortable running shoes, barely used",
      price: "$55",
      views: 67,
      likes: 11,
      messages: 7,
      status: "active",
      listedDate: "1 week ago"
    }
  ];

  // User's purchases data
  const userPurchases = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      title: "Silk Scarf",
      description: "Elegant silk scarf with floral pattern",
      price: "$30",
      purchaseDate: "1 week ago",
      status: "delivered",
      seller: "Emma Davis"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=400&fit=crop",
      title: "Black Leather Handbag",
      description: "Vintage leather handbag in excellent condition",
      price: "$75",
      purchaseDate: "2 weeks ago",
      status: "delivered",
      seller: "Mike Chen"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
      title: "Wool Coat",
      description: "Warm winter coat in classic style",
      price: "$120",
      purchaseDate: "3 weeks ago",
      status: "delivered",
      seller: "Anna Wilson"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      title: "Bohemian Dress",
      description: "Flowing bohemian dress with intricate patterns",
      price: "$40",
      purchaseDate: "1 month ago",
      status: "delivered",
      seller: "Lisa Brown"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  type ListingItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
    views: number;
    likes: number;
    messages: number;
    status: string;
    listedDate: string;
  };

  const ListingCard = ({ item }: { item: ListingItem }) => {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      sold: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[item.status as keyof typeof statusColors] ?? 'bg-gray-100 text-gray-800'
          }`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-blue-600">{item.price}</span>
            <span className="text-sm text-gray-500">{item.listedDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {item.views}
              </span>
              <span className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                {item.likes}
              </span>
              <span className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                {item.messages}
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

  type PurchaseItem = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
    purchaseDate: string;
    status: string;
    seller: string;
  };

  const PurchaseCard = ({ item }: { item: PurchaseItem }) => {
    const statusColors = {
      delivered: 'bg-green-100 text-green-800',
      shipped: 'bg-blue-100 text-blue-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[item.status as keyof typeof statusColors] ?? 'bg-gray-100 text-gray-800'
          }`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-blue-600">{item.price}</span>
            <span className="text-sm text-gray-500">{item.purchaseDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Seller: {item.seller}</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
              View Order
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard">
  <div className="flex-shrink-0 flex items-center cursor-pointer">
    <Recycle className="h-8 w-8 text-green-600 mr-2" />
    <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
      ReWear
    </h1>
  </div>
</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
              </button>
    
            </div>
          </div>
        </div>
      </header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">

    <div className="relative h-32 md:h-48">
      <img
        src={user.coverImage}
        alt="Cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>

    <div className="relative px-6 pb-6">
      <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-6">

        <div className="relative flex-shrink-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
            <Edit3 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">{user.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">Joined {user.joinedDate}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <StarRating rating={user.rating} />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{user.totalSwaps}</div>
              <div className="text-sm text-gray-600">Total Swaps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{user.totalEarnings}</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{user.activeListings}</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">{user.completedPurchases}</div>
              <div className="text-sm text-gray-600">Purchases</div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-600 leading-relaxed">{user.bio}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-gray-500" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gray-500" />
              <span>{user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-8">
          <div className="flex space-x-1 bg-white rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('listings')}
              className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                activeTab === 'listings'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Package className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">My Listings</span>
              <span className="sm:hidden">Listings</span>
              <span className="ml-1">({userListings.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('purchases')}
              className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                activeTab === 'purchases'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">My Purchases</span>
              <span className="sm:hidden">Purchases</span>
              <span className="ml-1">({userPurchases.length})</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
            
            {activeTab === 'listings' && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-sm">
                <Plus className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Add Listing</span>
                <span className="sm:hidden">Add</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Sections */}
        <div className="min-h-[400px]">
          {activeTab === 'listings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userListings.map((item) => (
                <ListingCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {activeTab === 'purchases' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPurchases.map((item) => (
                <PurchaseCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;