export default function AboutPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Borneo Anfield
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
  
            <div>
              <h2 className="text-2xl font-bold">Story</h2>
              <p className="mt-4 opacity-70">
                Dibangun sebagai stadion dengan sistem operasional profesional.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold">Vision</h2>
              <p className="mt-4 opacity-70">
                Menjadi pusat ekosistem sepak bola terstruktur di Kalimantan.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold">Safety & Credibility</h2>
              <ul className="mt-4 space-y-2 opacity-70 list-disc pl-5">
                <li>Perlengkapan medis lengkap</li>
                <li>Tim terlatih</li>
                <li>Ambulans siaga</li>
                <li>Sistem perlindungan petir</li>
                <li>Bantalan & pagar pengaman</li>
                <li>SOP darurat cedera</li>
              </ul>
            </div>
  
          </div>
        </section>
  
      </div>
    )
  }