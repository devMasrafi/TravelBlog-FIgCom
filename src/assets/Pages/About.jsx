import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "With 10+ years in travel, Alex founded TravelBlog to share authentic adventures.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Maria Garcia",
      role: "Content Creator",
      bio: "Maria crafts stories and guides based on her global travels.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "David Lee",
      role: "Travel Consultant",
      bio: "David helps plan personalized trips for unforgettable experiences.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We share real, unfiltered travel experiences.",
    },
    {
      title: "Sustainability",
      description: "Promoting eco-friendly travel practices.",
    },
    { title: "Community", description: "Connecting travelers worldwide." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-500 to-blue-600 dark:from-green-700 dark:to-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About TravelBlog
          </h1>
          <p className="text-lg md:text-xl">
            Your trusted guide to exploring the world, one adventure at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          Founded in 2020, TravelBlog started as a passion project by a group of
          avid travelers who wanted to share their experiences beyond social
          media. What began as a simple blog has grown into a comprehensive
          travel agency, helping thousands discover hidden gems and create
          lifelong memories. We believe travel isn't just about
          destinations—it's about connection, growth, and storytelling.
        </p>
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop"
          alt="Travel team gathering"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            Our mission is to inspire and empower travelers to explore
            responsibly, fostering a global community of adventurers.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={`${member.name} profile`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-200">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose TravelBlog?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
              <p>Insider knowledge from destinations worldwide.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
              <p>Tailored trips to match your preferences and budget.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Trusted Reviews</h3>
              <p>Honest feedback from real travelers like you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Have questions? We're here to help plan your next adventure.
        </p>
        <a
          href="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2026 TravelBlog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
