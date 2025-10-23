import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div>
        {/* Banner Section */}
      <div
        className="relative min-h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-image.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#00695C]  opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-2xl md:text-4xl font-bold">TERMS & CONDITIONS</h1>
          <p className="text-gray-300 md:text-xl mt-3 mb-4 text-center">
            For no time wise pregnant until for itself porta <br /> justo congue
            pure pretium ligula
          </p>
          <nav>
            <Link href="/" className="">
              Home
            </Link>{" "}
            <span> &gt; </span>
            <span className="">Terms & Conditions</span>
          </nav>
        </div>
      </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12  ">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions– <span className="text-teal-600">MAW mobile auto welt</span>
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: September 12, 2025</p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to [Your Marketplace Name]. These Terms & Conditions (Terms) govern your use of our website, mobile application, and services. By accessing or using our platform, you agree to comply with these Terms. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By creating an account, browsing, or using our services, you confirm that you are at least 18 years old and legally capable of entering into this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Services Provided</h2>
            <p className="text-gray-700 mb-3">[Your Marketplace Name] is an online automotive marketplace that enables users to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Buy and sell vehicles</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Trade between dealers and private sellers</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Post service listings (body, paint, wallet, future upgrade may support crypto)</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Access tools like search filters, car details, chat, and location maps</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>We act as a platform only, and are not responsible for the quality, legality, or ownership of listed vehicles.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>You must provide accurate and complete information during registration.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>You are responsible for maintaining the confidentiality of your login credentials.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Any suspicious or fraudulent activity may result in account suspension or termination.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Buyer Responsibilities</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Verify vehicle details before purchase.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Use the negotiation and messaging tools responsibly.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Ensure payments are made only through secure methods provided by our platform.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Seller Responsibilities</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Provide accurate information about vehicles listed.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Upload only genuine photos, videos, and documents.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Complete required KYC verification (e.g. dealer license if applicable).</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Respond to buyer inquiries in a timely manner.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Payments & Transactions</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Payments are processed via trusted gateways (bank transfer, card, wallet).</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>[Your Marketplace Name] is not responsible for disputes between buyers and sellers regarding vehicle condition, delivery, or warranty.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>In future versions of the platform may support cryptocurrency payments.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Prohibited Activities</h2>
            <p className="text-gray-700 mb-3">Users may not:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Post fake, misleading, or fraudulent listings</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Engage in illegal activities, money laundering, or scams</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Spam, harass, or violate others rights</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Use abusive, harmful, or offensive language in chats or reviews</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Actions may result in account suspension and legal action</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on our platform (designs, logos, text, graphics, software) is owned by [Your Marketplace Name]. Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>We do not guarantee that the site is error-free, or accident-free, or legally compliant.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>[Your Marketplace Name] shall not be held liable for any direct, indirect, or consequential damages arising from transactions or platform use.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed under the laws of [Insert Country]. Any disputes will be resolved in the courts of [Insert Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We may revise these Terms from time to time. Updates will be posted on our website/app, and continued use of the platform indicates acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Termination</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact:
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

export default TermsConditions;