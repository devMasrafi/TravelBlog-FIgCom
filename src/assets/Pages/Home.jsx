import React, { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // search logic here or backend call
    alert(`Searching for: ${searchQuery}`);
  };

  const featuredDestinations = [
    {
      id: 1,
      title: "Bali Adventure",
      description:
        "Explore the stunning beaches and culture of Bali with our guided tours.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
      link: "/article/bali-adventure",
    },
    {
      id: 2,
      title: "Swiss Alps Hiking",
      description:
        "Experience breathtaking hikes in the Swiss Alps with expert guides.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      link: "/article/swiss-alps",
    },
    {
      id: 3,
      title: "Tokyo City Tour",
      description: "Dive into the vibrant culture and technology of Tokyo.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
      link: "/article/tokyo-tour",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      review: "Amazing experience! Highly recommend.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "The tours were well-organized and fun.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      review: "Great value for money and friendly staff.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white py-20 px-6">
        <div className="max-w-full mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore the world's most beautiful destinations with our
            expert-guided tours and travel tips.
          </p>
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8"
          >
            <input
              type="text"
              placeholder="Search destinations, tours, or tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-2 rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              Search
            </button>
          </form>
          <a
            href="/about"
            className="inline-block bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 transition"
          >
            Start Planning Your Trip
          </a>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {dest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dest.description}
                  </p>
                  <a
                    href={dest.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Choose Our Travel Agency?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Expert Guides
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced guides ensure a safe and memorable journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 dark:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Affordable Prices
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get the best deals on tours and accommodations without
                compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 dark:bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're here to help with any questions or issues during your
                trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-500 dark:text-yellow-400"
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Travel Tips
          </h2>
          <p className="mb-8">
            Subscribe to our newsletter for exclusive deals and destination
            guides.
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-96 px-4 py-2 rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
