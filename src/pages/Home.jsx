import React from "react";

function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="text-center max-w-2xl">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">
          Abhaya Cloud
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-950">
          Cloud infrastructure,
          <br />
          built for developers.
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600">
          A modern cloud platform for deploying, running, and scaling
          applications without the complexity.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Coming soon
        </div>
      </section>
    </main>
  );
}

export default Home;
