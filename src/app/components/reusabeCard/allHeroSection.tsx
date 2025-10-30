import Link from 'next/link';
import { ReactNode } from 'react';

interface ContactHeroProps {
  title?: string;
  subtitle?: ReactNode;
  overlayOpacity?: number;
  overlayColor?: string;
  homeLink?: string;
  currentPage?: string;
}

const ContactHero = ({
  title = "",
  subtitle = (
    <></>
  ),
  overlayOpacity = 0.9,
  overlayColor = "#00695C",
  homeLink = "/",
  currentPage = "Contact Us",
}: ContactHeroProps) => {
  return (
    <div
      className="relative min-h-96 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/contact-image.png')",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl md:text-6xl mb-6 font-semibold text-center">{title}</h1>
        <p className="text-gray-300 md:text-xl mt-3 mb-6 text-center max-w-2xl">
          {subtitle}
        </p>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm md:text-base">
          <Link href={homeLink} className="hover:underline transition">
            Home
          </Link>
         <span> &gt; </span>
          <span className="text-gray-300">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactHero;