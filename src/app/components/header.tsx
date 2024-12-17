import Link from "next/link"

export default function Header(){
    return(
<div className="bg-[#FFFFFF] text-gray-500 flex flex-col lg:flex-row lg:h-14 text-[16px] justify-around items-center p-2 space-y-2 lg:space-y-0">
    <div className="w-full lg:w-auto">
        <ul className="flex flex-wrap justify-center lg:justify-start lg:space-x-5 space-x-2 items-center">
            <Link href={"/home"}>
                <li className="focus:text-teal-500 hover:text-teal-500">Home</li>
            </Link>
            <Link href={"/shop"}>
                <li className="focus:text-teal-500 hover:text-teal-500">Shop</li>
            </Link>
            <Link href={"/products"}>
                <li className="focus:text-teal-500 hover:text-teal-500">Product</li>
            </Link>
            <Link href={"/home"}>
                <li className="focus:text-teal-500 hover:text-teal-500">Pages</li>
            </Link>
            <Link href={"/about"}>
                <li className="focus:text-teal-500 hover:text-teal-500">About</li>
            </Link>
        </ul>
    </div>
    <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-1">
        <p>Contact:</p>
        <p className="text-slate-900">(808) 555-0111</p>
    </div>
</div>

    )
}