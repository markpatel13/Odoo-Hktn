"use client"
import React, { useState } from 'react';
import { Search, Upload, Camera, Heart, Star, ArrowLeft, MapPin, User, Clock, Tag, Share2, MessageCircle, AlertCircle, Check, X } from 'lucide-react';
import Link from 'next/link';

const ProductDetailPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    color: '',
    brand: '',
    tags: ''
  });

  // Sample product data
  const currentProduct = {
    id: 1,
    name: 'Vintage Denim Jacket',
    description: 'A beautiful vintage denim jacket in excellent condition. Perfect for casual outings or layering. Features classic button closure, chest pockets, and a timeless design that never goes out of style.',
    points: 25,
    condition: 'Like New',
    size: 'M',
    color: 'Blue',
    brand: 'Levi\'s',
    category: 'Jackets',
    type: 'Outerwear',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop'
    ],
    uploader: {
      name: 'Sarah Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b602?w=100&h=100&fit=crop',
      rating: 4.9,
      location: 'San Francisco, CA',
      joinDate: 'March 2023',
      totalSwaps: 23
    },
    availability: 'Available',
    tags: ['vintage', 'denim', 'classic', 'casual'],
    listedDate: '2 days ago'
  };

  // Previous listings data
  const previousListings = [
    {
      id: 1,
      title: 'Summer Floral Dress',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop',
      status: 'Swapped',
      points: 30,
      date: '1 week ago'
    },
    {
      id: 2,
      title: 'Leather Ankle Boots',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop',
      status: 'Available',
      points: 40,
      date: '3 days ago'
    },
    {
      id: 3,
      title: 'Cotton Sweater',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop',
      status: 'Pending',
      points: 22,
      date: '5 days ago'
    },
    {
      id: 4,
      title: 'Designer Handbag',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      status: 'Swapped',
      points: 35,
      date: '2 weeks ago'
    }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
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

  const StatusBadge = ({ status }: { status: 'Available' | 'Swapped' | 'Pending' }) => {
    const colors = {
      Available: 'bg-green-100 text-green-800',
      Swapped: 'bg-blue-100 text-blue-800',
      Pending: 'bg-yellow-100 text-yellow-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
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
              <button className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
<Link href="/dashboard" className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors inline-block">
  <ArrowLeft className="h-5 w-5 text-gray-600" />
</Link>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                {isAddingItem ? 'Add New Item' : 'Item Details'}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAddingItem(!isAddingItem)}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200"
              >
                {isAddingItem ? 'View Items' : 'Add Item'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
            placeholder="Search for items, brands, categories..."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {isAddingItem ? (
          /* Add Item Form */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Images</h2>
                
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload images or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </label>
                </div>

                {/* Selected Images */}
                {selectedImages.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Images</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={`Selected ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h2>
                
                <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., Vintage Denim Jacket"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe the item, its condition, and any special features..."
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="tops">Tops</option>
                    <option value="dresses">Dresses</option>
                    <option value="pants">Pants</option>
                    <option value="jackets">Jackets</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Outerwear, Casual"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size *
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition *
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="Like New">Like New</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Blue, Red, Black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Nike, Zara, H&M"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., vintage, casual, summer (separate with commas)"
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
              >
                List Item
              </button>
            </div>
          </div>
        </div>
        </div>
      ) : (
          /* Product Detail View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="relative">
                  <img
                    src={currentProduct.images[currentImageIndex]}
                    alt={currentProduct.name}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`absolute top-4 right-4 p-2 rounded-full shadow-lg transition-all duration-200 ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Image Thumbnails */}
                <div className="flex space-x-3 mt-4">
                  {currentProduct.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex ? 'border-green-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${currentProduct.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentProduct.name}</h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {currentProduct.listedDate}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {currentProduct.uploader.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {currentProduct.points} Points
                    </div>
                    <StatusBadge status={currentProduct.availability as "Available" | "Swapped" | "Pending"} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Size:</span>
                    <span className="ml-2 text-sm text-gray-900">{currentProduct.size}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Condition:</span>
                    <span className="ml-2 text-sm text-gray-900">{currentProduct.condition}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Color:</span>
                    <span className="ml-2 text-sm text-gray-900">{currentProduct.color}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Brand:</span>
                    <span className="ml-2 text-sm text-gray-900">{currentProduct.brand}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{currentProduct.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105">
                    Request Swap
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
                    Redeem with Points
                  </button>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                  <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Message
                  </button>
                </div>
              </div>

              {/* Uploader Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Listed by</h3>
                <div className="flex items-center">
                  <img
                    src={currentProduct.uploader.avatar}
                    alt={currentProduct.uploader.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{currentProduct.uploader.name}</h4>
                    <StarRating rating={currentProduct.uploader.rating} />
                    <p className="text-sm text-gray-600">
                      {currentProduct.uploader.totalSwaps} successful swaps • Joined {currentProduct.uploader.joinDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Previous Listings Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Previous Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previousListings.map((listing) => (
                <div
                  key={listing.id}
                  className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <StatusBadge status={listing.status as "Available" | "Swapped" | "Pending"} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">{listing.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium">{listing.points} pts</span>
                      <span className="text-xs text-gray-500">{listing.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;