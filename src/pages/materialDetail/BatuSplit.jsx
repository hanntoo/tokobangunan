import React from "react";

const BatuSplit = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Material Batu Split</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Batu Split"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Batu Split</h2>
              <p className="text-lg text-gray-700 mb-4">
                Batu split merupakan material konstruksi penting yang digunakan dalam campuran beton, pondasi bangunan, dan jalan. Memiliki ketahanan dan kualitas terbaik untuk berbagai proyek besar.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Ukuran batu: 1-2 cm, 2-3 cm, dan 3-5 cm</li>
                <li>Cocok untuk konstruksi jalan, jembatan, dan pondasi</li>
                <li>Kualitas terbaik dengan daya tahan tinggi</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Batu split kami diproduksi dengan standar kualitas tinggi untuk memastikan kekuatan dan keandalan dalam setiap proyek konstruksi.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 750.000/ton</span>
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
              Kami menyediakan berbagai jenis batu split dengan ukuran yang dapat disesuaikan dengan kebutuhan proyek Anda.
            </p>
            <p className="text-gray-700 mb-4">
              Pengiriman cepat dan tepat waktu dengan dukungan armada pengiriman yang handal.
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

export default BatuSplit;
