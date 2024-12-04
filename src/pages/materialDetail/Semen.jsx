import React from "react";

const Semen = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Material Semen</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Semen"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Semen</h2>
              <p className="text-lg text-gray-700 mb-4">
                Semen adalah bahan utama dalam konstruksi yang digunakan untuk mengikat material seperti batu, pasir, dan kerikil. Semen berkualitas tinggi kami cocok untuk berbagai proyek konstruksi.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Kualitas semen terbaik untuk daya tahan tinggi</li>
                <li>Cocok untuk beton, plester, dan pengerjaan dinding</li>
                <li>Pengikatan kuat dan cepat kering</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Kami menyediakan berbagai tipe semen, seperti semen portland dan semen hidrolik, untuk memenuhi kebutuhan konstruksi Anda.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 65.000/sak</span>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white mt-2 md:mt-0 py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fitur Tambahan</h3>
            <p className="text-gray-700 mb-4">
              Semen kami cocok untuk berbagai proyek konstruksi, baik skala kecil maupun besar.
            </p>
            <p className="text-gray-700 mb-4">
              Pengiriman cepat dan stok selalu tersedia untuk mendukung kebutuhan proyek Anda.
            </p>
          </div>

          <a
            href="/material"
            className="mt-8 inline-block bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition"
          >
            Kembali ke daftar material
          </a>
        </div>
      </div>
    </div>
  );
};

export default Semen;
