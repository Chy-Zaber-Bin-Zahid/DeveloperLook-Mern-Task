import React from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobeIcon, MenuIcon, UserCircleIcon } from 'lucide-react'
import Image from 'next/image'

function NavbarTop() {
    return (
        <nav className="flex items-center justify-between py-4 max-w-bigScreen mx-auto">
            <div className="pr-24">
                <Image
                    src="/assets/airbnb-logo.svg"
                    alt="Airbnb Logo"
                    width={100}
                    height={100}
                />
            </div>
            <div className="hidden md:flex">
                <Button variant="ghost" className='text-lg font-medium py-5 hover:bg-white'>Stays</Button>
                <Button variant="ghost" className='hover:bg-gray-100 text-lg font-normal text-gray-600 rounded-full py-5'>Experiences</Button>
            </div>
            <div className="flex items-center space-x-2">
                <Button variant="ghost" className='pr-2 hover:bg-gray-100 rounded-full py-5'>Airbnb your home</Button>
                <Button variant="ghost" size="icon" className='m-0 hover:bg-gray-100 rounded-full py-5 px-1'>
                    <GlobeIcon className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-full px-3 py-6 hover:bg-white hover:shadow-md">
                            <MenuIcon className="h-4 w-5 mr-3" />
                            <UserCircleIcon className="h-8 w-8" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 p-0 py-2">
                        <DropdownMenuItem className="font-semibold px-4 py-3">
                            Sign up
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-4 py-3 border-b pb-5">
                            Log in
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-4 py-3 pt-5">
                            Gift cards
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-4 py-3">
                            Airbnb your home
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-4 py-3">
                            Host an experience
                        </DropdownMenuItem>
                        <DropdownMenuItem className="px-4 py-3">
                            Help Center
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default NavbarTop