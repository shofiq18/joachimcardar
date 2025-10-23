/* eslint-disable @next/next/no-html-link-for-pages */
"use client"; // This is a client component because it uses state for the accordion

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FiArrowUpRight, FiX, FiArrowRight } from 'react-icons/fi'; // Using react-icons for arrows

// --- Sample Data ---
// In a real application, this data would likely come from a CMS or an API

const faqData = [
  {
    question: 'Pellentesque ac bibendum tortor?',
    answer: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',
  },
  {
    question: 'How do I list my car for sale?',
    answer: 'To list your car, you need to create an account, go to the "Sell Your Car" page, and fill out the details including photos, price, and vehicle information. Our team will review it before it goes live.',
  },
  {
    question: 'What are the fees for selling a car?',
    answer: 'We have a transparent fee structure. There is a small listing fee and a success-based commission only when your car is sold. You can find the full details on our pricing page.',
  },
  {
    question: 'How do you ensure the safety of transactions?',
    answer: 'All transactions are handled through a secure escrow service. We hold the payment until you have confirmed receipt and inspection of the vehicle, ensuring peace of mind for both buyer and seller.',
  },
  {
    question: 'Can I inspect the car before buying?',
    answer: 'Absolutely. We encourage all potential buyers to schedule an inspection. You can contact the seller directly through our platform to arrange a suitable time and location.',
  },
];

const latestArticles = [
    {
        category: 'GUIDES',
        title: 'You Are Never "Done" Innovating',
        author: 'Md Shakil',
        date: 'Jan 20',
        comments: 0,
        imageUrl: '/fir-car.jpg',
    },
    {
        category: 'GUIDES',
        title: 'How to Walk Around the Office',
        author: 'Md Shakil',
        date: 'Jan 20',
        comments: 0,
        imageUrl: '/gold-car.jpeg',
    },
    {
        category: 'GUIDES',
        title: 'The Daring Gmail Strategy',
        author: 'Md Shakil',
        date: 'Jan 20',
        comments: 0,
        imageUrl: '/white-car.jpeg',
    },
];

// --- FAQ Page Component ---

const FAQPage: NextPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Frequently Asked Questions - My Car Website</title>
        <meta name="description" content="Find answers to common questions about buying and selling cars." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-teal-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          For no time wise pregnant until for itself porta justo congue pure pretium ligula
        </p>
        <nav className="mt-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">&gt;</span>
          <span>FAQ</span>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto  py-24">
        {/* FAQ Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Frequently Asked Question and Answer!
            </h2>
            <div className="my-8 rounded-lg overflow-hidden">
                <Image 
                    src="/team-meeting.webp" 
                    alt="Team meeting" 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-gray-600">Still Have Questions? We are Here to Help!</p>
            <a href="/contact" className="text-teal-600 font-bold mt-2 flex items-center group">
              Contact Us
              <FiArrowUpRight size={20} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Right Column (Accordion) */}
          <div className="flex flex-col space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  {openIndex === index ? ( 
                     <FiX className="text-gray-500" />
                  ) : (
                     <FiArrowRight className="text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="mt-24 pt-16 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-center text-[#2D2D2D]">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {latestArticles.map((post, index) => (
              <div key={index} className="flex flex-col">
                  <div className="rounded-lg overflow-hidden mb-4">
                      <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="w-full h-[300px] object-cover"/>
                  </div>
                  <p className="text-teal-500 font-semibold text-[16px]">{post.category}</p>
                  <h3 className="text-xl font-semibold mt-2 text-[#2D2D2D]">{post.title}</h3>
                  <div className="flex items-center mt-4">
                    <Image src="/placeholder-images/author.png" alt={post.author} width={40} height={40} className="rounded-full"/>
                    <div className="ml-4 text-sm">
                      <p className="font-semibold text-gray-800">{post.author}</p>
                      <p className="text-gray-500">{post.date} &middot; {post.comments} comments</p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="bg-[#00695C] text-white py-3 px-8 rounded-md hover:bg-teal-700 transition-colors"
            >
              View All Blogs
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;