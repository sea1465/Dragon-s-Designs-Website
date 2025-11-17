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
              <span className="text-xl md:text-2xl font-extrabold">Aussie Designs</span>
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
                Aussie Designs is a dedicated design studio which creates designs related to ER:LC (we do not work for
                ER:LC) focused on creating high-quality, custom visual experiences. Whether you need branding, web design,
                or creative solutions, we deliver advanced, reliable designs tailored exactly to your vision and needs.
              </p>
            </div>

            <div className="section-tight mt-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Why choose us?</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  At Aussie Designs, we create custom designs tailored to your exact needs—no generic templates. We
                  offer affordable pricing, maintain positive communication, and prioritize your order to ensure a
                  seamless experience from concept to completion.
                </p>
              </div>
            </div>
          </section>
        )}

       {/* PRICING SECTION */}
        {activeSection === "prices" && (
          <section className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Pricing
              </h2>

              {/* FIRST ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Liveries</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• 150R+</li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Clothing</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• 45R+</li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Graphics</h4>
                  <ul className="text-gray-300 space-y-4">
                    <li>
                      <strong>GFX:</strong>
                      <div className="ml-3">• 200R+</div>
                    </li>
                    <li>
                      <strong>Logos & Banners:</strong>
                      <div className="ml-3">• 80R+</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SECOND ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">ELS</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• 40R+</li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Bot Development</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      <strong>Per Command:</strong>
                      <div className="ml-3">• 150R+</div>
                    </li>
                  </ul>
                </div>

                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Discord Server Making</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>• 250R+</li>
                  </ul>
                </div>
              </div>

              {/* THIRD ROW — Videography */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div className="card-surface">
                  <h4 className="text-2xl font-bold mb-4">Videography</h4>
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      <strong>Server Trailer:</strong>
                      <div className="ml-3">• 2000+ Robux</div>
                    </li>
                    <li>
                      <strong>Short Film:</strong>
                      <div className="ml-3">• 1000+ Robux</div>
                    </li>
                    <li>
                      <strong>Small Skit:</strong>
                      <div className="ml-3">• 500+ Robux</div>
                    </li>
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
                provided by Aussie Designs ("Aussie Designs", "we", "us", "our"). By requesting or using any services from
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
                    Here you would find the Designer Application for our design server. We do not pay in real money, nor would you get weekly Robux. You only get paid when you create designs, and from which Aussie Designs would take a percentage of the payment.
                  </li>
                  <li>
                    Note that you are not an employee, you are designing by your own will. We would try our best to pay you (in Robux) if you make designs, but if we are not able to pay you, you will have to wait and cannot do anything about it and cannot take any action against us.
                  </li>
                  <li>By agreeing to these Terms, you can now apply by clicking the button below.</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://discord.com/channels/1373797099472425000/1434670859221471434"
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
        href="https://discord.gg/tShP8j4CMb"
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
          <path d="M60.1045 4.8978C55.5792 2.8214 50.6766 1.3562 45.5083 0.5847C45.4311 0.5726 45.3543 0.602 45.3073 0.6638C44.7332 1.4378 44.203 2.2451 43.7253 3.0821C38.9808 2.3603 34.1693 2.3603 29.4248 3.0821C28.947 2.2451 28.4168 1.4378 27.8427 0.6638C27.7957 0.602 27.7189 0.5726 27.6417 0.5847C22.4734 1.3562 17.5708 2.8214 13.0455 4.8978C12.9977 4.9195 12.9581 4.9561 12.9323 5.0033C3.828 18.9451 1.1956 32.5279 2.3929 46.0045C2.3975 46.0571 2.4192 46.107 2.4545 46.1461C7.458 51.4685 12.9503 55.1084 18.3609 57.6802C18.4412 57.7181 18.5345 57.6852 18.5805 57.6102C19.8816 55.4248 20.9275 53.1167 21.7062 50.7156C21.743 50.602 21.6873 50.4798 21.5791 50.4292C19.4856 49.4763 17.4931 48.2813 15.6353 46.8683C15.515 46.7757 15.5041 46.5959 15.6081 46.4848C15.9832 46.0941 16.3584 45.7034 16.709 45.3022C16.7745 45.2269 16.8833 45.2144 16.9626 45.2733C28.2148 53.393 42.788 53.393 54.0402 45.2733C54.1196 45.2144 54.2283 45.2269 54.2938 45.3022C54.6444 45.7034 55.0196 46.0941 55.3947 46.4848C55.4987 46.5959 55.4879 46.7757 55.3675 46.8683C53.5097 48.2813 51.5172 49.4763 49.4238 50.4292C49.3155 50.4798 49.2599 50.602 49.2967 50.7156C50.0754 53.1167 51.1213 55.4248 52.4224 57.6102C52.4685 57.6852 52.5617 57.7181 52.642 57.6802C58.0526 55.1084 63.545 51.4685 68.5485 46.1461C68.5838 46.107 68.6055 46.0571 68.6101 46.0045C70.0044 29.5361 66.3658 15.0248 60.1045 4.8978Z" />
        </svg>
        <span className="text-sm md:text-base">Join Our Discord</span>
      </a>
    </div>
  );
};

export default DragonsDesigns;
