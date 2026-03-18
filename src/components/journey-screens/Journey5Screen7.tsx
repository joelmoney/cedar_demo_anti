import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Journey5Screen7Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen7({ reducedMotion = false, onNext }: Journey5Screen7Props) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { question: 'Which bills will be covered?', answer: 'Financial aid can cover past and future medical bills from ABC Health. This includes hospital stays, procedures, doctor visits, and other healthcare services provided by our network.' },
    { question: 'Who is eligible?', answer: 'Eligibility is based on your household income, family size, and financial situation. We work with you to determine if you qualify for full or partial financial assistance.' },
    { question: 'What types of financial aid can I get?', answer: 'We offer various types of financial aid including full bill forgiveness, discounted payment plans, and charity care programs based on your financial situation.' },
    { question: 'How will my information be used?', answer: 'Your information is kept confidential and secure. We only use it to determine your eligibility for financial assistance and to process your application.' },
    { question: 'Who is Fortuna?', answer: 'Fortuna is our trusted partner who helps process financial aid applications. They specialize in connecting patients with available assistance programs.' },
    { question: 'What are financial counselors?', answer: 'Financial counselors are trained professionals who can guide you through the application process, answer questions, and help you understand your options.' },
    { question: 'What are my other options?', answer: 'Besides financial aid, you can explore payment plans, negotiate your bill, or work with our billing department to find a solution that works for your budget.' }
  ];

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F7FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 py-8 pb-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1E293B] mb-4">
              Get medical financial aid for free
            </h1>
            <p className="text-base text-[#475569] mb-6 leading-relaxed">
              As a patient of ABC Health, this is a complimentary service offered to you. We help you find suitable options to get rid of or lower past and future medical bills so you can focus on your and your family's health.
            </p>
            <button
              onClick={onNext}
              className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-sm btnpulse mb-6"
            >
              Get started
            </button>
            <p className="text-xs text-[#64748B] leading-relaxed mb-4">
              By clicking on Get started above, you allow ABC Health to share information with a third party, Fortuna, by email, phone, or text, per the information you provided to us.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#64748B]">
              <img src="/images/lock.png" alt="Lock" className="w-4 h-4 flex-shrink-0" />
              <span>Your info is secure</span>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img
              src="/images/j5_7_illustration.png"
              alt="Financial aid illustration"
              className="w-[311px] h-[243px] object-contain"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-8">
              How it works
            </h2>

            <div className="space-y-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/J5_compass-spot.png"
                  alt="Compass icon"
                  className="w-14 h-14 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                  Find the right type of help
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We will look through available financial aid options to make sure you and your family are covered. We do the heavy lifting by getting everything ready and submitted.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/J5_hourglass_icon.png"
                  alt="Hourglass icon"
                  className="w-14 h-14 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                  Save time by applying online
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We streamlined the application process so you can answer the questions in your own time. If you get stuck, you can call, email, or text our financial counselors.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src="/images/J5_heart-hands-spot.png"
                  alt="Heart hands icon"
                  className="w-14 h-14 mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                  Focus on your recovery, not the bills
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Imagine paying $0 dollars or reduced out-of-pocket expenses for past and future care. This aid can also cover dental and vision costs.
                </p>
              </div>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-sm btnpulse"
            >
              Get started
            </button>
          </div>

          <div className="mb-12">
            <div className="mb-6 flex justify-center">
              <img
                src="/images/j5_7_illustration2.png"
                alt="Why we're doing this illustration"
                className="w-[146px] h-[129px] object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1E293B] text-center mb-4">
              Why are we doing this?
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed text-center px-2">
              There is no catch to this free service. At ABC Health, we believe in making healthcare affordable and accessible. That includes making sure you care affordable and for us to close out the bill is through financial aid.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1E293B]">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#64748B] flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-[#475569] leading-relaxed">{faq.answer}</p>
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
