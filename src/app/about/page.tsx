export default function About(){
    return(
        <div className="space-y-16">
 <div className="Banner1 lg:mx-56 lg:flex flex-wrap text-left space-x-4 pt-16">
    <div className="lg:flex lg:flex-nowrap m-2 flex-wrap lg:space-x-4">
        <div className="bg-[#007580] text-white h-auto lg:h-[350px] w-full lg:w-[450px]">
            <div className="items-center p-10 space-y-4">
                <h3 className="font-semibold text-[20px]">About Us - Comforty</h3>
                <p className="text-[12px] opacity-70 text-wrap">
                    At Comforty, we believe that the right chair can transform your space and elevate your comfort. 
                    Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
                </p>
            </div>
            <div className="p-10">
                <button className="bg-[#F9F9F926] px-6 py-3 text-[14px]">View Collection</button>
            </div>
        </div>
        <div className="w-full lg:w-auto">
            <img src="/images/za.png" className="h-auto lg:h-[350px] w-full lg:w-[450px]" />
        </div>
    </div>
</div>

<div className="Banner2 lg:mx-56 lg:flex flex-wrap text-center flex space-x-4 space-y-8">
    <h3 className="font-semibold text-[20px] w-full">What Makes Our Brand Different</h3>
    <div className="flex flex-wrap lg:flex-nowrap text-left text-teal-600 space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="px-5 py-7 bg-[#F9F9F9] space-y-3 m-2 lg:w-auto">
            <img src="/images/zk.png" />
            <p className="text-nowrap">Next day as standards</p>
            <p className="text-[12px] text-wrap">Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="px-5 py-7 bg-[#F9F9F9] space-y-3 m-2 lg:w-auto">
            <img src="/images/zl.png" />
            <p className="text-nowrap">Made by true artisans</p>
            <p className="text-[12px] text-wrap">Handmade crafted goods made with real passion and craftsmanship</p>
        </div>
        <div className="px-5 py-7 bg-[#F9F9F9] space-y-3 m-2 lg:w-auto">
            <img src="/images/zm.png" />
            <p className="text-nowrap">Unbeatable prices</p>
            <p className="text-[12px] text-wrap">For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className="px-5 py-7 bg-[#F9F9F9] space-y-3 m-2 lg:w-auto">
            <img src="/images/zn.png" />
            <p className="text-nowrap">Recycled packaging</p>
            <p className="text-[12px] text-wrap">We use 100% recycled to ensure our footprint is more manageable</p>
        </div>
    </div>
</div>

<div className="Banner3 lg:mx-56 lg:flex flex-wrap text-left flex space-x-4 space-y-8">
    <h3 className="font-semibold text-[20px] m-2">Our Popular Products</h3>
    <div className="flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-3 text-[12px]">
        <div className="space-y-3 w-full lg:w-auto">
            <img src="/images/zo.png" />
            <div className="opacity-60 space-y-1">
                <p>The Poplar suede sofa</p>
                <p>$99.00</p>
            </div>
        </div>
        <div className="space-y-3 w-full lg:w-auto">
            <img src="/images/zp.png" />
            <div className="opacity-60 space-y-1">
                <p>The Dandy Chair</p>
                <p>$99.00</p>
            </div>
        </div>
        <div className="space-y-3 w-full lg:w-auto">
            <img src="/images/zq.png" />
            <div className="opacity-60 space-y-1">
                <p>The Dandy Chair</p>
                <p>$99.00</p>
            </div>
        </div>
    </div>
</div>

            <div className="border-b-2"></div>
        </div>
    )
}