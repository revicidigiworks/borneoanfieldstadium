export type FieldType = "A" | "B"

export type SlotStatus = "AVAILABLE" | "BOOKED" | "ONGOING"

export interface ScheduleSlot {
  time: string
  id: string
  field: FieldType
  date: string
  start: string
  end: string
  status: SlotStatus
  bookedBy?: string
  eventType?: string
}