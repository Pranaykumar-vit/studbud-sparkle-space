import { Globe, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              {["Features", "Pricing", "Use Cases", "Resources"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              {["Help Center", "Terms", "Privacy", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@studbud.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  www.studbud.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} StudBud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};