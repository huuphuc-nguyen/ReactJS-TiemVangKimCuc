const Skeleton = () => {
  return (
    <div className="shadow rounded-md p-4 lg:w-[172px] w-[158px] h-[172px]">
      <div className="animate-pulse flex flex-col justify-center items-center space-y-2">
        <div className="rounded-full bg-slate-200 h-16 w-16"></div>
        <div className="flex-1 space-y-3 py-1 w-full">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
