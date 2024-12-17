export default function Shop(){
    return(
        <div className="space-y-16">
   <div className="Banner1 lg:mx-56 lg:flex text-left pt-16">
        <div className="flex flex-wrap justify-evenly space-x-6">
            <div className="w-full lg:w-[450px]">
                <img src="/images/r.png" className="h-[450px] w-full" />
            </div>
            <div className="w-full lg:w-auto flex-wrap p-10">
                <div className="space-y-6">
                    <h3 className="font-semibold text-[35px]">Library Stool Chair</h3>
                    <button className="px-2 py-1 rounded-full bg-teal-600 text-white">$20.00 USD</button>
                    <div className="border-b-2"></div>
                    <p className="opacity-50 text-wrap text-[12px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                        elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br />
                        sit amet, consectetur adipiscing
                    </p>
                    <button className="bg-teal-600 flex space-x-2 items-center px-6 py-1 rounded">
                        <img src="/images/u.png" alt="" />
                        <p className="text-center text-[12px] text-white">Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className="Banner2 lg:mx-56 flex flex-wrap space-y-12 px-4">
    {/* Header Section */}
    <div className="flex justify-between items-center w-full">
        <h3 className="font-semibold text-left text-sm sm:text-base lg:text-lg">FEATURED PRODUCTS</h3>
        <div className="flex items-center space-x-2">
            <p className="text-sm sm:text-base">View all <div className="border-b-2 border-black w-10"></div></p>
           
        </div>
    </div>

    {/* Products Section */}
    <div className="flex flex-wrap lg:flex-nowrap lg:space-x-6 space-y-6 lg:space-y-0">
        {/* Product Cards */}
        {["/images/zd.png", "/images/za.png", "/images/zj.png", "/images/s.png", "/images/zc.png"].map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
                <img src={image} alt="Product" className="w-full h-auto" />
                <div className="flex justify-between items-center text-xs sm:text-sm mt-2">
                    <p className="opacity-70 lg:text-[12px] ">Library Stool Chair</p>
                    <p className="lg:text-[12px]">$99</p>
                </div>
            </div>
        ))}
    </div>
</div>

            <div className="border-b-2"></div> 
        </div>
    )
}