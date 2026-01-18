const ContactPage = () => {  // Remove 'export const' and make it a regular const
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;  // Add this at the end