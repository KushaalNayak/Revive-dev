export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0B0B0B] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#373737] border-t-[#00FF66] rounded-full animate-spin" />
        <span className="text-[#00FF66] font-bold tracking-widest uppercase text-[12px] animate-pulse">Loading...</span>
      </div>
    </div>
  )
}
