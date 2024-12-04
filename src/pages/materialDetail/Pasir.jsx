import React from "react";

const Pasir = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Material Pasir</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Pasir"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Pasir Berkualitas</h2>
              <p className="text-lg text-gray-700 mb-4">
                Pasir adalah bahan material penting dalam proyek konstruksi, sering digunakan dalam campuran beton, plester, dan kebutuhan lainnya. Kami menyediakan pasir berkualitas tinggi yang bersih dan bebas dari lumpur.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Kualitas pasir: <span className="font-semibold">Super</span></li>
                <li>Kandungan lumpur minimal</li>
                <li>Pasir halus dan kasar tersedia</li>
                <li>Pengiriman cepat dan tepat waktu</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Pasir ini sangat cocok untuk berbagai jenis proyek konstruksi besar dan kecil, termasuk pembangunan rumah, jalan, dan infrastruktur lainnya.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 500.000/truk</span>
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
              Kami juga menyediakan layanan pengiriman cepat dan dapat diandalkan ke berbagai lokasi proyek Anda.
            </p>
            <p className="text-gray-700 mb-4">
              Semua material yang kami sediakan memiliki standar kualitas tinggi dan harga kompetitif untuk mendukung kelancaran proyek konstruksi Anda.
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

export default Pasir;
