// import { ScheduleSlot } from "@/types/schedule"

// interface Props {
//   slot: ScheduleSlot
// }

// export function SlotCard({ slot }: Props) {
//   const statusStyle = {
//     AVAILABLE: "bg-[#00C5C8]/20 text-[#00C5C8]",
//     BOOKED: "bg-[#00AFB2]/20 text-[#00AFB2]",
//     ONGOING: "bg-[#00C5C8] text-black"
//   }

//   return (
//     <div className="bg-white p-4 border rounded-lg flex justify-between items-center">
//       <div>
//         <p className="font-semibold">
//           Field {slot.field}
//         </p>
//         <p className="text-sm opacity-70">
//           {slot.start} - {slot.end}
//         </p>
//         {slot.bookedBy && (
//           <p className="text-xs mt-1 opacity-60">
//             {slot.bookedBy} — {slot.eventType}
//           </p>
//         )}
//       </div>

//       <span
//         className={`text-xs px-3 py-1 font-medium rounded-full ${statusStyle[slot.status]}`}
//       >
//         {slot.status}
//       </span>
//     </div>
//   )
// }