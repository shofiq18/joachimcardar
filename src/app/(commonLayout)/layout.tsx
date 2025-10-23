import { Toaster } from "react-hot-toast";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      {children}
      <Footer />
    </div>
  );
}
