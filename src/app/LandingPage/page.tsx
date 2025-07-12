"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Recycle, Heart, ArrowRight, Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentClothingSlide, setCurrentClothingSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
const router = useRouter();

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop',
      title: 'Sustainable Fashion',
      subtitle: 'Give your clothes a second life through community swaps'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop',
      title: 'New Arrivals Daily',
      subtitle: 'Fresh clothing items from community members'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&h=600&fit=crop',
      title: 'Eco-Friendly Exchange',
      subtitle: 'Reduce textile waste while refreshing your wardrobe'
    }
  ];

  // Categories
  const categories = [
    { id: 1, name: 'Tops', icon: '👕', color: 'bg-blue-500' },
    { id: 2, name: 'Dresses', icon: '👗', color: 'bg-pink-500' },
    { id: 3, name: 'Pants', icon: '👖', color: 'bg-indigo-500' },
    { id: 4, name: 'Jackets', icon: '🧥', color: 'bg-green-500' },
    { id: 5, name: 'Shoes', icon: '👠', color: 'bg-purple-500' },
    { id: 6, name: 'Accessories', icon: '👜', color: 'bg-orange-500' }
  ];

  // Featured clothing items
  const featuredClothing = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
      title: 'Vintage Denim Jacket',
      description: 'Classic 90s style denim jacket in excellent condition',
      size: 'Medium',
      condition: 'Like New',
      points: 45,
      uploader: 'Sarah M.',
      rating: 4.8
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      title: 'Floral Summer Dress',
      description: 'Beautiful floral print dress perfect for summer',
      size: 'Small',
      condition: 'Excellent',
      points: 35,
      uploader: 'Emma K.',
      rating: 4.9
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop',
      title: 'Leather Ankle Boots',
      description: 'Genuine leather boots with minimal wear',
      size: 'US 8',
      condition: 'Very Good',
      points: 60,
      uploader: 'Anna T.',
      rating: 4.7
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=500&fit=crop',
      title: 'Designer Blazer',
      description: 'Professional blazer in navy blue',
      size: 'Large',
      condition: 'Like New',
      points: 80,
      uploader: 'Lisa R.',
      rating: 4.6
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1582142306909-195724d33c47?w=400&h=500&fit=crop',
      title: 'Casual Sweater',
      description: 'Cozy knit sweater in neutral tones',
      size: 'Medium',
      condition: 'Good',
      points: 25,
      uploader: 'Mike J.',
      rating: 4.5
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop',
      title: 'Sport Sneakers',
      description: 'Comfortable running shoes, barely used',
      size: 'US 9',
      condition: 'Excellent',
      points: 55,
      uploader: 'Grace W.',
      rating: 4.8
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      text: 'SwapStyle completely transformed my wardrobe! I\'ve discovered so many unique pieces.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'Amazing platform for sustainable fashion. I\'ve saved hundreds while helping the environment.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'The community is fantastic! Trading clothes has never been easier or more fun.',
      rating: 5
    }
  ];

  // Impact metrics
  const impactMetrics = [
    { label: 'Items Swapped', value: '50k+', color: 'text-green-600' },
    { label: 'Active Users', value: '12k+', color: 'text-blue-600' },
    { label: 'CO2 Saved', value: '25 Tons', color: 'text-purple-600' },
    { label: 'Waste Reduction', value: '200%', color: 'text-orange-600' }
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
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
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Recycle className="h-8 w-8 text-green-600 mr-2" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  SwapStyle
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Browse
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Community
              </a>
            </nav>

            {/* Header Actions */}
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
              <div className="hidden md:flex items-center space-x-2">
                <button
  onClick={() => router.push('/Auth')}
  className="text-green-600 hover:text-green-500 px-4 py-2 rounded-lg font-medium transition-colors"
>
  Login
</button>

<button
  onClick={() => router.push('/Auth')}
  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
>
  Sign Up
</button>

              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                  Home
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                  Browse
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                  How It Works
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                  Community
                </a>
                <div className="pt-4 space-y-2">
                  <button className="w-full text-left px-3 py-2 text-green-600 hover:text-green-500 font-medium">
                    Login
                  </button>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
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
            Join SwapStyle's community clothing exchange. Swap, share, and discover pre-loved fashion while reducing textile waste and refreshing your wardrobe sustainably.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Swapping
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Browse Items
            </button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
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
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-lg text-gray-800 placeholder-gray-500 text-lg"
              placeholder="Search for clothing items, brands, sizes..."
            />
          </div>
        </div>

        {/* Featured Items Carousel */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
            <img
              src={heroSlides[currentHeroSlide].image}
              alt={heroSlides[currentHeroSlide].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                  {heroSlides[currentHeroSlide].title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  {heroSlides[currentHeroSlide].subtitle}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevHeroSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-30"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextHeroSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-30"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
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
            {featuredClothing.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How SwapStyle Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-green-600" />
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
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn & Redeem</h3>
              <p className="text-gray-600">Earn points for successful swaps and redeem for new items</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real swappers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar_url}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;