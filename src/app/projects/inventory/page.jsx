// app/projects/inventory/page.tsx

export default function InventoryProjectPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Warehouse Inventory System</h1>
          <p className="text-lg text-slate-300 mb-8">
            Detailed documentation for the internal inventory tracking and warehouse management system.
          </p>
  
          <div className="aspect-video w-full max-w-4xl mx-auto border border-white/20 rounded-lg overflow-hidden">
            <iframe
              src="/docs/inventory-doc.pdf"
              width="100%"
              height="100%"
              className="w-full h-full"
              title="Inventory System Documentation"
            />
          </div>
        </div>
      </main>
    );
  }
  