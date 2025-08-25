import Image from 'next/image';

/**
 * Card component to display an AI tool.  Supports a `small` prop to render
 * a more compact card variant.  The large variant uses a pastel gradient
 * background defined in the Tailwind configuration, while the small variant
 * keeps a white background with a coloured border.  Both variants provide
 * consistent padding, rounded corners and subtle shadow on hover.  The
 * thumbnail image uses the built‑in Next.js image optimisation and falls
 * back to a placeholder if no thumbnail exists.  The description text is
 * truncated to two lines on larger cards.
 *
 * @param {{ tool: { name: string; description: string; url: string; thumbnail?: string; };
 *          small?: boolean }} props
 */
export default function ToolCard({ tool, small = false }) {
  // Determine card styles based on size variant
  const baseClasses =
    'rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-colors duration-200';
  const largeClasses =
    'bg-gradient-to-br from-gradientStart via-gradientMiddle to-gradientEnd p-4';
  const smallClasses = 'bg-white border border-accent p-4';
  const cardClasses = `${baseClasses} ${small ? smallClasses : largeClasses}`;

  return (
    <div className={cardClasses}>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Aspect ratio box for the image (1:1 ratio) */}
        <div className="relative w-full pb-[100%] mb-3">
          <Image
            src={tool.thumbnail || '/logos/placeholder.svg'}
            alt={tool.name}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{tool.description}</p>
      </a>
    </div>
  );
}