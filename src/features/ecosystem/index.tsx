export default function EcosystemPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            BASTION Ecosystem
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
  
            {[
              "BA FC UMUM",
              "BA FC U35+",
              "BA FC JUNIOR",
              "Open Gate Nobar",
              "Cari Lawan Sparing"
            ].map(item => (
              <div key={item} className="border rounded-xl p-6 font-semibold">
                {item}
              </div>
            ))}
  
            <div className="pt-12">
              <h2 className="text-2xl font-bold">
                Tentang BASTION
              </h2>
              <p className="mt-4 opacity-70 leading-relaxed">
                BASTION adalah identitas komunitas resmi Borneo Anfield.
                Terstruktur. Terjadwal. Terbuka untuk berkembang.
              </p>
            </div>
  
          </div>
        </section>
  
      </div>
    )
  }