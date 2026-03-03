const competitions = [
    "Copa 9’s",
    "Borneo Anfield Premier League",
    "Open Team UMUM",
    "Open Team U35+",
    "Open Team Junior",
    "Cari Sparing"
  ]
  
  export default function CompetitionPage() {
    return (
      <div className="flex flex-col">
  
        <section className="bg-[#00C5C8] text-black py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Competition & League
          </h1>
        </section>
  
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {competitions.map(item => (
              <div key={item} className="border p-8 rounded-xl font-semibold">
                {item}
              </div>
            ))}
          </div>
        </section>
  
      </div>
    )
  }