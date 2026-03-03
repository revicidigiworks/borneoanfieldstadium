import { useEffect, useState } from "react"
import { scheduleService } from "@/services/schedule.service"
import { ScheduleSlot, FieldType } from "@/types/schedule"
import { SlotCard } from "@/components/schedule/SlotCard"

export default function SchedulePage() {
  const [slots, setSlots] = useState<ScheduleSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fieldFilter, setFieldFilter] = useState<FieldType | "ALL">("ALL")
  const [dateFilter, setDateFilter] = useState<string>("")

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await scheduleService.getAll()
        setSlots(data)
      } catch (err) {
        setError("Failed to load schedule.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredSlots = slots.filter(slot => {
    const matchField =
      fieldFilter === "ALL" || slot.field === fieldFilter

    const matchDate =
      !dateFilter || slot.date === dateFilter

    return matchField && matchDate
  })

  if (loading)
    return <div className="p-8 text-center">Loading schedule...</div>

  if (error)
    return <div className="p-8 text-center text-red-500">{error}</div>

  if (!filteredSlots.length)
    return <div className="p-8 text-center">No schedule available.</div>

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Match Schedule</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select
          className="border p-2 rounded"
          onChange={e => setFieldFilter(e.target.value as any)}
        >
          <option value="ALL">All Fields</option>
          <option value="A">Field A</option>
          <option value="B">Field B</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          onChange={e => setDateFilter(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredSlots.map(slot => (
          <SlotCard key={slot.id} slot={slot} />
        ))}
      </div>
    </section>
  )
}