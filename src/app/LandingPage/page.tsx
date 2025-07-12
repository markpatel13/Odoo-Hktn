import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Recycle, Heart, ArrowRight, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentClothingSlide, setCurrentClothingSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop',
      title: 'Swap Your Style',
      subtitle: 'Trade clothes, reduce waste, discover new looks',
      cta1: 'Start Swapping',
      cta2: 'Browse Items'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop',
      title: 'Sustainable Fashion',
      subtitle: 'Join thousands making fashion more sustainable',
      cta1: 'Join Community',
      cta2: 'Learn More'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&h=600&fit=crop',
      title: 'Fresh Wardrobe',
      subtitle: 'Refresh your closet without breaking the bank',
      cta1: 'Get Started',
      cta2: 'View Collection'
    }
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
      swapValue: '$45'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      title: 'Floral Summer Dress',
      description: 'Beautiful floral print dress perfect for summer',
      size: 'Small',
      condition: 'Excellent',
      swapValue: '$35'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop',
      title: 'Leather Ankle Boots',
      description: 'Genuine leather boots with minimal wear',
      size: 'US 8',
      condition: 'Very Good',
      swapValue: '$60'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=500&fit=crop',
      title: 'Designer Blazer',
      description: 'Professional blazer in navy blue',
      size: 'Large',
      condition: 'Like New',
      swapValue: '$80'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1582142306909-195724d33c47?w=400&h=500&fit=crop',
      title: 'Casual Sweater',
      description: 'Cozy knit sweater in neutral tones',
      size: 'Medium',
      condition: 'Good',
      swapValue: '$25'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop',
      title: 'Sport Sneakers',
      description: 'Comfortable running shoes, barely used',
      size: 'US 9',
      condition: 'Excellent',
      swapValue: '$55'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
      text: 'SwapStyle completely transformed my wardrobe! I\'ve discovered so many unique pieces.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'Amazing platform for sustainable fashion. I\'ve saved hundreds while helping the environment.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'The community is fantastic! Trading clothes has never been easier or more fun.',
      rating: 5
    }
  ];

  // Impact metrics
  const impactMetrics = [
    { label: 'Items Swapped', value: '50,000+', icon: Recycle },
    { label: 'Active Users', value: '12,000+', icon: Users },
    { label: 'CO2 Saved', value: '25 Tons', icon: Heart },
    { label: 'Avg. Savings', value: '$200', icon: Star }
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

  const nextClothingSlide = () => {
    setCurrentClothingSlide((prev) => Math.min(prev + 1, featuredClothing.length - 3));
  };

  const prevClothingSlide = () => {
    setCurrentClothingSlide((prev) => Math.max(prev - 1, 0));
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SwapStyle
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Browse
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Community
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-500 px-4 py-2 rounded-lg font-medium transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  Home
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  Browse
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  How It Works
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                  Community
                </a>
                <div className="pt-4 space-y-2">
                  <button className="w-full text-left px-3 py-2 text-blue-600 hover:text-blue-500 font-medium">
                    Login
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
        <img
          src={heroSlides[currentHeroSlide].image}
          alt={heroSlides[currentHeroSlide].title}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {heroSlides[currentHeroSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentHeroSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                {heroSlides[currentHeroSlide].cta1}
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/30 transition-all duration-200">
                {heroSlides[currentHeroSlide].cta2}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Navigation */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200 z-30"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200 z-30"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Hero Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Clothing Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Items
            </h2>
            <p className="text-xl text-gray-600">
              Discover amazing pieces from our community
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentClothingSlide * 33.333}%)` }}
              >
                {featuredClothing.map((item) => (
                  <div
                    key={item.id}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.condition}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>Size: {item.size}</span>
                          <span className="font-semibold text-blue-600">{item.swapValue}</span>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
                          Start Swap
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevClothingSlide}
              disabled={currentClothingSlide === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextClothingSlide}
              disabled={currentClothingSlide >= featuredClothing.length - 3}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Together, we're making fashion more sustainable
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real swappers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
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
      </section>
    </div>
  );
};

export default HomePage;