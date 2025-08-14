import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's the best time to visit Pakistan?",
    answer: "The best time to visit Pakistan depends on the region. For northern areas like Hunza and Skardu, May to October is ideal. For cultural cities like Lahore, October to March offers pleasant weather.",
  },
  {
    question: "Do I need a visa to visit Pakistan?",
    answer: "Yes, most visitors need a visa to enter Pakistan. The country offers e-visa facilities for many nationalities. We can assist you with the visa process and required documentation.",
  },
  {
    question: "Are your tours suitable for solo travelers?",
    answer: "Absolutely! Many of our tours are perfect for solo travelers. We ensure a welcoming environment and can arrange shared accommodations to help reduce costs.",
  },
  {
    question: "What's included in the tour package?",
    answer: "Our standard packages include accommodation, transportation, guided tours, and some meals. Specific inclusions vary by tour and are clearly listed in each tour's details.",
  },
  {
    question: "How safe is traveling in Pakistan?",
    answer: "Pakistan is generally safe for tourists, especially in popular destinations. We work with experienced guides and follow strict safety protocols. All our tours are conducted in secure areas with proper arrangements.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={false}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-left text-gray-900">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary" />
            )}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;