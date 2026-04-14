import { ScheduleSlot } from "@/types/schedule";

class ScheduleService {
  async getByDate(date: string): Promise<ScheduleSlot[]> {
    try {
      const res = await fetch(
        `https://borneoanfieldstadium.com/api/v1/jadwal?date=${date}`
      );
      const data = await res.json();

      const bookings = data.bookings || [];

      const mapped: ScheduleSlot[] = bookings.map((item: any, index: number) => {
        const startHour = item.jam.split(":")[0];
        const nextHour = String((Number(startHour) + 1) % 24).padStart(2, "0");

        const start = item.jam;
        const end = `${nextHour}:00`;

        return {
          id: `${item.date}-${item.lapangan}-${item.jam}-${index}`,
          time: `${start} - ${end}`,
          field: item.lapangan === "1" ? "A" : "B",
          date: item.date,
          start,
          end,
          status: "booked",
          bookedBy: item.nama,
        };
      });

      return mapped;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch schedule");
    }
  }
}


export const scheduleService = new ScheduleService();