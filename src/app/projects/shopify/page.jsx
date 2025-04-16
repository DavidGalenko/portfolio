// app/projects/shopify/page.tsx

export default function ShopifyProjectPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Custom Shopify App</h1>
          <p className="text-lg text-slate-300 mb-8">
            Documentation for a private Shopify app used for automated product import, inventory sync, and order fulfillment across factory workflows.
          </p>
  
          <div className="aspect-video w-full max-w-4xl mx-auto border border-white/20 rounded-lg overflow-hidden">
            <iframe
              src="/docs/shopify-doc.pdf"
              width="100%"
              height="100%"
              className="w-full h-full"
              title="Shopify App Documentation"
            />
          </div>
        </div>
      </main>
    );
  }