export default function ContactPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
  
            <div>
              <h2 className="text-xl font-bold">Lokasi</h2>
              <p className="mt-2 opacity-70">
                Borneo Anfield Stadium
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">WhatsApp</h2>
              <a
                href="#"
                className="inline-block mt-3 bg-black text-white px-6 py-3 font-semibold"
              >
                Chat via WhatsApp
              </a>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">Jam Operasional</h2>
              <p className="mt-2 opacity-70">
                08.00 – 23.00 WITA
              </p>
            </div>
  
          </div>
        </section>
  
      </div>
    )
  }