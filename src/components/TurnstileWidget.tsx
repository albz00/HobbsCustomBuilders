import { useEffect, useRef } from 'react';
import { TURNSTILE_SITE_KEY } from '../content/site';

type TurnstileWidgetProps = {
  onExpire?: () => void;
  onError?: () => void;
};

let activeWidgetId: string | undefined;

function TurnstileWidget({ onExpire, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current || widgetIdRef.current || !window.turnstile) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        callback: () => undefined,
        'expired-callback': () => onExpire?.(),
        'error-callback': () => onError?.()
      });
      activeWidgetId = widgetIdRef.current;
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-turnstile="true"]');

    if (existingScript) {
      existingScript.addEventListener('load', renderWidget);
      return () => existingScript.removeEventListener('load', renderWidget);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = 'true';
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [onError, onExpire]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        if (activeWidgetId === widgetIdRef.current) {
          activeWidgetId = undefined;
        }
        widgetIdRef.current = undefined;
      }
    };
  }, []);

  return <div ref={containerRef} className="min-h-[65px]" />;
}

export function resetTurnstileWidget() {
  if (activeWidgetId && window.turnstile) {
    window.turnstile.reset(activeWidgetId);
  }
}

export function getTurnstileToken() {
  if (!activeWidgetId || !window.turnstile) return '';
  return window.turnstile.getResponse(activeWidgetId) ?? '';
}

export default TurnstileWidget;
