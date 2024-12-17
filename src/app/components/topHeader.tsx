export default function TopHeader(){
    return(
        <div className="bg-[rgb(39,35,67)] flex flex-col lg:flex-row justify-around items-center text-[14px] text-slate-50 h-auto lg:h-10 p-2 lg:p-0 space-y-3 lg:space-y-0">
        <div className="flex space-x-2 items-center text-center">
            <img src="/images/a.png" alt="check" className="w-5 h-5" />
            <p className="m-0">Free shipping on all orders over $50</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end space-x-3 lg:space-x-8 items-center">
            <button className="flex items-center">
                Eng
                <img src="/images/c.png" alt="vector" className="ml-1 lg:ml-2 w-3 h-3" />
            </button>
            <button>FAQs</button>
            <button className="flex items-center">
                <img src="/images/d.png" alt="Need help icon" className="mr-1 w-4 h-4" />
                Need Help
            </button>
        </div>
    </div>
    
    )
}