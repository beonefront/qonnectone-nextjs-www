import { AlertTriangle, X, CheckCircle, Check } from 'lucide-react';
import FadeIn from './animations/FadeIn';

export default function ProblemComparisonSection() {
  return (
    <section id="problem-comparison" className="bg-gray-50">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center space-y-4 pb-12 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              BŁYSKAWICZNA AKCEPTACJA PROCESÓW
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Problemy i brak popularnych metod ich rozwiązania
            </h3>
          </div>
        </FadeIn>

        {/* Main Comparison Section */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-12">
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Problems Column */}
            <FadeIn direction="left">
              <div className="p-8 bg-red-50 border-r border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-red-800">PROBLEMY</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Rygorystyczne obowiązki regulacyjne</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Brak wymaganych licencji</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Brak popularnych metod płatności</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Ręczna obsługa klientów</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Wysokie koszty rozbudowy systemu IT</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Wdrożenie systemu trwa nawet 18 miesięcy</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Konkurencja ze strony gigantów</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Brak przestrzeni na dynamiczny rozwój</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-sm leading-relaxed">Utrata potencjalnych klientów</span>
                </li>
              </ul>
              </div>
            </FadeIn>

            {/* Solutions Column */}
            <FadeIn direction="right">
              <div className="p-8 bg-green-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800">ROZWIĄZANIE</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Spełnienie wymogi prawnych</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Korzystanie z licencji partnerów</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Jednoczesna integracja wielu systemów płatniczych</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Automatyzacja obsługi klientów</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Niskie koszty operacyjne przy pełnym wsparciu technicznym</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Wdrożenie trwa 2-3 miesiące</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Znacznie większa konkurencyjność</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Skalowalność i rozwój</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-green-700 text-sm leading-relaxed">Większe przychody</span>
                </li>
              </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Call to Action */}
        <FadeIn>
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Zajmujemy się tym, co dla Ciebie jest przeszkodą
              </h4>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                – utrzymaniem systemów, formalnościami licencyjnymi, integracją IT oraz technicznym wsparciem rozwoju Twojego biznesu.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
