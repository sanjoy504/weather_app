function LoadingSkleaton() {
  return (
    <div className="w-full flex justify-center p-10">

    <div className="w-full max-w-screen-sm bg-gray-200 animate-pulse  p-10 rounded-xl border">

        <div className="flex justify-between items-center gap-2">

            <div className="flex flex-col gap-3">
                <span className="w-32 h-7 bg-gray-300"></span>
                <span className="w-40 h-5 bg-gray-300"></span>
            </div>

            <div className="flex flex-col gap-3">
                <div className="w-20 h-20 rounded-full bg-gray-400"></div>
                <span className="w-40 h-5 bg-gray-300"></span>
            </div>

        </div>
       
        <div className="flex justify-between mt-12">

            <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <span className="w-24 h-3 bg-gray-300"></span>
            </div>

        </div>
    </div>

</div>
  )
}

export default LoadingSkleaton
