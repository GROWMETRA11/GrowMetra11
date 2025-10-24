import React from "react";
import logo from "../assets/logos/Growmetra_limited_Logo-removebg-preview 1.svg";
import email from "../assets/icons/SVG (email).svg";
import phone from "../assets/icons/SVG (phone).svg";
import facebookIcon from "../assets/icons/Link - Facebook.svg";
import instagramIcon from "../assets/icons/Link - Instagram.svg";
import twitterIcon from "../assets/icons/Link - Twitter.svg";
import linkedinIcon from "../assets/icons/Link - LinkedIn.svg";

const Footer = () => {
  const text = [
    {
      id: 1,
      contents:
        "Building trust, one harvest at a time. Connecting Nigerian farmers with buyers who value quality and fairness.",
    },
  ];

  const navBar = ["Home", "Features", "How it works", "Stories", "FAQs"];

  const contact = [
    {
      icon: email,
      text: "hello@growmetra.com",
      link: "mailto:hello@growmetra.com",
    },
    {
      icon: phone,
      text: "+234 800 123 4567",
      link: "tel:+2348001234567",
    },
  ];

  const social = [
    { icon: facebookIcon, text: "Facebook", link: "https://facebook.com" },
    { icon: twitterIcon, text: "Twitter", link: "https://x.com" },
    { icon: instagramIcon, text: "Instagram", link: "https://instagram.com" },
    { icon: linkedinIcon, text: "Linkedin", link: "https://linkedin.com" },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-500 px-6 md:px-12 lg:px-20 py-20">
      <section className="max-w-[1152px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & Description */}
          <div className="w-full lg:w-[250px]">
            <img
              src={logo}
              alt="GrowMetra Logo"
              className="w-[100px] h-[100px] mb-4"
            />
            {text.map((content) => (
              <p
                key={content.id}
                className="inter font-normal text-base leading-[26px]"
              >
                {content.contents}
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div className="min-w-[150px]">
            <h4 className="text-white mb-6 font-semibold text-lg">
              Quick Links
            </h4>
            {navBar.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block hover:text-green-500 font-normal text-base leading-[28px] transition mb-3"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white mb-6 font-semibold text-lg">
              Get In Touch
            </h4>
            {contact.map((contacts, index) => (
              <article
                key={index}
                className="flex items-center gap-3 inter text-base font-normal leading-[24px] mb-4"
              >
                <img src={contacts.icon} alt={contacts.text} />
                <a href={contacts.link}> {contacts.text} </a>
              </article>
            ))}
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white mb-6 font-semibold text-lg">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {social.map((socials, index) => (
                <a
                  key={index}
                  href={socials.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socials.icon}
                    alt={socials.text}
                    className="w-6 h-6 hover:opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center border-t border-gray-600 pt-8 mt-16 inter font-normal text-sm">
          <p className="mb-3">
            By using GrowMetra, you agree to our Terms of Service and Privacy
            Policy.
          </p>
          <p>&copy; 2025 GrowMetra. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
