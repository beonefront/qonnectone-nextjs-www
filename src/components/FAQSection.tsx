import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

export default function FAQSection() {
  const t = useTranslations('faq');

  return (
    <section id="faq">
      <div>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <FadeIn>
            <div className="text-center space-y-4 pb-12 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">{t('title')}</h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">{t('subtitle')}</h3>
            </div>
          </FadeIn>

          <StaggerContainer className="max-w-4xl mx-auto space-y-8">
            {/* Question 1 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t('q1.question')}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('q1.answer')}
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t('q2.question')}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('q2.answer')}
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {t('q3.question')}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t('q3.answer')}
                </p>
              </div>
            </div>
          </StaggerContainer>

          {/* Case Studies Section */}
          <FadeIn>
            <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                {t.rich('caseStudies.text', {
                  b: (chunk) => <b>{chunk}</b>
                })}
              </p>
              <Link href="/business-cases">
                <button className="rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 text-background cursor-pointer">
                  {t('caseStudies.button')}
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

