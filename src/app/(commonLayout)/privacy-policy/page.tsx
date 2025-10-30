import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import ContactHero from '@/app/components/reusabeCard/allHeroSection';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen ">

      <div>
        {/* Banner Section */}
      <ContactHero
      title="PRIVACY POLICY"
      subtitle="Your privacy is important to us."
      currentPage="Privacy Policy"
    />
      </div>
      
      <div className="max-w-7xl mx-auto mt-12  ">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy– <span className="text-teal-600">MAW mobile auto welt</span>
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: September 12, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              MAW mobile auto welt values your trust and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our website or mobile application. By accessing or using our platform, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Personal Information:</strong> Name, email, phone number, address</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Account Information:</strong> Login credentials, profile details</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Transaction Information:</strong> Car buying/selling details, payment history</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Technical Information:</strong> IP address, browser type, device info, cookies data</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Location Information:</strong> Car location, search location, map details</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use your information for purposes such as:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Facilitating car buying and selling transactions</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Verifying and securing user accounts</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Providing personalized content and recommendations</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Delivering customer support and improving our services</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Meeting legal and regulatory requirements</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sharing of Information</h2>
            <p className="text-gray-700 mb-3">
              We do not sell your personal information to third parties. However, we may share information in the following cases:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Transaction Needs:</strong> Between buyers and sellers as relevant</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Service Providers:</strong> Payment gateways, hosting services, verification tools</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span><strong>Legal Reasons:</strong> When required by law, government, or law enforcement agencies</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookies Policy</h2>
            <p className="text-gray-700 mb-3">We use cookies and similar technologies to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Enable login and authentication</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Remember your preferences</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Analyze site performance and usage</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-3">
              You may disable cookies from your browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-gray-700">
              We implement SSL encryption, secure servers, and strict access controls to protect your data. However, please note that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Childrens Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Access, update, or delete your personal data</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Opt-out of marketing communications</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Contact us with privacy-related questions</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Policy Updates</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Updates will be posted on our website, and the Last Updated date will be revised accordingly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
                <span><strong>Email:</strong> supportxyz@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
                <span><strong>Phone:</strong> +880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-teal-600 flex-shrink-0" />
                <span><strong>Address:</strong> 123 Auto Lane, Caviler, USA</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;