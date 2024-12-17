export default function Footer(){
    return(
        <div className="justify-around items-center lg:px-56 lg:py-7 px-4 space-y-8 pt-4">
        <div className="text-left flex flex-col lg:flex-row lg:flex-wrap lg:space-x-12">
            <div className="space-y-4 flex-wrap">
                <div className="flex space-x-2 items-center">
                    <img src="/images/b.png" alt="logo" />
                    <p className="text-[18px] font-medium">Comforty</p>
                </div>
                <p className="text-[12px] opacity-50">
                    Vivamus tristique odio sit amet velit semper, <br /> eu posuere turpis interdum. <br />
                    Cras egestas purus
                </p>
                <img src="/images/g.png" alt="social Links" className="h-8" />
            </div>
            <div className="flex-wrap space-y-2 text-[12px] mt-4 lg:mt-0">
                <h3 className="opacity-50">Category</h3>
                <ul className="space-y-1">
                    <li>Sofa</li>
                    <li>Armchair</li>
                    <li>Wing Chair</li>
                    <li className="text-teal-600 underline">Desk Chair</li>
                    <li>Wooden Chair</li>
                    <li>Park Bench</li>
                </ul>
            </div>
            <div className="flex-wrap space-y-2 text-[12px] mt-4 lg:mt-0">
                <h3 className="opacity-50">Support</h3>
                <ul className="space-y-1">
                    <li>Help & Support</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="flex-wrap space-y-3 text-[12px] mt-4 lg:mt-0">
                <h3 className="opacity-50">Newsletter</h3>
                <div className="flex space-x-3 flex-wrap space-y-3">
                    <input
                        placeholder="Your Email"
                        className="outline-1 outline rounded-md outline-slate-400 px-7 py-2 w-full lg:w-auto"
                    />
                    <button className="rounded-lg bg-teal-600 text-center text-slate-50 font-medium px-3 py-2 w-full lg:w-auto">
                        Subscribe
                    </button>
                </div>
                <p className="opacity-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.
                </p>
            </div>
        </div>
        <div className="border-b-2 mt-8"></div>
        <div className="flex justify-center py-5 space-x-1">
            <p className="text-[12px] opacity-50">
                @ 2021 - Blogy - Designed & Developed by
            </p>
            <span className="opacity-90 text-[12px]">Zakirsoft</span>
        </div>
    </div>
    
    )
}