import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Wrench, Sparkles } from 'lucide-react';
import { PRICING_TIERS, QUICK_FIX_ITEMS, MONTHLY_SUPPORT_FEATURES } from '../data/portfolioData';
import { PricingTier } from '../types/portfolio';

interface PricingProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenQuote }) => {
  const [billingMode, setBillingMode] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <section id="pricing" className="py-24 relative border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-zinc-400 font-normal">
            Choose what you need.
          </p>
          <p className="text-xs text-zinc-500 font-medium">
            Starting from — final price depends on project scope.
          </p>

          {/* Pricing Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={billingMode === 'one-time'}
                onClick={() => setBillingMode('one-time')}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  billingMode === 'one-time'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                One-time project
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={billingMode === 'monthly'}
                onClick={() => setBillingMode('monthly')}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  billingMode === 'monthly'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Monthly support
              </button>
            </div>
          </div>
        </div>

        {billingMode === 'one-time' ? (
          /* Main Pricing Tiers Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-[#131318] border-2 border-zinc-500/80 shadow-2xl shadow-black/80 hover:-translate-y-1.5 hover:border-zinc-400'
                    : 'bg-[#101014] border border-zinc-800/80 hover:-translate-y-1 hover:border-zinc-600/80'
                }`}
              >
                {/* Highlight Badge if featured */}
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-zinc-200 text-black text-[11px] font-semibold rounded-full shadow-md">
                    Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  {/* Badge & Title */}
                  <div>
                    <span className="text-xs font-medium text-zinc-400 block mb-2">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Price display */}
                  <div className="py-2 border-y border-zinc-800/70">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                        {tier.price}
                      </span>
                      {tier.price !== "Let's Talk" && (
                        <span className="text-xs text-zinc-400">starting from</span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      {tier.priceSubtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      Includes
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => onOpenQuote(tier.title)}
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold rounded-xl transition-all duration-200 ${
                      tier.highlighted
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-md'
                        : 'bg-zinc-800/90 text-white hover:bg-zinc-700 border border-zinc-700/60'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Monthly Support Card */
          <div className="max-w-3xl mx-auto mb-12 rounded-2xl bg-[#111116] border border-zinc-800 p-8 sm:p-10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-medium text-zinc-400 block mb-1">
                    Ongoing Retainer & Maintenance
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Custom monthly support
                  </h3>
                </div>
                <div className="text-right sm:text-right">
                  <div className="text-2xl font-bold text-white">Let's Discuss</div>
                  <p className="text-xs text-zinc-400">Tailored to your update frequency</p>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                For individuals and businesses who want peace of mind with continuous improvements, priority bug resolution, and content updates without worrying about hourly billing friction.
              </p>

              {/* Monthly Support Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {MONTHLY_SUPPORT_FEATURES.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-zinc-400" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-400">
                  Cancel anytime · Direct WhatsApp / Slack channel communication
                </p>
                <button
                  type="button"
                  onClick={() => onOpenQuote('Monthly Support')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-black bg-white rounded-xl hover:bg-zinc-200 transition-all duration-200"
                >
                  <span>Inquire About Monthly Retainer</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Small Tasks Section: Quick Fix */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0f0f13] border border-zinc-800/80 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/70">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-zinc-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Need a quick fix?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Website fixes and small improvements: <strong className="text-white font-semibold">From ₹500</strong>
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenQuote('Website Fix / Quick Fix')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-100 bg-zinc-800 border border-zinc-700 rounded-xl hover:bg-zinc-700 hover:text-white transition-all shrink-0"
            >
              <span>Request a Quick Fix</span>
              <span>→</span>
            </button>
          </div>

          {/* Quick fix item examples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6">
            {QUICK_FIX_ITEMS.map((item) => (
              <div
                key={item.title}
                className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
              >
                <p className="text-xs font-medium text-zinc-200">{item.title}</p>
                <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Philosophy Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            “These are starting prices, not fixed quotes. Every project is different, so I'll confirm the exact scope and final price before starting.”
          </p>
        </div>
      </div>
    </section>
  );
};
