import { useState } from 'react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Journey5Screen19Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen19({ reducedMotion = false, onNext }: Journey5Screen19Props) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Which bills will be covered?',
      answer: 'Financial aid can cover various medical bills including hospital stays, procedures, and doctor visits.'
    },
    {
      question: 'Who is eligible?',
      answer: 'Eligibility is based on income, family size, and other factors. We\'ll help determine if you qualify.'
    },
    {
      question: 'What types of financial aid can I get?',
      answer: 'There are several types of financial aid available including Medicaid, charity care, and payment assistance programs.'
    },
    {
      question: 'How will my information be used?',
      answer: 'Your information is kept confidential and used only to process your financial aid application.'
    },
    {
      question: 'Who is Fortuna?',
      answer: 'Fortuna is our trusted partner that helps process and manage financial aid applications securely.'
    },
    {
      question: 'What are financial counselors?',
      answer: 'Financial counselors are trained professionals who can help guide you through the process.'
    },
    {
      question: 'What are my other options?',
      answer: 'Other options may include payment plans, charity care, or government assistance programs.'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col bg-slate-50">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="/images/J5_19_illustration.png"
                alt="Financial aid"
                width="130"
                height="130"
                className="object-contain"
              />
            </div>
            <h1 className="text-[28px] font-bold text-slate-900 mb-3 leading-tight">
              Your financial aid
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 mb-8 border-l-4 border-emerald-500">
            <div className="mb-3">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Medicaid</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Preston Sterling</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6 11L13 4" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium text-emerald-700">Approved</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Congrats, your Medicaid application was approved! There's nothing else for you to do, we'll take care of the rest.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/images/J5_19_illustration2.png"
                alt="Why are we doing this"
                width="146"
                height="130"
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 text-center">
              Why are we doing this?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed text-center">
              There is no catch to this free service. At ABC Health, we believe in making healthcare affordable and accessible. The best way to make care affordable and for us to close out the bill is through financial aid.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
            <div className="bg-white rounded-xl shadow-sm divide-y divide-slate-100 overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp size={20} className="text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
