export default function AboutUs() {
  return (
    <section className="relative overflow-hidden py-24 bg-gray-50 text-black">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div>
          <span className="inline-block mb-4 rounded-full border border-orange-600 px-4 py-1 text-sm text-orange-600">
            About Zero Crypto
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A smarter way to trade <br />
            <span className="text-orange-600">digital assets</span>
          </h2>

          <p className="mt-6 text-black/70 leading-relaxed max-w-xl">
            Zero Crypto is a next-generation cryptocurrency exchange built for
            speed, transparency, and security. We empower traders and investors
            with intuitive tools, deep liquidity, and zero-friction execution —
            whether you’re just getting started or trading at scale.
          </p>

          <p className="mt-4 text-black/70 leading-relaxed max-w-xl">
            Our mission is simple: remove complexity, eliminate hidden costs,
            and give users full control over their assets in a trusted and
            modern trading environment.
          </p>

          
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Secure by Design",
              desc: "Advanced encryption and multi-layer protection keep your funds safe at all times.",
            },
            {
              title: "Lightning Fast",
              desc: "High-performance matching engine for instant trade execution.",
            },
            {
              title: "Transparent Fees",
              desc: "No hidden charges. What you see is exactly what you pay.",
            },
            {
              title: "Built for Everyone",
              desc: "A simple interface for beginners and powerful tools for pros.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
