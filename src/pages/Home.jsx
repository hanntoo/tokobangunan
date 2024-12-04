import React from 'react';

const Home = () => {
    return (
      <div className="bg-gray-100 min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Hero Image"
              className="w-full md:w-1/2 rounded-md mb-6 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">Selamat Datang di Rental & Material</h1>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                Solusi terbaik untuk rental alat berat dan jual beli material berkualitas.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Lihat Katalog
              </a>
            </div>
          </div>
  
          {/* Section: Layanan Kami */}

          <div className="mt-20 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Layanan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card: Rental Alat Berat */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Rental Alat Berat"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Rental Alat Berat</h3>
                <p className="text-gray-700 mb-4">
                  Berbagai macam alat berat siap disewakan untuk kebutuhan proyek Anda.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Lihat detail</a>
              </div>
              {/* Card: Jual Material */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Jual Material"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Jual Material</h3>
                <p className="text-gray-700 mb-4">
                  Material berkualitas dengan harga terbaik untuk kebutuhan konstruksi Anda.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Lihat detail</a>
              </div>
              {/* Card: Layanan Konsultasi */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Layanan Konsultasi"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Layanan Konsultasi</h3>
                <p className="text-gray-700 mb-4">
                  Konsultasi dengan profesional untuk solusi proyek konstruksi Anda.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Lihat detail</a>
              </div>
          </div>
        </div>

        {/* Section: About */}
        <div className="mt-16 bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="About Us"
            className="w-full md:w-1/3 rounded-md mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Tentang Kami</h2>
            <p className="text-gray-700 text-lg mb-4">
              Kami adalah perusahaan yang bergerak di bidang rental alat berat dan jual beli material konstruksi. Dengan pengalaman bertahun-tahun, kami menyediakan layanan berkualitas untuk memenuhi kebutuhan proyek konstruksi Anda. Dari penyewaan alat berat hingga penyediaan material bangunan berkualitas, kami berkomitmen untuk memberikan solusi terbaik dengan harga yang kompetitif.
            </p>
            <p className="text-gray-700 text-lg">
              Tim profesional kami siap membantu Anda dalam setiap tahap proyek, mulai dari konsultasi hingga penyediaan peralatan dan material yang Anda butuhkan. Percayakan proyek Anda kepada kami untuk hasil yang maksimal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
