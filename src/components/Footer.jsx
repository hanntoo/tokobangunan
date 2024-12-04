import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informasi Perusahaan */}
          <div>
            <h3 className="text-lg font-bold mb-2">Rental & Material</h3>
            <p className="text-gray-600 mb-4">
              Solusi terbaik untuk kebutuhan rental alat berat dan jual beli material konstruksi.
            </p>
          </div>

          {/* Menu Navigasi */}
          <div>
            <h3 className="text-lg font-bold mb-2">Navigasi</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Rental
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Material
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" /> Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Informasi Kontak dan Sosial Media */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Kontak Kami</h3>
            <p className="flex items-center text-gray-600 mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@rentalmaterial.com
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> (021) 123-4567
            </p>
            <p className="flex items-center text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" /> Jl. Konstruksi No. 123, Jakarta
            </p>
            
            {/* Tombol Sosial Media */}
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF}/>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Rental & Material. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
