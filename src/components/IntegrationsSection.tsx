export default function IntegrationsSection() {
  return (
    <section className="py-18 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-15 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect Your Favorite Tools</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Increase your productivity by connecting your favorite tools to ensure you can use more important key parts than ever before.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Check your own resources on Project and integrate seamlessly with your existing workflow.
            </p>
            <button className="text-white bg-blue cursor-pointer px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition">
              Explore Integrations
            </button>
          </div>

          <div className="md:w-1/2 grid grid-cols-3 gap-4">
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-github text-4xl"></i>
            </div>
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-slack text-4xl text-purple-600"></i>
            </div>
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-aws text-4xl text-orange-500"></i>
            </div>
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-google text-4xl text-blue-600"></i>
            </div>
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-microsoft text-4xl text-blue-500"></i>
            </div>
            <div className="tool-item bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center justify-center shadow-md">
              <i className="fab fa-docker text-4xl text-blue-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
