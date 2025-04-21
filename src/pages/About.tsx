
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section with improved contrast and visual hierarchy */}
      <section className="relative h-[60vh] flex items-center">
        <div className="hero-video-container">
          <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
            <source src="https://www.pexels.com/video/solar-panel-farm-use-for-energy-production-4324109/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay bg-gradient-to-r from-gray-900/95 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-in">
              <span className="inline-block text-primary bg-primary/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t('about.aboutUs')}
              </span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {t('about.title')} <span className="text-gradient">{t('about.sunrise')}</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl mt-4 mb-8 max-w-2xl">
                {t('about.subtitle')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview Section with improved structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="mb-6">
                  <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium">
                    {t('about.ourStory')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
                    {t('about.experienceTitle')}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.paragraph1')}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.paragraph2')}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.paragraph3')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-primary text-4xl font-bold mb-2">10+</div>
                  <div className="text-gray-800 font-medium">{t('about.years')}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-primary text-4xl font-bold mb-2">500+</div>
                  <div className="text-gray-800 font-medium">{t('about.projects')}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-primary text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-800 font-medium">{t('about.team')}</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="text-primary text-4xl font-bold mb-2">10k+</div>
                  <div className="text-gray-800 font-medium">{t('about.co2')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Values Section with improved visual hierarchy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium mb-3">
                {t('about.coreValues')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {t('about.visionValues')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
              <p className="max-w-3xl mx-auto text-gray-600 mt-6">
                {t('about.valuesSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about.ourVision')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('about.visionText1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.visionText2')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about.ourValues')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('about.excellence')}</h4>
                      <p className="text-gray-600">{t('about.excellenceDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('about.innovation')}</h4>
                      <p className="text-gray-600">{t('about.innovationDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('about.sustainability')}</h4>
                      <p className="text-gray-600">{t('about.sustainabilityDesc')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t('about.customer')}</h4>
                      <p className="text-gray-600">{t('about.customerDesc')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section with improved structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-primary border border-primary/20 bg-primary/5 px-4 py-1 rounded-full text-sm font-medium mb-3">
                {t('about.team')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {t('about.teamTitle')}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
              <p className="max-w-3xl mx-auto text-gray-600 mt-6">
                {t('about.teamSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Erin Xing</h3>
                  <p className="text-primary font-medium mb-3">{t('about.ceo')}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('about.ceoDesc')}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Umar Amin</h3>
                  <p className="text-primary font-medium mb-3">{t('about.operations')}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t('about.operationsDesc')}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section with improved UI */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/12d67846-e9f9-4992-a6dc-ba767c86f62e.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block text-primary bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t('about.joinUs')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t('about.ctaTitle')}
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('about.ctaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                  {t('about.contactCta')}
                </Link>
                <Link to="/projects" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-white/20">
                  {t('about.projectsCta')}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
