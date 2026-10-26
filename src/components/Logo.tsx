type LogoProps = {
  wordmark?: string | null
  size?: 'sm' | 'md'
  className?: string
}

function Mark({ size }: { size: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'h-8 w-8 rounded-xl' : 'h-9 w-9 rounded-2xl'
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-primary-400 to-primary-700 text-white shadow-[0_10px_20px_-10px_rgba(0,112,199,0.85)] ${box}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="none">
        <path
          d="M7.4 19.4V4.8h5.35c2.7 0 4.35 1.5 4.35 3.7 0 2.2-1.65 3.65-4.35 3.65H7.4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.55 14.2 18.05 15.45 19.3 15.95 18.05 16.45 17.55 17.7 17.05 16.45 15.8 15.95 17.05 15.45 17.55 14.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

export function Logo({ wordmark = 'Paynesy', size = 'md', className = '' }: LogoProps) {
  const text = size === 'sm' ? 'text-base' : 'text-lg'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={size} />
      {wordmark ? (
        <span className={`font-display font-bold tracking-tight text-surface-900 dark:text-white ${text}`}>
          {wordmark}
        </span>
      ) : null}
    </span>
  )
}
