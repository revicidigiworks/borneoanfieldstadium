import { ScheduleSlot } from "@/types/schedule"

export function getUpcomingSlot(slots: ScheduleSlot[]): ScheduleSlot | undefined {
  const now = new Date()

  const upcoming = slots
    .filter((slot) => {
      const slotTime = new Date(`${slot.date}T${slot.start}`)
      return slotTime > now
    })
    .sort(
      (a, b) =>
        new Date(`${a.date}T${a.start}`).getTime() -
        new Date(`${b.date}T${b.start}`).getTime()
    )

  return upcoming[0]
}