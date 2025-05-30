
import { Music, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blogs", href: "/blogs" }
    ],
    "Policies": [
      { name: "Refund and Return Policy", href: "/refund-return" },
      { name: "Cancellation Policy", href: "/cancellation" },
      { name: "Privacy Policy", href: "/privacy" }
    ],
    "Customer Service": [
      { name: "Help Center", href: "/help" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Track Order", href: "/track" }
    ]
  };

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-orange-400" />
              <h3 className="text-2xl font-bold">
                Soundscape <span className="text-orange-400">Nepal</span>
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for premium musical instruments in Nepal. 
              Bringing quality music equipment to passionate musicians.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+977 1-4444444</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">info@soundscapenepal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Soundscape Nepal. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ♪ for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
