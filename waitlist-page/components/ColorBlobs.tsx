"use client";

export default function ColorBlobs() {
  const blobs = [
    { color: "lavender", size: "w-96 h-96", position: "top-10 left-10", delay: 0 },
    { color: "indigo", size: "w-80 h-80", position: "top-1/2 right-20", delay: 2 },
    { color: "sky", size: "w-72 h-72", position: "bottom-20 left-1/4", delay: 4 },
    { color: "mint", size: "w-64 h-64", position: "top-1/3 right-1/3", delay: 1 },
    { color: "peach", size: "w-88 h-88", position: "bottom-10 right-10", delay: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute ${blob.position} ${blob.size} bg-${blob.color}/20 rounded-full blur-3xl animate-float`}
          style={{
            animationDelay: `${blob.delay}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
