import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { X, Plus } from 'lucide-react';

interface Journey4Screen4Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'kora';
  component?: 'bill-card' | 'button';
  data?: any;
}

export function Journey4Screen4({ reducedMotion = false, onNext }: Journey4Screen4Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const allMessages: ChatMessage[] = [
    {
      id: 1,
      text: "Why did my insurance not cover this?",
      sender: 'user'
    },
    {
      id: 2,
      text: "Hi Saffron,\n\nI'm Kora. I'm here to help you with your ABC Health bill. To keep your information safe, I need to check a few details first.\n\nWhat is your birthday and zip code?",
      sender: 'kora'
    },
    {
      id: 3,
      text: "02/14/1998 and 10034",
      sender: 'user'
    },
    {
      id: 4,
      text: "Thanks! I see your insurance was applied. You still have a balance because you have not met your deductible yet.\n\nWould you like me to show you what you owe for this visit?",
      sender: 'kora'
    },
    {
      id: 5,
      text: "Yes",
      sender: 'user'
    },
    {
      id: 6,
      text: "You have two bills from your visit with Dr. Brandy Thomas at ABC Health:",
      sender: 'kora'
    },
    {
      id: 7,
      text: "",
      sender: 'kora',
      component: 'bill-card',
      data: {
        bills: [
          {
            date: "Jul 1, 2025",
            provider: "Dr. Brandy Thomas -",
            location: "ABC Health Location",
            amount: "$656.61",
            dueDate: "Due Aug 5, 2025",
            description: "This is for the care you received from the doctor. Your insurance paid $769.39. The rest was applied to your deductible."
          },
          {
            date: "Jul 1, 2025",
            provider: "Emergency Center -ABC",
            location: "Health Location",
            amount: "$647.28",
            dueDate: "Due Aug 16, 2025",
            description: "This is for use of the Emergency Center, supplies, and medicine. Your insurance paid $769.39. The rest was applied to your deductible."
          }
        ]
      }
    },
    {
      id: 8,
      text: "I can't afford all of that right now",
      sender: 'user'
    },
    {
      id: 9,
      text: "I hear you. Medical bills can be stressful. We can help you find a way to pay that works for your budget.\n\nYou can make a smaller payment today or set up a monthly plan with no interest. Which would you like to do?",
      sender: 'kora'
    },
    {
      id: 10,
      text: "Sure, smaller payment",
      sender: 'user'
    },
    {
      id: 11,
      text: "Got it. Any amount you pay today will lower your total balance.",
      sender: 'kora'
    },
    {
      id: 12,
      text: "",
      sender: 'kora',
      component: 'button'
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const delays = [500, 800, 1500, 800, 1200, 800, 1000, 1500, 1000, 1200, 800, 600];

    const showNextMessage = () => {
      if (currentIndex < allMessages.length) {
        const message = allMessages[currentIndex];
        setMessages(prev => [...prev, message]);

        if (message.component === 'button') {
          setTimeout(() => {
            setShowButton(true);
          }, 400);
        }

        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
          }
        }, 100);

        currentIndex++;
        const nextDelay = delays[currentIndex] || 800;
        setTimeout(showNextMessage, nextDelay);
      }
    };

    const initialDelay = setTimeout(showNextMessage, 500);

    return () => clearTimeout(initialDelay);
  }, [reducedMotion]);

  return (
    <div className="h-full w-full bg-white flex flex-col relative">
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#4169E1] text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Bill Navigator
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 pb-20 scrollbar-hide"
      >
        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.component === 'bill-card' ? (
                <div className="max-w-[85%] space-y-3">
                  {message.data.bills.map((bill: any, billIndex: number) => (
                    <div key={billIndex} className="bg-[#F8F9FA] rounded-2xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="text-sm font-bold text-[#1E293B] mb-0.5">{bill.date}</div>
                          <div className="text-xs text-[#64748B]">
                            {bill.provider}<br />
                            {bill.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#1E293B]">{bill.amount}</div>
                          <div className="text-xs text-[#64748B]">{bill.dueDate}</div>
                        </div>
                      </div>
                      <div className="text-xs text-[#475569] leading-relaxed mt-3 pt-3 border-t border-gray-200">
                        {bill.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : message.component === 'button' ? (
                <div className="w-full">
                  {showButton && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="space-y-3 mt-4"
                    >
                      <div className="text-center">
                        <div className="text-sm text-[#64748B] mb-1">Total due for 2 bills</div>
                        <div className="text-3xl font-bold text-[#1E293B]">$1,303.89</div>
                      </div>

                      <button
                        onClick={onNext}
                        className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
                      >
                        Make a partial payment
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#E3F2FD] text-[#1E293B]'
                      : 'bg-[#F5F5F5] text-[#1E293B]'
                  }`}
                >
                  <p className="text-[15px] leading-[1.4] whitespace-pre-line">{message.text}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button className="w-full flex items-center justify-center gap-2 text-[#4169E1] font-medium text-sm py-3 hover:bg-gray-50 rounded-xl transition-colors border border-gray-200">
          <Plus className="w-4 h-4" />
          Ask me about your bill...
        </button>
      </div>
    </div>
  );
}
