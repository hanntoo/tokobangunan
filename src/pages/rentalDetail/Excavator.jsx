import React from "react";

const Excavator = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Rental Excavator</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Excavator"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Excavator</h2>
              <p className="text-lg text-gray-700 mb-4">
                Excavator adalah alat berat yang digunakan untuk menggali tanah, memindahkan material, dan berbagai tugas konstruksi lainnya. Excavator kami hadir dengan teknologi terkini untuk efisiensi dan produktivitas.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Kapasitas bucket: <span className="font-semibold">1,2 m³</span></li>
                <li>Kekuatan gali yang tinggi dan presisi</li>
                <li>Mesin bertenaga besar dengan konsumsi bahan bakar rendah</li>
                <li>Kabin operator nyaman dan dilengkapi kontrol canggih</li>
                <li>Cocok untuk berbagai jenis proyek konstruksi</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Excavator ini ideal untuk pekerjaan penggalian besar seperti fondasi bangunan, jalan, atau proyek irigasi.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 5.500.000/hari</span>
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
              Kami juga menyediakan berbagai jenis excavator dengan spesifikasi berbeda sesuai kebutuhan proyek Anda.
            </p>
            <p className="text-gray-700 mb-4">
              Semua excavator kami dilengkapi operator berpengalaman untuk memastikan pengerjaan yang efisien dan aman.
            </p>
          </div>

          <a
            href="/rental"
            className="mt-8 inline-block bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition"
          >
            Kembali ke daftar alat berat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Excavator;
