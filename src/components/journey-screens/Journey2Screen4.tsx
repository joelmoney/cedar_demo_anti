import { motion } from 'framer-motion';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronLeft, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Journey2Screen4Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey2Screen4({ reducedMotion = false, onNext }: Journey2Screen4Props) {
  const [formData, setFormData] = useState({
    contactDate: '',
    referenceNumber: '',
    personName: '',
    insuranceCompany: '',
    memberId: '',
    groupNumber: '',
    policyHolder: ''
  });

  useEffect(() => {
    const typeFormData = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));

      const fields = [
        { key: 'contactDate', value: '01/15/2025' },
        { key: 'referenceNumber', value: 'REF-789456' },
        { key: 'personName', value: 'Sarah Johnson' },
        { key: 'insuranceCompany', value: 'Medicare' },
        { key: 'memberId', value: '1234-567-8901' },
        { key: 'groupNumber', value: 'GRP-45678' },
        { key: 'policyHolder', value: 'Sam Anderson' }
      ];

      for (const field of fields) {
        const chars = field.value.split('');
        for (let i = 0; i <= chars.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 50));
          setFormData(prev => ({
            ...prev,
            [field.key]: chars.slice(0, i).join('')
          }));
        }
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    };

    typeFormData();
  }, []);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-6 pb-6">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-6"
          >
            <button className="flex items-center gap-2 text-[#64748B] text-sm hover:text-[#475569] transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-6 text-center">
                Tell us about the call you had with Blue Star Insurance
              </h1>

              <div className="space-y-6">
                <div>
                  <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                    What date did you contact them?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.contactDate}
                      onChange={(e) => setFormData({...formData, contactDate: e.target.value})}
                      className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                      placeholder=""
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                    Reference number(s) <span className="text-[#94A3B8] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.referenceNumber}
                    onChange={(e) => setFormData({...formData, referenceNumber: e.target.value})}
                    className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                    Name of the person you talked to <span className="text-[#94A3B8] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.personName}
                    onChange={(e) => setFormData({...formData, personName: e.target.value})}
                    className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <h2 className="text-[#1E293B] text-lg font-bold mb-4">
                    Do you have another insurance that may be responsible for this bill? Please enter their details below.
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                        Name of insurance company
                      </label>
                      <input
                        type="text"
                        value={formData.insuranceCompany}
                        onChange={(e) => setFormData({...formData, insuranceCompany: e.target.value})}
                        className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                        Member ID number
                      </label>
                      <input
                        type="text"
                        value={formData.memberId}
                        onChange={(e) => setFormData({...formData, memberId: e.target.value})}
                        className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                      />
                      <p className="text-[#64748B] text-xs mt-2">
                        If you're entering an additional insurance, we'll need this information to verify your plan.
                      </p>
                    </div>

                    <div>
                      <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                        Group number <span className="text-[#94A3B8] font-normal">(if available)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.groupNumber}
                        onChange={(e) => setFormData({...formData, groupNumber: e.target.value})}
                        className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#1E293B] text-sm font-semibold mb-2">
                        Name of policy holder
                      </label>
                      <input
                        type="text"
                        value={formData.policyHolder}
                        onChange={(e) => setFormData({...formData, policyHolder: e.target.value})}
                        className="w-full px-4 py-3 text-base border-2 border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#4169E1] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={onNext}
                  className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse mt-6"
                >
                  Submit update
                </button>
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
