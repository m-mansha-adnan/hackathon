export default function MyHome() {
    return (
      <div className="space-y-10">
  <div className="Banner1 flex flex-col lg:flex-row justify-around bg-[#F0F2F3] items-center lg:mx-56 mx-4 rounded">
    <div className="text-left flex flex-col items-start flex-wrap p-8 lg:p-14 space-y-4">
      <p className="text-[11px]">WELCOME TO CHAIRY</p>
      <p className="text-[24px] lg:text-[38px] font-semibold">
        Best Furniture <br />
        Collection For Your <br />
        Interior.
      </p>
      <button className="flex bg-teal-600 px-5 py-2 text-white rounded items-center space-x-2">
        <span>Shop Now</span>
        <img src="/images/h.png" alt="Shop Icon" className="h-4 w-4" />
      </button>
    </div>
    <div className="p-8 lg:p-14">
      <img src="/images/i.png" alt="Furniture Image" className="h-[300px] lg:h-[400px]" />
    </div>
  </div>
  
  <div className="Banner2 lg:mx-56 mx-4 flex flex-wrap justify-center items-center gap-6">
    <div className="flex flex-wrap justify-center space-x-4 lg:space-x-9">
      <img src="/images/j.png" alt="Logo 1" className="h-16 lg:h-24" />
      <img src="/images/k.png" alt="Logo 2" className="h-16 lg:h-24" />
      <img src="/images/l.png" alt="Logo 3" className="h-16 lg:h-24" />
      <img src="/images/m.png" alt="Logo 4" className="h-16 lg:h-24" />
      <img src="/images/n.png" alt="Logo 5" className="h-16 lg:h-24" />
      <img src="/images/o.png" alt="Logo 6" className="h-16 lg:h-24" />
      <img src="/images/p.png" alt="Logo 7" className="h-16 lg:h-24" />
    </div>
  </div>
  
  <div className="Banner3 lg:mx-56 lg:flex flex-wrap text-left space-y-10 px-4 sm:px-6 lg:px-0">
    <div className="flex-wrap space-y-10">
      <h3 className="text-[18px] sm:text-[24px] font-semibold">All Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* <!-- Product Card 1 --> */}
        <div className="img1">
          <div className="relative">
            <img src="/images/q.png" alt="img" className="w-full object-cover rounded-md" />
            <img src="/images/ze.png" className="absolute top-2 left-2 sm:top-4 sm:left-4  " />
          </div>
          <div className="flex justify-between pt-4">
            <div className="text-left text-[10px] sm:text-[12px]">
              <p className="text-teal-500">Library Stool Chair</p>
              <p className="font-semibold">$20</p>
            </div>
            <button className="bg-teal-600 px-2 py-1 rounded sm:px-3 sm:py-2">
              <img src="/images/u.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
         <div className="img2">
                <div className="relative">
                  <img src="/images/r.png" alt="img" />
                  <img src="/images/zf.png" className="absolute top-4 left-4" />
                </div>
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img3">
                <img src="/images/s.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img4">
                <img src="/images/t.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
  </div>
  <div className="Banner4 lg:mx-56 mx-4 flex flex-wrap text-left py-10 space-y-6 justify-center">
    <div className="w-full">
      <h3 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-left">
        Top Categories
      </h3>
    </div>
    <div className="lg:flex lg:flex-nowrap flex-wrap lg:justify-between lg:space-y-0 space-y-3 items-center lg:gap-6">
      <img
        src="/images/v.png"
        alt="chair"
        className="h-[200px] lg:h-[280px] w-auto rounded-md shadow-sm"
      />
      <img
        src="/images/w.png"
        alt="chair"
        className="h-[200px] lg:h-[280px] w-auto rounded-md shadow-sm"
      />
      <img
        src="/images/x.png"
        alt="chair"
        className="h-[200px] lg:h-[280px] w-auto rounded-md shadow-sm"
      />
    </div>
  </div>
  
  <div className="Banner5 flex items-center lg:mx-56 lg:flex flex-wrap p-10 justify-center">
      <div className="flex space-x-4">
          <div className="flex lg:-space-x-80">
              <p className="lg:block hidden uppercase lg:-rotate-90 text-nowrap">Explore new and popular styles</p>
              <img src="/images/y.png" className="h-auto"/>
          </div>
          <div className="flex-wrap space-y-4">
              <img src="/images/z.png"  className="lg:h-[210px] lg:w-[300px] "/>
              <img src="/images/zb.png"  className="lg:h-[210px] lg:w-[300px] " />
          </div>
          <div className="flex-wrap space-y-4">
              <img src="/images/za.png"  className="lg:h-[210px] lg:w-[300px] "/>
              <img src="/images/za.png"  className="lg:h-[210px] lg:w-[300px] "/>
          </div>
      </div>
  </div>
  
  <div className="Banner6 lg:mx-56 lg:flex flex-wrap text-left space-y-10 px-4 sm:px-6 lg:px-0">
    <div className="flex-wrap space-y-10">
      <h3 className="text-[18px] sm:text-[24px] font-semibold">All Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* <!-- Product Card 1 --> */}
        <div className="img1">
          <div className="relative">
            <img src="/images/q.png" alt="img" className="w-full object-cover rounded-md" />
            <img src="/images/ze.png" className="absolute top-2 left-2 sm:top-4 sm:left-4  " />
          </div>
          <div className="flex justify-between pt-4">
            <div className="text-left text-[10px] sm:text-[12px]">
              <p className="text-teal-500">Library Stool Chair</p>
              <p className="font-semibold">$20</p>
            </div>
            <button className="bg-teal-600 px-2 py-1 rounded sm:px-3 sm:py-2">
              <img src="/images/u.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
         <div className="img2">
                <div className="relative">
                  <img src="/images/r.png" alt="img" />
                  <img src="/images/zf.png" className="absolute top-4 left-4" />
                </div>
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img3">
                <img src="/images/s.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img4">
                <img src="/images/t.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="2ndrow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* <!-- Product Card 1 --> */}
    <div className="img1">
      <div className="relative">
        <img src="/images/zc.png" alt="img" className="w-full object-cover rounded-md" />
        <img src="/images/ze.png" className="absolute top-2 left-2 sm:top-4 sm:left-4 " />
      </div>
      <div className="flex justify-between pt-4">
        <div className="text-left text-[10px] sm:text-[12px]">
          <p className="text-teal-500">Library Stool Chair</p>
          <p className="font-semibold">$20</p>
        </div>
        <button className="bg-teal-600 px-2 py-1 rounded sm:px-3 sm:py-2">
          <img src="/images/u.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
           <div className="img2">
                <div className="relative">
                  <img src="/images/zb.png" alt="img" />
                  <img src="/images/zf.png" className="absolute top-4 left-4" />
                </div>
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img3">
                <img src="/images/zd.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="img4">
                <img src="/images/q.png" alt="img" />
                <div className="flex justify-between pt-4">
                  <div className=" text-left text-[12px] ">
                    <p className="opacity-70">Library Stool Chair</p>
                    <p className="font-semibold">$20</p>
                  </div>
                  <div className="">
                    <button className="bg-slate-200 px-1 py-1 rounded">
                      <img src="/images/e.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
      <div className="border-b-2"></div>
      </div>
    );
  }