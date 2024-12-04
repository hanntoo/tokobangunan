import React from "react";

const Bulldozer = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Detail Rental Bulldozer</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="md:flex md:space-x-8">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Bulldozer"
              className="w-full md:w-1/2 object-cover mb-6 md:mb-0 rounded-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Bulldozer</h2>
              <p className="text-lg text-gray-700 mb-4">
                Bulldozer adalah alat berat yang digunakan untuk meratakan dan menggusur tanah dalam proyek konstruksi besar. Bulldozer kami kuat dan dapat diandalkan untuk berbagai kebutuhan pekerjaan tanah.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Kapasitas dorong: <span className="font-semibold">20 ton</span></li>
                <li>Mesin berkekuatan tinggi untuk pekerjaan berat</li>
                <li>Sistem kendali presisi untuk operasi akurat</li>
                <li>Operasi stabil di medan berat</li>
                <li>Cocok untuk proyek land clearing dan grading</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Bulldozer ini sangat cocok untuk proyek infrastruktur, pembangunan jalan, dan pengolahan lahan dalam skala besar.
              </p>
              <div className="flex-coloumn md:flex text-center items-center space-x-6 mt-6">
                <span className="text-2xl text-blue-600 font-bold">Rp 7.000.000/hari</span>
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
              Kami menyediakan berbagai tipe bulldozer sesuai dengan kebutuhan proyek Anda, baik dalam ukuran maupun spesifikasi.
            </p>
            <p className="text-gray-700 mb-4">
              Operator berpengalaman kami akan memastikan pekerjaan berjalan dengan lancar dan efisien.
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

export default Bulldozer;
