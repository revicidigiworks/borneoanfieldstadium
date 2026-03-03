export default function ProgramPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Official Program
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
  
            <div>
              <h2 className="text-2xl font-bold">
                KJB — Kartu Jaminan Booking
              </h2>
              <p className="mt-4 opacity-70">
                Booking tanpa DP dengan sistem jaminan slot terpercaya.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold">
                BALP — Loyalty Program
              </h2>
              <p className="mt-4 opacity-70">
                Benefit eksklusif untuk pemain dan komunitas aktif.
              </p>
            </div>
  
          </div>
        </section>
  
      </div>
    )
  }