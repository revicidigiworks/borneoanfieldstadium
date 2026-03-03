export default function FacilitiesPage() {
    return (
      <div className="flex flex-col">
  
        {/* HERO */}
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Stadium Facilities
          </h1>
        </section>
  
        {/* FIELD SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
  
            {["Field A", "Field B"].map(field => (
              <div key={field} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-80 bg-gray-200 rounded-xl" />
                <div>
                  <h2 className="text-3xl font-bold">{field}</h2>
                  <p className="mt-6 opacity-70 leading-relaxed">
                    Lapangan standar kompetisi dengan sistem perawatan
                    terstruktur untuk menjaga kualitas permainan.
                  </p>
                </div>
              </div>
            ))}
  
          </div>
        </section>
  
        {/* PREMIUM INTERIOR */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">
              Premium Interior
            </h2>
  
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Changing Room",
                "Shower Room",
                "Jersey Room",
                "Toilet Pria & Wanita",
                "Musholla",
                "Free Charging Area"
              ].map(item => (
                <div key={item} className="h-56 bg-white rounded-xl border p-6 font-semibold flex items-end">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* EXTERNAL AREA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {["Parkiran Super Luas", "Warkops Football Café"].map(area => (
              <div key={area} className="h-72 bg-gray-200 rounded-xl p-6 flex items-end font-semibold">
                {area}
              </div>
            ))}
          </div>
        </section>
  
      </div>
    )
  }