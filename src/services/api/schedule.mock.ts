import { ScheduleSlot } from "@/types/schedule"

export const mockSchedule: ScheduleSlot[] = [
  {
    id: "1",
    field: "A",
    date: "2026-03-03",
    start: "18:00",
    end: "19:00",
    time: "18:00 - 19:00",
    status: "BOOKED",
    bookedBy: "Komunitas X",
    eventType: "SPARING"
  },
  {
    id: "2",
    field: "B",
    date: "2026-03-03",
    start: "19:00",
    end: "20:00",
    time: "19:00 - 20:00",
    status: "AVAILABLE"
  },
  {
    id: "3",
    field: "A",
    date: "2026-03-04",
    start: "17:00",
    end: "18:00",
    time: "17:00 - 18:00",
    status: "BOOKED",
    bookedBy: "BA FC UMUM",
    eventType: "TRAINING"
  }
]