import React from "react";

// Import the PDF
import ShaktiF from "../assets/Blog1.pdf";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tech Manthana <span className="text-blue-600">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Tech Manthana Blog — a space where we share insights,
            ideas, stories, and updates from our upskilling and outsourcing initiatives.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Featured Articles
          </h2>
          
          <div className="grid gap-6">
            {/* Blog Card */}
            <div className="group bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                      New
                    </span>
                    <span className="text-blue-100 text-sm">PDF Download</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    Shakti: The Journey of Empowerment
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Explore the transformative journey of empowerment through technology 
                    and skill development initiatives.
                  </p>
                </div>
                <button
                  onClick={() => window.open(ShaktiF, "_blank")}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Read PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              More Articles Coming Soon!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're working on more insightful content to help you stay updated 
              with the latest in tech and skill development.
            </p>
          </div>
        </div>

        {/* Newsletter Signup (Optional Addition) */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-purple-100 mb-6">
              Get notified when new articles are published
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;