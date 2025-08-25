import tools from '../data/tools.json';
import ToolCard from '../components/ToolCard';

/**
 * מקבצת את רשימת הכלים לפי קטגוריה. קטגוריות ריקות מסומנות כ"כללי".
 * @param {Array} data - מערך הכלים כפי שמוגדר בקובץ JSON
 * @returns {Record<string, Array>} אובייקט של קטגוריות מול מערכי כלים
 */
function groupByCategory(data) {
  return data.reduce((acc, tool) => {
    const category = tool.category && tool.category.trim() ? tool.category : "כלים כלליים";
    if (!acc[category]) acc[category] = [];
    acc[category].push(tool);
    return acc;
  }, {});
}

export default function Page() {
  const categories = groupByCategory(tools);
  return (
    <main className="container mx-auto px-4 py-8">
      {Object.entries(categories).map(([category, items]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
