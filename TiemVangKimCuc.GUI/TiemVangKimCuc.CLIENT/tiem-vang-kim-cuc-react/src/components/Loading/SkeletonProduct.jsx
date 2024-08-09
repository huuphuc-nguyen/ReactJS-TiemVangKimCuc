const Skeleton = () => {
    return (
      <div className="shadow rounded-md p-4 max-w-[240px] w-[150px] lg:w-[240px] h-[230px] lg:h-[320px]">
        <div className="animate-pulse flex flex-col justify-center items-center">
          <div className="rounded-full bg-slate-200 h-40 w-40 my-5"></div>
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
  