import React, { useRef, memo, Suspense } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Printer, Download } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { useCVActions } from './cv-print-utils';

// Lazy load sections
const PersonalSection = React.lazy(() => import('./Sections/PersonalSection'));
const ExperienceSection = React.lazy(() => import('./Sections/ExperienceSection'));
const EducationSection = React.lazy(() => import('./Sections/EducationSection'));
const SkillsSection = React.lazy(() => import('./Sections/SkillsSection'));
const LanguagesSection = React.lazy(() => import('./Sections/LanguageSection'));

const SectionLoader = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

const Preview = memo(({ data }) => {
  const { language } = useLanguage();
  const contentRef = useRef(null);
  const { handlePrint, handleDownload } = useCVActions();

  const onDownload = () => {
    handleDownload(contentRef, `CV-${Date.now()}.pdf`);
  };

  return (
    <div className="space-y-6">
      <Toaster 
        position="top-right"
        toastOptions={{
          className: 'print:hidden'
        }}
      />
      
      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-xl font-semibold">
          {language === 'bn' ? 'সিভি প্রিভিউ' : 'CV Preview'}
        </h2>
        <div className="flex gap-3">
          <button 
            onClick={handlePrint} 
            className="flex items-center px-4 py-2 text-teal-600 border border-teal-600 rounded-md 
                     hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 
                     focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={language === 'bn' ? 'প্রিন্ট সিভি' : 'Print CV'}
          >
            <Printer className="w-5 h-5 mr-2" />
            {language === 'bn' ? 'প্রিন্ট' : 'Print'}
          </button>
          <button 
            onClick={onDownload} 
            className="flex items-center px-4 py-2 text-white bg-teal-600 rounded-md 
                     hover:bg-teal-700 transition-colors duration-200 focus:outline-none 
                     focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 
                     disabled:cursor-not-allowed"
            aria-label={language === 'bn' ? 'ডাউনলোড সিভি' : 'Download CV'}
          >
            <Download className="w-5 h-5 mr-2" />
            {language === 'bn' ? 'ডাউনলোড' : 'Download'}
          </button>
        </div>
      </div>

      <div 
        ref={contentRef}
        className="cv-container bg-white p-8 rounded-lg shadow-lg print:shadow-none 
                   transition-shadow duration-200 max-w-[210mm] mx-auto"
      >
        <Suspense fallback={<SectionLoader />}>
          <div className="no-break">
            <PersonalSection data={data.personal} />
          </div>
          <div className="no-break">
            <ExperienceSection data={data.experience} />
          </div>
          <div className="no-break">
            <EducationSection data={data.education} />
          </div>
          <div className="no-break">
            <SkillsSection data={data.skills} />
          </div>
          <div className="no-break">
            <LanguagesSection data={data.languages} />
          </div>
        </Suspense>
      </div>
    </div>
  );
});

Preview.displayName = 'Preview';

export default Preview;