import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Kuliner Nirwana River Cafe',
  className = '',
  containerClassName = '',
  fallbackText,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#FAF8F1] ${containerClassName}`}>
      {!error ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 bg-stone-200/50 animate-pulse flex items-center justify-center">
              <span className="text-xs text-[#77796F]/60">Memuat...</span>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setError(true)}
            onLoad={() => setLoaded(true)}
            className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            {...props}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center bg-stone-100/90 text-[#77796F] p-4 text-center">
          <div className="w-10 h-10 rounded-full bg-[#87977A]/15 text-[#344C3B] flex items-center justify-center mb-2">
            <Utensils className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-[#2E332D] max-w-[180px] line-clamp-1">{alt}</span>
          <span className="text-[11px] text-[#77796F] mt-0.5">{fallbackText || 'Nirwana River Cafe & Resto'}</span>
        </div>
      )}
    </div>
  );
};
