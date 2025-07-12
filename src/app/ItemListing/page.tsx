"use client"
import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Heart, Share2, Star, MapPin, Clock, ShoppingBag, MessageCircle, User, ShoppingCart, Recycle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ItemListingScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const router = useRouter();
  
  // Product data
  const product = {
    id: 1,
    name: "Vintage Denim Jacket",
    description: "This stunning vintage denim jacket is a true classic piece that never goes out of style. Made from premium quality denim with authentic distressing and fading that gives it character and charm. The jacket features a classic collar, button-front closure, and two chest pockets with button flaps. Perfect for layering over your favorite outfits to add a touch of vintage flair. The jacket has been carefully maintained and shows minimal signs of wear, making it an excellent addition to any wardrobe.",
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=800&fit=crop'
    ],
    size: "Medium",
    condition: "Like New",
    swapValue: "45pts",
    category: "Jackets & Coats",
    brand: "Vintage Collection",
    color: "Blue",
    material: "100% Cotton Denim",
    owner: {
      name: "Sarah Johnson",
      avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 4.8,
      swapsCompleted: 23,
      location: "San Francisco, CA"
    },
    listedDate: "2 days ago",
    views: 47
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
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
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg text-gray-800 placeholder-gray-500 text-lg"
              placeholder="Search for clothing items, brands, sizes..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden aspect-square">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.condition}
              </div>
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Additional Product Images */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 hover:shadow-lg ${
                    index === currentImageIndex 
                      ? 'border-green-500 shadow-lg transform scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Product Name and Basic Info */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">{product.swapValue}</span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {product.listedDate}
                  </span>
                  <span>{product.views} views</span>
                </div>
              </div>
              
              {/* Product Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Size</span>
                  <p className="font-semibold text-gray-900">{product.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Brand</span>
                  <p className="font-semibold text-gray-900">{product.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Color</span>
                  <p className="font-semibold text-gray-900">{product.color}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Material</span>
                  <p className="font-semibold text-gray-900">{product.material}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <ShoppingBag className="inline-block h-5 w-5 mr-2" />
                  Start Swap
                </button>
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <MessageCircle className="inline-block h-5 w-5 mr-2" />
                  Message
                </button>
              </div>
            </div>

            {/* Owner Information */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={product.owner.avatar_url}
                  alt={product.owner.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{product.owner.name}</h4>
                  <StarRating rating={product.owner.rating} />
                  <p className="text-sm text-gray-500 mt-1">
                    {product.owner.swapsCompleted} swaps completed
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {product.owner.location}
                  </p>
                </div>
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  <User className="inline-block h-4 w-4 mr-1" />
                  View Profile
                </button>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Additional Actions */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More Actions</h3>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                    isLiked 
                      ? 'bg-red-100 text-red-600 border-2 border-red-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`inline-block h-5 w-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
                  <Share2 className="inline-block h-5 w-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListingScreen;