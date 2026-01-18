import React from "react";

const Article = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      description:
        "Bali offers stunning beaches, vibrant culture, and lush landscapes. From surfing in Uluwatu to exploring rice terraces in Ubud, it's a paradise for adventurers and relaxation seekers.",
      highlights: ["Beaches", "Temples", "Volcano hikes", "Yoga retreats"],
      tips: "Visit during the dry season (April-October) for the best weather.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Swiss Alps, Switzerland",
      description:
        "The Swiss Alps are a hiker's dream with breathtaking peaks, crystal-clear lakes, and charming villages. Perfect for skiing in winter or trekking in summer.",
      highlights: [
        "Mountain views",
        "Cable cars",
        "Cheese factories",
        "Lake Geneva",
      ],
      tips: "Pack layers—weather changes quickly at high altitudes.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      description:
        "Tokyo blends ancient traditions with cutting-edge technology. From neon-lit Shibuya to serene temples, it's a city of contrasts and endless exploration.",
      highlights: [
        "Skyscrapers",
        "Street food",
        "Cherry blossoms",
        "Tech districts",
      ],
      tips: "Use the efficient subway system and try local ramen for an authentic experience.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop",
    },
  ];

  const userExperiences = [
    {
      name: "Sarah K.",
      location: "Bali",
      rating: 5,
      quote: 'Bali was magical! The beaches were pristine, and our guide helped us discover hidden gems. I\'ll never forget the sunrise yoga session.',
      image: 'https://picsum.photos/100/100?random=1',
    },
    {
      name: 'Mike T.',
      location: 'Swiss Alps',
      rating: 5,
      quote: 'Hiking the Alps was life-changing. The views were epic, and the local cheese was to die for. Highly recommend for nature lovers!',
      image: 'https://picsum.photos/100/100?random=2',
    },
    {
      name: 'Aiko L.',
      location: 'Tokyo',
      rating: 4,
      quote: 'Tokyo\'s energy is unmatched. From Akihabara to Tsukiji Market, every day was an adventure. Just wish I had more time!',
      image: 'https://picsum.photos/100/100?random=3',
    },
  ];

  const handleShare = () => {
    // Placeholder: Implement share functionality
    navigator.clipboard.writeText(window.location.href);
    alert('Article link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Top Travel Destinations: Adventures Await
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By TravelBlog Team | Published on January 17, 2026
          </p>
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=300&fit=crop"
            alt="Travel destinations collage"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Traveling opens doors to new cultures, breathtaking landscapes, and unforgettable memories. In this article, we explore three must-visit destinations—Bali, the Swiss Alps, and Tokyo—based on feedback from our community of travelers. Discover what makes these places special and hear directly from users who've experienced them firsthand.
        </p>
      </section>

      {/* Destinations */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Explore the Destinations</h2>
        {destinations.map((dest) => (
          <div key={dest.id} className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={dest.image} alt={dest.name} className="w-full h-48 md:h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{dest.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{dest.description}</p>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Highlights:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                {dest.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <p className="text-gray-600 dark:text-gray-300 italic">Tip: {dest.tips}</p>
            </div>
          </div>
        ))}
      </section>

      {/* User Experiences */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Real Traveler Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userExperiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={exp.image} alt={exp.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{exp.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Visited {exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(exp.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 dark:text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{exp.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to Plan Your Trip?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get personalized recommendations and book your adventure today.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/home"
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Explore More Destinations
          </a>
          <button
            onClick={handleShare}
            className="bg-gray-600 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-800 transition"
          >
            Share This Article
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 dark:text-gray-500">&copy; 2026 TravelBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Article;