import React from "react";

const Material = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Jual Material Konstruksi</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Material"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pasir</h3>
              <p className="text-gray-700 mb-4">Pasir berkualitas untuk berbagai kebutuhan konstruksi Anda.</p>
              <a
                href="/material/pasir"
                className="text-blue-600 hover:underline"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Material"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Batu Split</h3>
              <p className="text-gray-700 mb-4">Batu split untuk pondasi dan campuran beton dengan kualitas terbaik.</p>
              <a
                href="/material/batusplit"
                className="text-blue-600 hover:underline"
              >
                Selengkapnya
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Material"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Semen</h3>
              <p className="text-gray-700 mb-4">Semen berkualitas untuk proyek konstruksi Anda.</p>
              <a
                href="/material/semen"
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

export default Material;
