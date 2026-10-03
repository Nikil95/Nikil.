import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website',
    budget: '₹2,000 – ₹5,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'nikilg782@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-900 bg-zinc-950/70">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Narrative & Quick Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Let's talk about your project.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                Have a new project, need a frontend bug fixed, or want to discuss a custom web application? Fill out the form or reach out directly.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#111116] border border-zinc-800/90 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Email Me</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm font-semibold text-white hover:underline font-mono"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://www.behance.net/gnikil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111116] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 text-zinc-300 group-hover:text-white font-bold text-xs">
                    Bē
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400">Design</p>
                    <p className="text-xs font-semibold text-white flex items-center gap-1">
                      Behance <span className="text-[10px] text-zinc-400">→</span>
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Nikil95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111116] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600">
                    <Github className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400">Code</p>
                    <p className="text-xs font-semibold text-white flex items-center gap-1">
                      GitHub <span className="text-[10px] text-zinc-400">→</span>
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nikil-g-4b3a73288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111116] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600">
                    <Linkedin className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400">Network</p>
                    <p className="text-xs font-semibold text-white flex items-center gap-1">
                      LinkedIn <span className="text-[10px] text-zinc-400">→</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Note */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-400 leading-relaxed">
              <span className="text-white font-medium">Fast responses:</span> Typically replies within 2–6 hours during IST working hours. No agencies or sales managers — you work directly with me.
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111115] border border-zinc-800 p-7 sm:p-9 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out! I'll review your details and send a preliminary scope & response shortly to <strong className="text-zinc-200">{formData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'Website',
                          budget: '₹2,000 – ₹5,000',
                          message: '',
                        });
                      }}
                      className="text-xs font-mono text-zinc-400 hover:text-white underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium text-zinc-300">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-type" className="text-xs font-medium text-zinc-300">
                        Project Type
                      </label>
                      <select
                        id="contact-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      >
                        <option value="Website">Starter / Business Website</option>
                        <option value="Web Application">Custom Web Application</option>
                        <option value="Mobile Application">Mobile Application (Flutter)</option>
                        <option value="UI Design">UI / Figma Design</option>
                        <option value="Website Fix">Quick Website / App Fix</option>
                        <option value="Monthly Retainer">Monthly Support</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-budget" className="text-xs font-medium text-zinc-300">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      >
                        <option value="Under ₹2,000">Under ₹2,000 (Quick Fix)</option>
                        <option value="₹2,000 – ₹5,000">₹2,000 – ₹5,000 (Starter)</option>
                        <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000 (Business Site)</option>
                        <option value="₹15,000+">₹15,000+ (Full Web App)</option>
                        <option value="Flexible / Let's Discuss">Flexible / Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium text-zinc-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Briefly describe what you want to build, any reference sites, or deadlines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-900/90 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200 disabled:opacity-50 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
