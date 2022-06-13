import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";

const Header = () => {
    return <>
        <div className="flex flex-grow bg-amazon_dark pt-2 items-center p-2">
            <div className="mt-2 mr-2 flex-grow sm:flex-grow-0">
                <Image height={"40"} width={"150"} className={"cursor-pointer"} objectFit={"contain"} src={"https://lh3.googleusercontent.com/W___zmsZ4S_JDLOjhkdkkEcMm1xmDOBSrmwvJzjrkz9A3g33yX7xAmia6HS4hWbfENBQBXFF_J4KGYFIPxuMF6zE5GOSY8JiLQ=s0"}></Image>
            </div>
            <div className="hidden sm:flex cursor-pointer items-center flex-grow rounded-md h-10 bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 w-6 flex-grow  h-full rounded-l-md focus:outline-none" type="text"/>
                <SearchIcon className={"h-12 p-4"}/>
            </div>
            <div className="flex text-white items-center text-xs space-x-6 mx-6 md:text-sm">
                <div className="cursor-pointer hover:underline">
                    <p>
                        Ciao Lorenzo
                    </p>
                    <p className="font-extrabold">
                        Account e liste
                    </p>
                </div>
                <div className="cursor-pointer hover:underline">
                    <p>
                        Resi e
                    </p>
                    <p className="font-extrabold">
                        ordini
                    </p>
                </div>
                <div className="cursor-pointer hover:underline flex items-center">
                    <p>
                        <ShoppingCartIcon className="h-8"/>

                    </p>
                    <p className="font-extrabold">
                        Carrello
                    </p>
                </div>
            </div>
        </div>
        <div className="flex text-xs bg-amazon_light p-1 text-white">
            <p className="cursor-pointer hover:underline flex items-center p-2 space-x-3">
                <MenuIcon className="h-5"/>
                Tutte
            </p>
            <p className="cursor-pointer hover:underline flex items-center p-2 space-x-3">
                Novità
            </p>
            <p className="cursor-pointer hover:underline flex items-center p-2 space-x-3">
                Acquista di nuovo
            </p>
            <p className="cursor-pointer hover:underline flex items-center p-2 space-x-3">
                Servizio Clienti
            </p>
            <p className="cursor-pointer hover:underline flex items-center p-2 space-x-3">
                Offerte
            </p>
            <p className="cursor-pointer hidden lg:inline-flex hover:underline flex items-center p-2 space-x-3">
                Bestseller
            </p>
            <p className="cursor-pointer hidden lg:inline-flex hover:underline flex items-center p-2 space-x-3">
                Idee Regalo
            </p>
            <p className="cursor-pointer hidden lg:inline-flex hover:underline flex items-center p-2 space-x-3">
                Amazon Basics
            </p>
            <p className="cursor-pointer hidden lg:inline-flex hover:underline flex items-center p-2 space-x-3">
                Salute e cura della casa
            </p>
            <p className="cursor-pointer hidden lg:inline-flex hover:underline flex items-center p-2 space-x-3">
                Informatica
            </p>
        </div>
    </>
}

export default Header;
