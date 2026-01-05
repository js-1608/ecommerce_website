import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-3">Logo</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop destination for fashion, electronics, home essentials
            & more. Quality products. Trusted delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a className="hover:text-white" href="#">
              <Facebook size={20} />
            </a>
            <a className="hover:text-white" href="#">
              <Instagram size={20} />
            </a>
            <a className="hover:text-white" href="#">
              <Twitter size={20} />
            </a>
            <a className="hover:text-white" href="#">
              <Linkedin size={20} />
            </a>
            <a className="hover:text-white" href="#">
              <Youtube size={20} />
            </a>
          </div>
          {/* Newsletter */}
          <div className="border-t mt-4 border-gray-800">
            <div className="mt-4">
              <p className="text-sm mb-2">
                Subscribe to get special offers, free giveaways & deals.
              </p>

              <form className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 text-sm focus:outline-none"
                />
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-md text-white text-sm font-medium"
                type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-white">
                Men
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Home & Kitchen
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
