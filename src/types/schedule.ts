export type FieldType = "A" | "B";

export type SlotStatus = "available" | "booked" | "ongoing";

export interface ScheduleSlot {
  id: string;
  time: string;
  field: FieldType;
  date: string;
  start: string;
  end: string;
  status: SlotStatus;
  bookedBy?: string;
}