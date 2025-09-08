export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">500M+</div>
            <h3 className="text-xl font-semibold mb-2">Żądań API</h3>
            <p className="text-gray-600 dark:text-gray-300">Przetwarzanych miesięcznie przez naszą platformę</p>
          </div>
          <div className="p-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">200</div>
            <h3 className="text-xl font-semibold mb-2">Aktywnych usług</h3>
            <p className="text-gray-600 dark:text-gray-300">dostępnych przez API</p>
          </div>
          <div className="p-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">99.9%</div>
            <h3 className="text-xl font-semibold mb-2">Dostępność</h3>
            <p className="text-gray-600 dark:text-gray-300">Niezawodna usługa, na którą możesz liczyć</p>
          </div>
        </div>
      </div>
    </section>
  );
}
