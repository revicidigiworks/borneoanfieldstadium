import { ScheduleSlot } from "@/types/schedule"

export function getUpcomingSlot(slots: ScheduleSlot[]) {
  const now = new Date()

  return slots
    .filter(slot => new Date(`${slot.date}T${slot.start}`) > now)
    .sort(
      (a, b) =>
        new Date(`${a.date}T${a.start}`).getTime() -
        new Date(`${b.date}T${b.start}`).getTime()
    )[0]
}