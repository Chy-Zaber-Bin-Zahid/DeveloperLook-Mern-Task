import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { GlobeIcon, MenuIcon, SearchIcon, UserCircleIcon } from 'lucide-react'
import Image from 'next/image'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'

export default function Navbar() {
    return (
        <div className="">
            <nav className="flex items-center justify-between p-4 max-w-bigScreen mx-auto">
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
                            <DropdownMenuItem className="border-b px-4 py-3">
                                Log in
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="px-4 py-3">
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
            <div className="flex justify-center">
                <div className="flex items-center space-x-4 border rounded-full p-2 shadow-md">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="rounded-full">Where</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <Input placeholder="Search destinations" />
                        </DialogContent>
                    </Dialog>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="rounded-full">Check in</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <Calendar />
                        </DialogContent>
                    </Dialog>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="rounded-full">Check out</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <Calendar />
                        </DialogContent>
                    </Dialog>
                    <div className="h-6 w-px bg-gray-300"></div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="rounded-full">Who</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <div className="space-y-2">
                                <div>Adults: <Input type="number" min="0" defaultValue="1" /></div>
                                <div>Children: <Input type="number" min="0" defaultValue="0" /></div>
                                <div>Infants: <Input type="number" min="0" defaultValue="0" /></div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button size="icon" className="rounded-full bg-pink-500 hover:bg-pink-600">
                        <SearchIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}