export type FactLevel = 'confirmed' | 'credible' | 'speculative';

export const FACT_LABEL: Record<FactLevel, string> = {
  confirmed: 'Confirmed',
  credible: 'Credible',
  speculative: 'Speculative',
};

export const FACT_STYLE: Record<FactLevel, string> = {
  confirmed: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
  credible: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
  speculative: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
};
