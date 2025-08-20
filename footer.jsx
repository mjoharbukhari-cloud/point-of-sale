import React from "react";
import { Container } from "./container.component";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const getStartedLinks = [
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies Policy", href: "#" },
    { label: "Cookies Setting", href: "#" },
  ];
  const services = [
    { label: "Student Portal", href: "#" },
    { label: "Learning Management", href: "#" },
    { label: "Transport Management", href: "#" },
    { label: "Hostel Management", href: "#" },
  ];

  const getintouch = [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "TikTok", href: "#" },
  ];
  return (
    <>
    <hr className="border-t border-gray-400 my-4 mt-10" />
    <Container>
      <img
        src="/assets/logo-colored.png" // place your logo inside the /public folder as logo.png
        alt="Company Logo"
        className="h-12 w-24 object-contain"
      />
      <footer >
        <div className="pt-3  pb-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-secondary hover:font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Get Started */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                Get Started
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {getStartedLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-secondary hover:font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-secondary hover:font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {getintouch.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-secondary hover:font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Separator */}
          <hr className="border-t border-gray-400 my-4" />

          {/* Bottom text */}
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </Container>
    </>
  );
};

export default Footer;
