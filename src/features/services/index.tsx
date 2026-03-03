const services = [
    {
      name: "Sewa Sepatu",
      price: "Mulai 30K / match"
    },
    {
      name: "Sewa Rompi & Jersey",
      price: "Mulai 25K / set"
    },
    {
      name: "Wasit Profesional",
      price: "150K / match"
    },
    {
      name: "Live YouTube Streaming",
      price: "300K / match"
    },
    {
      name: "Fotografer",
      price: "250K / match"
    }
  ]
  
  export default function ServicesPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Commercial Services
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-12">
  
            {services.map(service => (
              <div key={service.name} className="border rounded-xl p-8">
                <div className="h-48 bg-gray-200 rounded-lg mb-6" />
  
                <h2 className="text-2xl font-bold">
                  {service.name}
                </h2>
  
                <p className="mt-4 opacity-70">
                  Layanan profesional untuk mendukung pengalaman pertandingan Anda.
                </p>
  
                <div className="mt-6 font-semibold text-[#00C5C8]">
                  {service.price}
                </div>
  
                <a
                  href="#"
                  className="inline-block mt-6 bg-black text-white px-6 py-3 font-semibold"
                >
                  Book Service
                </a>
              </div>
            ))}
  
          </div>
        </section>
  
      </div>
    )
  }