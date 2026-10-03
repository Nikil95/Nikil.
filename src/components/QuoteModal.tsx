import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceType,
}) => {
  const [need, setNeed] = useState<string>('Website');
  const [details, setDetails] = useState('');
  const [budget, setBudget] = useState('₹2,000 – ₹5,000');
  const [deadline, setDeadline] = useState('Within 2 weeks');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceType) {
      if (initialServiceType.includes('Flutter') || initialServiceType.includes('Mobile')) {
        setNeed('Mobile App (Flutter)');
      } else if (initialServiceType.includes('Starter') || initialServiceType.includes('Business') || initialServiceType === 'Website') {
        setNeed('Website');
      } else if (initialServiceType.includes('Application') || initialServiceType.includes('Custom')) {
        setNeed('Web Application');
      } else if (initialServiceType.includes('UI')) {
        setNeed('UI Design');
      } else if (initialServiceType.includes('Fix')) {
        setNeed('Website Fix');
      } else {
        setNeed('Other');
      }
    }
  }, [initialServiceType, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setDetails('');
    setName('');
    setEmail('');
    onClose();
  };

  const needOptions = [
    'Website',
    'Web Application',
    'Mobile App (Flutter)',
    'UI Design',
    'Website Fix',
    'Other',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#121217] border border-zinc-800 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Request Sent
            </h3>
            <p className="text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thanks! I'll review your requirements and get back to you.
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              Sent to: {email}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-1">
                Direct Project Inquiry
              </span>
              <h3 id="modal-headline" className="text-2xl font-bold text-white tracking-tight">
                Request a Quote
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tell me what you're building and let's scope out realistic timelines and costs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* What do you need? */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300 block">
                  What do you need? *
                </label>
                <div className="flex flex-wrap gap-2">
                  {needOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setNeed(opt)}
                      className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition-all ${
                        need === opt
                          ? 'bg-white text-black border-white shadow-sm'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tell me about your project */}
              <div className="space-y-1.5">
                <label htmlFor="quote-details" className="text-xs font-medium text-zinc-300 block">
                  Tell me about your project *
                </label>
                <textarea
                  id="quote-details"
                  required
                  rows={3}
                  placeholder="Goals, target users, core pages, design references, or any specific requirements..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none"
                />
              </div>

              {/* Budget and Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="quote-budget" className="text-xs font-medium text-zinc-300 block">
                    Estimated budget
                  </label>
                  <select
                    id="quote-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option value="From ₹500 (Quick Fix)">From ₹500 (Quick Fix)</option>
                    <option value="₹2,000 – ₹5,000 (Starter)">₹2,000 – ₹5,000 (Starter)</option>
                    <option value="₹5,000 – ₹15,000 (Business)">₹5,000 – ₹15,000 (Business)</option>
                    <option value="₹15,000+ (Custom Application)">₹15,000+ (Custom Application)</option>
                    <option value="Monthly Retainer">Monthly Retainer</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-deadline" className="text-xs font-medium text-zinc-300 block">
                    Preferred deadline
                  </label>
                  <select
                    id="quote-deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  >
                    <option value="ASAP (within 48 hours)">ASAP (within 48 hours)</option>
                    <option value="Within 1 week">Within 1 week</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Flexible / 1 month+">Flexible / 1 month+</option>
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="quote-name" className="text-xs font-medium text-zinc-300 block">
                    Name *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-email" className="text-xs font-medium text-zinc-300 block">
                    Email *
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200 shadow-md"
                >
                  {isSubmitting ? (
                    <span>Submitting project details...</span>
                  ) : (
                    <>
                      <span>Send Project Details</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
