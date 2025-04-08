// app/docs/page.tsx
"use client";

export default function SwaggerDocsPage() {
  return (
    <div className="w-full h-screen border-none fixed top-0 left-0 bg-white">
      <iframe
        src="/swagger/index.html"
        className="w-full h-screen border-none"
      />
    </div>
  );
}
