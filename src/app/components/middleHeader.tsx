export default function MiddleHeader(){
    return(
        <div className="bg-[#F0F2F3] text-slate-900 flex lg:flex-row justify-between lg:justify-around items-center h-auto lg:h-16 p-4 lg:space-x-60 space-y-4 lg:space-y-0">
        <div className="text-[20px] text-center flex items-center space-x-2">
            <img src="/images/b.png" alt="logo" className="w-8 h-8" />
            <p className="font-medium">Comforty</p>
        </div>
        <div className="flex justify-center lg:justify-end">
            <button className="bg-neutral-50 flex items-center space-x-2 p-2 rounded-md">
                <img src="/images/e.png" alt="cart" className="w-6 h-6" />
                <p className="text-[12px]">Cart</p>
                <img src="/images/f.png" alt="icon" className="w-4 h-4" />
            </button>
        </div>
    </div>
    
    )
}