import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      q: 'How does this posture corrector work?',
      a: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
    },
    {
      q: 'Is it suitable for all ages and body types?',
      a: "Yes, it's designed to be adjustable and suitable for most ages and body types.",
    },
    {
      q: 'Does it really help with back pain and posture improvement?',
      a: 'Consistent use can help reduce back pain and improve posture over time.',
    },
    {
      q: 'Does it have smart features like vibration alerts?',
      a: 'Some models include vibration reminders to help you maintain better posture.',
    },
    {
      q: 'How will I be notified when the product is back in stock?',
      a: "You can sign up for email or SMS alerts to get notified once it's available.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1064px] mx-auto pb-20">
      <h2 className="text-center text-3xl font-bold mb-3 text-secondary">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-center text-[#0F3F46] mb-10 max-w-xl mx-auto">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="rounded-xl overflow-hidden shadow-sm">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(idx)}
                className={`w-full flex justify-between text-secondary items-center p-4 transition
                  ${
                    isOpen ? 'bg-[#e6f2f3] border border-[#e6f2f3]' : 'bg-white'
                  }
                `}
              >
                <span className="font-medium text-left">{item.q}</span>
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
              </button>

              {/* Divider Line Under Question */}
              <div className="w-full h-px bg-[#c0c0c0]"></div>

              {/* Answer */}
              {isOpen && (
                <div className="p-4 bg-[#e6f2f3] text-[#0F3F46] leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8 flex justify-center items-center">
        <button className="px-6 py-2 rounded-full text-base font-semibold bg-primary text-[#244D20]">
          See More FAQ’s
        </button>
        <div className="p-2 bg-[#0a2e36] text-[#acc857] rounded-full flex items-center justify-center shadow-lg">
          <FaArrowUp className="w-4 h-4 md:w-5 md:h-5 rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
