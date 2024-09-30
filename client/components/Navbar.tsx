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

export default function Navbar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-4 max-w-bigScreen mx-auto">
        <div className="pr-24">
          <Image
          src="/assets/airbnb-logo.svg"
          alt="Airbnb Logo"
          width={137}
          height={10}
          />
        </div>
        <div className="hidden md:flex">
          <Button variant="ghost" className='text-lg font-medium py-5 hover:bg-white'>Stays</Button>
          <Button variant="ghost" className='hover:bg-gray-100 text-lg font-normal text-gray-600 rounded-full py-5'>Experiences</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className='pr-2'>Airbnb your home</Button>
          <Button variant="ghost" size="icon" className='m-0'>
            <GlobeIcon className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full">
                <MenuIcon className="h-4 w-4 mr-2" />
                <UserCircleIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sign up</DropdownMenuItem>
              <DropdownMenuItem>Log in</DropdownMenuItem>
              <DropdownMenuItem>Host your home</DropdownMenuItem>
              <DropdownMenuItem>Host an experience</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="flex justify-center mt-4">
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