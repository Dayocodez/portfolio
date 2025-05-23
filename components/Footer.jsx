
'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ismael Dayo</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer with a passion for crafting innovative solutions and thriving in collaborative team environments.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Salaudeenismai7" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747340524/twitter3_jc1mhg.jpg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/ismaiheel-dayo-00180b1a1/" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745329839/image-linkedin-icon_mdnui4.webp" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://github.com/Dayocodez" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745329761/images-github-icon_fzhf7k.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href="https://www.tiktok.com/@dayocodez" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747339945/tik-tok-logo-6fh_tkirvk.png" alt="TikTok" width={24} height={24} />
              </a>
              <a href="https://web.facebook.com/salaudeenismaiheel.dayo" target="_blank" rel="noopener noreferrer">
                <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747340159/facebook-logo-facebook-icon-transparent-free-png_sge8n4.webp" alt="Facebook" width={24} height={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-indigo-400">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-indigo-400">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-indigo-400">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-indigo-400">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
          
              <li className="flex items-start">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746478286/location-location-pin-location-icon-transparent-free_pimpi0.webp"
                  alt="Location"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <a
                  href="https://www.google.com/maps/place/Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  Lagos, Nigeria
                </a>
              </li>

              {/* Email */}

              <li className="flex items-start">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746477933/Email_av0u5q.jpg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <a
                  href="mailto:ismaiheel4real2008@gmail.com"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  ismaiheel4real2008@gmail.com
                </a>
              </li>

              {/* Phone */}

              <li className="flex items-start">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746752451/phone-icon-in-trendy-flat-style-free_tg9o14.webp"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <a
                  href="tel:+2348032159449"
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  +234-(80)-3215-9449
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
