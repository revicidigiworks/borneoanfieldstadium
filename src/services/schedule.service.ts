import { ScheduleSlot } from "@/types/schedule"
import { mockSchedule } from "./api/schedule.mock"

class ScheduleService {
  async getAll(): Promise<ScheduleSlot[]> {
    try {
      // nanti ganti ke axios/fetch ke Laravel
      return new Promise(resolve =>
        setTimeout(() => resolve(mockSchedule), 500)
      )
    } catch (error) {
      throw new Error("Failed to fetch schedule")
    }
  }
}

export const scheduleService = new ScheduleService()