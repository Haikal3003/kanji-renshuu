import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type InteractiveHoverButtonOrLinkProps = (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }) | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, InteractiveHoverButtonOrLinkProps>(({ children, className, href, ...props }, ref) => {
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isActive = href && pathname === href;

  const sharedClassName = cn(
    'group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold transition-colors duration-300',
    isActive && 'bg-primary text-primary-foreground',
    className
  );

  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={sharedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">{children}</span>
        </div>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary opacity-0 transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-100">
          <span>{children}</span>
        </div>
      </a>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={sharedClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-yello-400 transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">{children}</span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-100">
        <span>{children}</span>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';
