import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Star, ChevronLeft, ChevronRight, User, Menu } from 'lucide-react';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data
  const featuredImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
      title: 'Summer Sale',
      subtitle: 'Up to 50% off on selected items'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      title: 'New Arrivals',
      subtitle: 'Fresh collection just for you'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=400&fit=crop',
      title: 'Premium Quality',
      subtitle: 'Handpicked products for you'
    }
  ];

  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
    { id: 2, name: 'Fashion', icon: '👗', color: 'bg-pink-500' },
    { id: 3, name: 'Home & Garden', icon: '🏠', color: 'bg-green-500' },
    { id: 4, name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
    { id: 5, name: 'Books', icon: '📚', color: 'bg-purple-500' },
    { id: 6, name: 'Beauty', icon: '💄', color: 'bg-red-500' }
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$99.99',
      originalPrice: '$149.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      discount: '33% OFF'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199.99',
      originalPrice: '$299.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      discount: '33% OFF'
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: '$49.99',
      originalPrice: '$79.99',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      discount: '38% OFF'
    },
    {
      id: 4,
      name: 'Smartphone',
      price: '$699.99',
      originalPrice: '$899.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      discount: '22% OFF'
    },
    {
      id: 5,
      name: 'Coffee Maker',
      price: '$129.99',
      originalPrice: '$179.99',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
      discount: '28% OFF'
    },
    {
      id: 6,
      name: 'Running Shoes',
      price: '$89.99',
      originalPrice: '$129.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      discount: '31% OFF'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ShopHub
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
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
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
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg text-lg"
              placeholder="Search for products, brands, and more..."
            />
          </div>
        </div>

        {/* Featured Images Carousel */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 z-10"></div>
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

        {/* Product Listings */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <button className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {product.discount}
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <StarRating rating={product.rating} />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;