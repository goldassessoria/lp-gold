import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image 
        src="https://i.imgur.com/UBxesF1.png" 
        alt="Gold Assessoria Logo" 
        width={220} 
        height={50}
        className="object-contain"
      />
    </div>
  );
}
