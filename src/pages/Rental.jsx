import React from "react";

const Rental = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Layanan Rental Alat Berat</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contoh Card Rental */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Alat Berat"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Excavator</h3>
              <p className="text-gray-700 mb-4">Excavator berkualitas tinggi untuk berbagai kebutuhan konstruksi.</p>
              <p className="text-gray-900 font-semibold mb-4">Harga: Rp 5.500.000/hari</p>
              <a
                href="/rental/excavator"
                className="text-blue-600 hover:underline"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          {/* Card lainnya bisa ditambahkan di sini */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Alat Berat"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bulldozer</h3>
              <p className="text-gray-700 mb-4">Bulldozer dengan performa tinggi untuk meratakan tanah dan lainnya.</p>
              <p className="text-gray-900 font-semibold mb-4">Harga: Rp 7.000.000/hari</p>
              <a
                href="/rental/bulldozer"
                className="text-blue-600 hover:underline"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          {/* Card tambahan */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Alat Berat"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Crane</h3>
              <p className="text-gray-700 mb-4">Crane untuk proyek konstruksi besar dan pekerjaan berat lainnya.</p>
              <p className="text-gray-900 font-semibold mb-4">Harga: Rp 15.000.000/hari</p>
              <a
                href="/rental/crane"
                className="text-blue-600 hover:underline"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
