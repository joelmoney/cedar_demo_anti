import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { Check } from 'lucide-react';

interface Journey5Screen4Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen4({ reducedMotion = false, onNext }: Journey5Screen4Props) {
  return (
    <div className="h-full w-full flex flex-col bg-[#F5F7FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 py-8 pb-6">
          <div className="flex justify-center mb-6">
            <img
              src="/images/J5_contact_icon.png"
              alt="Contact"
              className="w-14 h-14"
            />
          </div>

          <h1 className="text-3xl font-bold text-[#1E293B] text-center mb-3">
            Review your contact information
          </h1>
          <p className="text-center text-[#475569] text-base mb-8 px-4">
            We need to know how to keep in touch so we can send you reminders and bill updates.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
            <h2 className="text-lg font-semibold text-[#1E293B] mb-4">
              Here's what we have on file:
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/J5_send-airplane-spot.png"
                    alt="Email"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#1E293B] mb-1">Email</p>
                      <p className="text-sm text-[#64748B]">p.sterling.exec@globalcorp.com</p>
                    </div>
                    <button className="text-[#4169E1] text-sm font-medium hover:text-[#3557C5] transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/J5_phone-message-spot.png"
                    alt="Mobile phone"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#1E293B] mb-1">Mobile phone</p>
                      <p className="text-sm text-[#64748B]">(212) 555-0112</p>
                    </div>
                    <button className="text-[#4169E1] text-sm font-medium hover:text-[#3557C5] transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/J5_phone-home-spot.png"
                    alt="Home phone"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#1E293B] mb-1">Home phone</p>
                      <p className="text-sm text-[#64748B]">(212) 555-4232</p>
                    </div>
                    <button className="text-[#4169E1] text-sm font-medium hover:text-[#3557C5] transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/J5_home-2-spot.png"
                    alt="Mailing address"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#1E293B] mb-1">Mailing address</p>
                      <p className="text-sm text-[#64748B]">725 5th Ave</p>
                      <p className="text-sm text-[#64748B]">New York, NY 10022</p>
                    </div>
                    <button className="text-[#4169E1] text-sm font-medium hover:text-[#3557C5] transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EFF6FF] rounded-xl p-4 mb-6 border border-[#DBEAFE]">
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 bg-[#4169E1] rounded flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1E293B] mb-1">
                  Receive mobile reminders
                </p>
                <p className="text-xs text-[#475569] leading-relaxed">
                  By selecting you consent to receive text messages and voicemails related to your medical and billing information. You can opt-out at any time.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-sm btnpulse mb-6"
          >
            Looks good
          </button>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
