import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Tentang = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Tentang Kami</h1>
        
        {/* Section: Siapa Kami */}
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Siapa Kami"
            className="w-full md:w-1/3 rounded-md mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Siapa Kami</h2>
            <p className="text-gray-700 text-lg mb-4">
              Kami adalah perusahaan yang bergerak di bidang rental alat berat dan jual beli material konstruksi. Dengan pengalaman bertahun-tahun, kami menyediakan layanan berkualitas untuk memenuhi kebutuhan proyek konstruksi Anda.
            </p>
            <p className="text-gray-700 text-lg">
              Tim profesional kami siap membantu Anda dalam setiap tahap proyek, mulai dari konsultasi hingga penyediaan peralatan dan material yang Anda butuhkan. Percayakan proyek Anda kepada kami untuk hasil yang maksimal.
            </p>
          </div>
        </div>

        {/* Section: Google Maps dan Form Kontak */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Maps */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              title="Lokasi Kami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096173!2d144.95565131590415!3d-37.817327979751716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c3a8f970ed4!2sFederation%20Square!5e0!3m2!1sen!2sid!4v1633077204663!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="mt-3 p-3 flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
              <p className="text-gray-600">Jl. Konstruksi No. 123, Jakarta</p>
            </div>

            {/* Sosial Media Links */}
            <div className="mt-2 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Hubungi Kami</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Email Anda"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Tulis pesan Anda di sini"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
