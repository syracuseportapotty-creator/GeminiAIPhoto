import { useState } from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';

type CopyBoxProps = {
  prompt: string;
  label?: string;
};

export default function CopyBox({ prompt, label = 'Prompt' }: CopyBoxProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="card-surface overflow-hidden">
        <div className="flex items-center justify-between border-b border-default px-5 py-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
            {label}
          </div>
          <button
            onClick={copy}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
              copied
                ? 'bg-accent-600 text-white'
                : 'border border-default text-muted hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400'
            }`}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="max-h-72 overflow-y-auto whitespace-pre-wrap px-5 py-4 text-sm leading-relaxed text-[var(--text)]">
          {prompt}
        </pre>
      </div>

      {/* Toast */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 animate-toast-in">
          <div className="flex items-center gap-2 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-xl">
            <Check className="h-4 w-4" />
            Prompt copied to clipboard
          </div>
        </div>
      )}
    </div>
  );
}
