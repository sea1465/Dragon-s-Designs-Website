import React, { useState } from "react";

const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-sm md:text-base transition-colors px-2 py-1 ${
      active ? "text-purple-400" : "text-gray-300"
    } hover:text-purple-400`}
  >
    {children}
  </button>
);

const DragonsDesigns = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="page-dots min-h-screen text-white">
      {/* nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* logo: expects public/logo.svg */}
              <img
                src="/logo.svg"
                alt="Dragon's logo"
                className="h-8 md:h-10 mr-3 object-contain"
                onError={(e) => {
                  // if image fails to load, hide it gracefully
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-xl md:text-2xl font-extrabold">Dragon's Designs</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <NavLink active={activeSection === "home"} onClick={() => setActiveSection("home")}>
                Home
              </NavLink>
              <NavLink active={activeSection === "prices"} onClick={() => setActiveSection("prices")}>
                Prices
              </NavLink>
              <NavLink active={activeSection === "terms"} onClick={() => setActiveSection("terms")}>
                Terms
              </NavLink>
              <NavLink active={activeSection === "application"} onClick={() => setActiveSection("application")}>
                Designer Application
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        <div className="hero-accent" aria-hidden />

        {/* HOME */}
        {activeSection === "home" && (
          <section className="hero-section flex-col text-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1
                className="hero-title font-extrabold text-5xl md:text-7xl lg:text-8xl"
                style={{ lineHeight: 1.02 }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Designs Made
                </span>
              </h1>

              <h2
                className="hero-subtitle font-extrabold text-3xl md:text-5xl lg:text-6xl mt-4"
                style={{ lineHeight: 1.06 }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  With Perfection
                </span>
              </h2>

              <p className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Dragon's Designs is a dedicated design studio which creates designs related to ER:LC (we do not work for
                ER:LC) focused on creating high-quality, custom visual experiences. Whether you need branding, web design,
                or creative solutions, we deliver advanced, reliable designs tailored exactly to your vision and needs.
              </p>
            </div>

            <div className="section-tight mt-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Why choose us?</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  At Dragon's Designs, we create custom designs tailored to your exact needs—no generic templates. We
                  offer affordable pricing, maintain positive communication, and prioritize your order to ensure a
                  seamless experience from concept to completion.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* PRICES */}
        {activeSection === "prices" && (
          <section className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Pricing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                {/* Row 1 */}
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Liveries</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>Law Enforcement:</strong><div className="ml-3 mt-1">• 160+ Robux per livery</div></li>
                    <li><strong>Fire Department:</strong><div className="ml-3 mt-1">• 200+ Robux per livery</div></li>
                    <li><strong>Department of Transportation:</strong><div className="ml-3 mt-1">• 100+ Robux per livery</div></li>
                    <li><strong>Server Staff:</strong><div className="ml-3 mt-1">• 220+ Robux per livery</div></li>
                    <li><strong>Job/Miscellaneous:</strong><div className="ml-3 mt-1">• 150+ Robux per livery</div></li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Clothing</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>Shirts:</strong><div className="ml-3 mt-1">• 80+ Robux per shirt</div></li>
                    <li><strong>Pants:</strong><div className="ml-3 mt-1">• 50+ Robux per pant</div></li>
                    <li><strong>Bundle (1 Shirt + 1 Pant):</strong><div className="ml-3 mt-1">• 130+ Robux per bundle</div></li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Photography</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>Raw Photo:</strong><div className="ml-3 mt-1">• 50+ Robux per photo</div></li>
                    <li><strong>Edited Photo:</strong><div className="ml-3 mt-1">• 100+ Robux per photo</div></li>
                    <li><strong>Photo Bundle (5 fully edited photos):</strong><div className="ml-3 mt-1">• 420+ Robux per bundle</div></li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                {/* Row 2 */}
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">ELS</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>One Stage:</strong><div className="ml-3 mt-1">• 80+ Robux per stage</div></li>
                    <li><strong>Two Stages:</strong><div className="ml-3 mt-1">• 140+ Robux per bundle</div></li>
                    <li><strong>Three Stages:</strong><div className="ml-3 mt-1">• 200+ Robux per bundle</div></li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Graphic Design</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>Logo:</strong><div className="ml-3 mt-1">• 150+ Robux per logo</div></li>
                    <li><strong>Banner:</strong><div className="ml-3 mt-1">• 80+ Robux per banner</div></li>
                    <li><strong>GFX:</strong><div className="ml-3 mt-1">• 300+ Robux per GFX</div></li>
                    <li><strong>Role Icons:</strong><div className="ml-3 mt-1">• 20+ Robux per role icon</div></li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Videography</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li><strong>Server Trailer:</strong><div className="ml-3 mt-1">• 2000+ Robux per trailer</div></li>
                    <li><strong>Short Film:</strong><div className="ml-3 mt-1">• 1000+ Robux per film</div></li>
                    <li><strong>Small Skit:</strong><div className="ml-3 mt-1">• 500+ Robux per skit</div></li>
                  </ul>
                </div>
              </div>

              {/* extra two boxes requested, displayed below second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Bot Development</h4>
                  <ul className="text-gray-300 space-y-4">
                    <li><strong>1 Command:</strong><div className="ml-3 mt-1">• 100+ Robux</div></li>
                    <li><strong>5 Commands:</strong><div className="ml-3 mt-1">• 450+ Robux</div></li>
                    <li><strong>10 Commands:</strong><div className="ml-3 mt-1">• 800+ Robux</div></li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Discord Server Making</h4>
                  <ul className="text-gray-300 space-y-4">
                    <li><strong>All Channels:</strong><div className="ml-3 mt-1">• 1000+ Robux per server</div></li>
                    <li><strong>All Channels + Embeds:</strong><div className="ml-3 mt-1">• 1800+ Robux per server</div></li>
                    <li><strong>Only Embeds:</strong><div className="ml-3 mt-1">• 850+ Robux per server</div></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TERMS */}
        {activeSection === "terms" && (
          <section className="px-6 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Terms of Service
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                These Terms of Service ("Terms") govern your access to and use of products, services, and digital materials
                provided by Dragon's Designs ("Dragon's Designs", "we", "us", "our"). By requesting or using any services from
                us, you agree to comply with these Terms. If you do not accept any part of these Terms, you may not access or
                use our services.
              </p>

              <div className="card-surface mb-8">
                <h3 className="text-2xl font-extrabold mb-4">Eligibility &amp; Access</h3>
                <p className="mb-4">By using Dragon's Designs services, you confirm that:</p>
                <ul className="ml-6 list-disc text-gray-300 space-y-2">
                  <li>Your use of our services does not violate any applicable laws.</li>
                  <li>You are not requesting anything harmful, malicious, or unlawful.</li>
                  <li>You have read these terms of service beforehand.</li>
                </ul>
                <p className="mt-6">Any sort of unauthorized re-distribution of designs will lead to a permanent ban from the server.</p>
              </div>

              <div className="card-surface">
                <h3 className="text-2xl font-extrabold mb-4">Delivery of Services</h3>
                <p className="leading-relaxed">
                  It is your responsibility to make sure that the information you provide for your request is clear, accurate,
                  comprehensive, and pertinent. Any delays or mistakes brought on by inaccurate or missing information are not our
                  responsibility.
                </p>

                <p className="mt-4 leading-relaxed">
                  A summary will be delivered to you through the prearranged order channel as soon as an order is confirmed. You must
                  check and validate the information right away. Once validated, you will be required to pay; we always do payment
                  upfront, no exceptions.
                </p>

                <p className="mt-4 leading-relaxed">
                  We'll do everything we can to ensure that services or digital goods are delivered on schedule. Delivery schedules,
                  however, are estimates and may vary depending on project complexity or unforeseen circumstances.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* APPLICATION */}
        {activeSection === "application" && (
          <section className="px-6 py-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Designer Applications
              </h2>

              <div className="card-surface mb-8">
                <ul className="text-gray-300 space-y-4 list-disc ml-5">
                  <li>
                    Here you would find the Designer Application for our design server. We do not pay in real money, nor would you get weekly Robux. You only get paid when you create designs, and from which Dragon's Designs would take a percentage of the payment.
                  </li>
                  <li>
                    Note that you are not an employee, you are designing by your own will. We would try our best to pay you (in Robux) if you make designs, but if we are not able to pay you, you will have to wait and cannot do anything about it and cannot take any action against us.
                  </li>
                  <li>By agreeing to these Terms, you can now apply by clicking the button below.</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqP1tmihJXGlQ6DveMvzlwcfK4w1CUjfdkC7i5tuk00eY3kw/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold text-lg transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

            {/* Discord fixed button (bottom-left) */}
      <a
        href="https://discord.gg/7R4bvmuYfq"
        target="_blank"
        rel="noopener noreferrer"
        className="discord-fixed"
        style={{ left: 20, right: "auto", bottom: 20 }}
        aria-label="Join our Discord"
      >
        {/* perfectly scaled Discord logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 71 55"
          fill="white"
          className="w-6 h-6 shrink-0"
          aria-hidden="true"
        >
          <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.4156C45.5603 0.3981 45.468 0.4408 45.4204 0.5257C44.7963 1.6352 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0587 26.1886 1.6352 25.5617 0.5257C25.5141 0.4434 25.4218 0.4007 25.3294 0.4156C20.2584 1.2889 15.4057 2.8187 10.8776 4.8978C10.8384 4.9141 10.8047 4.9427 10.7828 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293462 45.3919C0.299006 45.4607 0.33594 45.525 0.391583 45.5643C6.45866 49.7804 12.3413 52.4885 18.1147 54.4792C18.2071 54.5112 18.3089 54.4739 18.3593 54.3915C19.7295 52.0872 20.9469 49.6699 21.9907 47.1723C22.0523 47.0239 21.9933 46.8529 21.8456 46.7877C19.7281 45.8648 17.7079 44.7391 15.8154 43.4228C15.6613 43.3135 15.646 43.0802 15.8085 42.9553C16.2123 42.6466 16.6162 42.3209 17.0073 41.9999C17.0751 41.9442 17.1714 41.9325 17.2473 41.9693C29.2558 47.6643 41.8354 47.6643 53.767 41.9693C53.8429 41.9299 53.9392 41.9416 54.0107 41.9973C54.4018 42.3182 54.8057 42.6466 55.2113 42.9553C55.3738 43.0802 55.3622 43.3135 55.2081 43.4228C53.3155 44.7548 51.2953 45.8648 49.1765 46.7849C49.0288 46.8502 48.9739 47.0239 49.0355 47.1723C50.0987 49.6672 51.3162 52.0845 52.6702 54.3888C52.7178 54.4739 52.8196 54.5112 52.912 54.4792C58.7072 52.4885 64.5898 49.7804 70.6569 45.5643C70.7153 45.525 70.749 45.4634 70.7545 45.3946C72.1747 30.0791 68.2147 16.7757 60.1968 4.9822C60.1776 4.9427 60.1438 4.9141 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1064 30.1693C30.1064 34.1136 27.2799 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.937 34.1136 40.937 30.1693C40.937 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6983 30.1693C53.6983 34.1136 50.9 37.3253 47.3178 37.3253Z" />
        </svg>
        <span className="text-sm md:text-base">Join Our Discord</span>
      </a>
    </div>
  );
};

export default DragonsDesigns;
