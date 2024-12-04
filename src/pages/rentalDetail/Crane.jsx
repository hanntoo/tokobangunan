import React from "react";

const Crane = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Rental Crane</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Crane"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Crane</h2>
              <p className="text-lg text-gray-700 mb-4">
                Crane adalah alat berat yang dirancang untuk mengangkat dan memindahkan beban berat dalam berbagai proyek konstruksi. Dengan teknologi modern, crane kami memberikan kemudahan dan keamanan untuk semua jenis pekerjaan angkat.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Kapasitas angkat maksimal: <span className="font-semibold">50 ton</span></li>
                <li>Jangkauan lengan hingga <span className="font-semibold">30 meter</span></li>
                <li>Mesin berkekuatan tinggi dan hemat bahan bakar</li>
                <li>Sistem kendali canggih dan keamanan berlapis</li>
                <li>Operasi stabil dalam berbagai kondisi cuaca</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Cocok untuk proyek besar seperti pembangunan gedung, infrastruktur jalan, jembatan, dan berbagai proyek lainnya yang membutuhkan efisiensi dan ketepatan.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 15.000.000/hari</span>
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
              Kami juga menyediakan berbagai jenis crane lain dengan kapasitas dan spesifikasi berbeda untuk memenuhi kebutuhan khusus proyek Anda.
            </p>
            <p className="text-gray-700 mb-4">
              Semua crane yang kami sewakan dilengkapi dengan operator berpengalaman yang telah terlatih untuk memastikan pengoperasian yang aman dan efisien.
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

export default Crane;
