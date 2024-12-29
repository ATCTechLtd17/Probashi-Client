import React from 'react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <FooterSection title="Ami Probashi">
            <FooterLink href="/find-job">Find Job</FooterLink>
            <FooterLink href="/make-cv">Make CV</FooterLink>
            <FooterLink href="/career-consultancy">Career Consultancy</FooterLink>
          </FooterSection>

          <FooterSection title="Probashi Business">
            <FooterLink href="/local-recruiting">Local Recruiting Agency</FooterLink>
            <FooterLink href="/foreign-employer">Foreign Employer</FooterLink>
            <FooterLink href="/training-institute">Training Institute</FooterLink>
          </FooterSection>

          <FooterSection title="Life Style Service">
            <FooterLink href="/online-doctor">Online Doctor</FooterLink>
            <FooterLink href="/probashi-learning">Probashi Learning</FooterLink>
            <FooterLink href="/entertainment">Entertainment</FooterLink>
          </FooterSection>

          <FooterSection title="Our Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </FooterSection>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Connect with us</h3>
            <SocialLinks />
            <div>
              <p className="text-gray-600 mb-2">Get the Probashi App</p>
              <div className="flex space-x-3">
                <img
                  src="/app-store.png"
                  alt="App Store"
                  className="h-10 w-auto hover:opacity-80 transition"
                />
                <img
                  src="/play-store.png"
                  alt="Play Store"
                  className="h-10 w-auto hover:opacity-80 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Probashi-DhakaBoss. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <FooterLink href="/terms" className="hover:text-sky-500 transition">
                Terms & Conditions
              </FooterLink>
              <FooterLink href="/privacy" className="hover:text-sky-500 transition">
                Privacy Policy
              </FooterLink>
              <FooterLink href="/refund" className="hover:text-sky-500 transition">
                Refund Policy
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
