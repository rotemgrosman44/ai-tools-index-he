import Image from 'next/image';

export default function ToolCard({ tool }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-40 w-full mb-3">
          <Image
            src={tool.thumbnail || '/logos/placeholder.svg'}
            alt={tool.name}
            fill
            className="object-cover rounded"
          />
        </div>
        <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
        <p className="text-sm text-gray-600">{tool.description}</p>
      </a>
    </div>
  );
}
