"use client"
import React, { useState } from 'react';
import { Search, Heart, Star, ChevronLeft, ChevronRight, User, Menu, Shirt, Recycle, Users, TrendingUp, Award, ArrowRight, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
const ReWearLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  // Featured clothing items carousel
  const featuredImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=400&fit=crop',
      title: 'Sustainable Fashion',
      subtitle: 'Give your clothes a second life through community swaps'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
      title: 'New Arrivals Daily',
      subtitle: 'Fresh clothing items from community members'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=400&fit=crop',
      title: 'Eco-Friendly Exchange',
      subtitle: 'Reduce textile waste while refreshing your wardrobe'
    }
  ];

  // Clothing categories
  const categories = [
    { id: 1, name: 'Tops', icon: '👕', color: 'bg-blue-500' },
    { id: 2, name: 'Dresses', icon: '👗', color: 'bg-pink-500' },
    { id: 3, name: 'Pants', icon: '👖', color: 'bg-indigo-500' },
    { id: 4, name: 'Jackets', icon: '🧥', color: 'bg-green-500' },
    { id: 5, name: 'Shoes', icon: '👠', color: 'bg-purple-500' },
    { id: 6, name: 'Accessories', icon: '👜', color: 'bg-orange-500' }
  ];

  // Featured clothing items
  const featuredItems = [
    {
      id: 1,
      name: 'Vintage Denim Jacket',
      points: 25,
      condition: 'Like New',
      size: 'M',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop',
      uploader: 'Sarah M.',
      category: 'Jackets'
    },
    {
      id: 2,
      name: 'Designer Floral Dress',
      points: 35,
      condition: 'Excellent',
      size: 'S',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop',
      uploader: 'Emma K.',
      category: 'Dresses'
    },
    {
      id: 3,
      name: 'Casual Cotton Hoodie',
      points: 20,
      condition: 'Good',
      size: 'L',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
      uploader: 'Mike J.',
      category: 'Tops'
    },
    {
      id: 4,
      name: 'Professional Blazer',
      points: 30,
      condition: 'Like New',
      size: 'M',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
      uploader: 'Lisa R.',
      category: 'Jackets'
    },
    {
      id: 5,
      name: 'Leather Ankle Boots',
      points: 40,
      condition: 'Excellent',
      size: '8',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=300&fit=crop',
      uploader: 'Anna T.',
      category: 'Shoes'
    },
    {
      id: 6,
      name: 'Sustainable Tote Bag',
      points: 15,
      condition: 'Good',
      size: 'One Size',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      uploader: 'Grace W.',
      category: 'Accessories'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

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
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
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
              <div className="flex-shrink-0 flex items-center">
                <Recycle className="h-8 w-8 text-green-600 mr-2" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  ReWear
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
              </button>
              <button
      onClick={() => router.push('/user')}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
    >
      <User className="h-5 w-5 text-gray-600" />
    </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Sustainable Fashion
            <span className="block text-green-600">Through Community</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join ReWear's community clothing exchange. Swap, share, and discover pre-loved fashion while reducing textile waste and refreshing your wardrobe sustainably.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Swapping
            </button>
            <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Browse Items
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              List an Item
            </button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-green-600 mb-2">50k+</div>
              <div className="text-gray-600">Items Exchanged</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">25k+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">200%</div>
              <div className="text-gray-600">Waste Reduction</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg text-lg"
              placeholder="Search for clothing items, brands, sizes..."
            />
          </div>
        </div>

        {/* Featured Items Carousel */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
            <img
              src={featuredImages[currentImageIndex].image}
              alt={featuredImages[currentImageIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                  {featuredImages[currentImageIndex].title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  {featuredImages[currentImageIndex].subtitle}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-30"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-30"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-100"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Items</h2>
            <button className="flex items-center text-green-600 hover:text-green-500 font-medium transition-colors">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {item.condition}
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {item.points} pts
                  </div>
                  <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Size: {item.size} • by {item.uploader}</p>
                  <StarRating rating={item.rating} />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">{item.points} Points</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-lg text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200">
                        Swap
                      </button>
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                        Redeem
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How ReWear Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">List Your Items</h3>
              <p className="text-gray-600">Upload photos and details of clothes you no longer wear</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect & Swap</h3>
              <p className="text-gray-600">Browse community items and propose swaps or use points</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn & Redeem</h3>
              <p className="text-gray-600">Earn points for successful swaps and redeem for new items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReWearLanding;