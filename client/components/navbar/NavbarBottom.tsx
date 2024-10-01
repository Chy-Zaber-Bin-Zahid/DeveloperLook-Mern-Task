"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRange } from "react-day-picker"
import { MinusIcon, PlusIcon, SearchIcon } from 'lucide-react'

function NavbarBottom() {
    const [adults, setAdults] = useState<number>(0)
    const [children, setChildren] = useState<number>(0)
    const [infants, setInfants] = useState<number>(0)
    const [pets, setPets] = useState<number>(0)
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    })

    const regions = [
        { name: "I'm flexible", icon: "/placeholder.svg?height=50&width=50" },
        { name: "Southeast Asia", icon: "/placeholder.svg?height=50&width=50" },
        { name: "Canada", icon: "/placeholder.svg?height=50&width=50" },
        { name: "Europe", icon: "/placeholder.svg?height=50&width=50" },
        { name: "Malaysia", icon: "/placeholder.svg?height=50&width=50" },
        { name: "United States", icon: "/placeholder.svg?height=50&width=50" },
    ]
    return (
        <div className="flex justify-center max-w-[850px] mx-auto">
            <div className="flex items-center space-x-4 border rounded-full p-2 shadow-md w-full">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="rounded-full flex-1 justify-start">
                            <div className="text-left">
                                <div className="font-semibold">Where</div>
                                <div className="text-sm text-gray-500">Search destinations</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80" align="start">
                        <h2 className="text-lg font-semibold mb-4">Search by region</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {regions.map((region, index) => (
                                <Button key={index} variant="outline" className="flex flex-col items-center p-4">
                                    <Image src={region.icon} alt={region.name} width={50} height={50} />
                                    <span className="mt-2 text-sm">{region.name}</span>
                                </Button>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
                <div className="h-6 w-px bg-gray-300"></div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="rounded-full">
                            <div className="text-left">
                                <div className="font-semibold">Check in</div>
                                <div className="text-sm text-gray-500">Add dates</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Tabs defaultValue="dates" className="w-full">
                            <TabsList className="w-full">
                                <TabsTrigger value="dates" className="flex-1">Dates</TabsTrigger>
                                <TabsTrigger value="months" className="flex-1">Months</TabsTrigger>
                                <TabsTrigger value="flexible" className="flex-1">Flexible</TabsTrigger>
                            </TabsList>
                            <TabsContent value="dates" className="p-0">
                                <Calendar
                                    mode="range"
                                    selected={dateRange}
                                    onSelect={(range) => setDateRange(range)}
                                    numberOfMonths={2}
                                    className="w-full"
                                />
                            </TabsContent>
                            <TabsContent value="months" className="p-4">
                                <div>Month selection content</div>
                            </TabsContent>
                            <TabsContent value="flexible" className="p-4">
                                <div>Flexible dates content</div>
                            </TabsContent>
                        </Tabs>
                    </PopoverContent>
                </Popover>
                <div className="h-6 w-px bg-gray-300"></div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="rounded-full">
                            <div className="text-left">
                                <div className="font-semibold">Check out</div>
                                <div className="text-sm text-gray-500">Add dates</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Tabs defaultValue="dates" className="w-full">
                            <TabsList className="w-full">
                                <TabsTrigger value="dates" className="flex-1">Dates</TabsTrigger>
                                <TabsTrigger value="months" className="flex-1">Months</TabsTrigger>
                                <TabsTrigger value="flexible" className="flex-1">Flexible</TabsTrigger>
                            </TabsList>
                            <TabsContent value="dates" className="p-0">
                                <Calendar
                                    mode="range"
                                    selected={dateRange}
                                    onSelect={(range) => setDateRange(range)}
                                    numberOfMonths={2}
                                    className="w-full"
                                />
                            </TabsContent>
                            <TabsContent value="months" className="p-4">
                                <div>Month selection content</div>
                            </TabsContent>
                            <TabsContent value="flexible" className="p-4">
                                <div>Flexible dates content</div>
                            </TabsContent>
                        </Tabs>
                    </PopoverContent>
                </Popover>
                <div className="h-6 w-px bg-gray-300"></div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="rounded-full">
                            <div className="text-left">
                                <div className="font-semibold">Who</div>
                                <div className="text-sm text-gray-500">Add guests</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 p-0" align="end">
                        <div className="p-4 space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">Adults</div>
                                    <div className="text-sm text-gray-500">Ages 13 or above</div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setAdults(Math.max(0, adults - 1))}>
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="w-6 text-center">{adults}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setAdults(adults + 1)}>
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">Children</div>
                                    <div className="text-sm text-gray-500">Ages 2–12</div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setChildren(Math.max(0, children - 1))}>
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="w-6 text-center">{children}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setChildren(children + 1)}>
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">Infants</div>
                                    <div className="text-sm text-gray-500">Under 2</div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setInfants(Math.max(0, infants - 1))}>
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="w-6 text-center">{infants}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setInfants(infants + 1)}>
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold">Pets</div>
                                    <div className="text-sm text-gray-500">Bringing a service animal?</div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setPets(Math.max(0, pets - 1))}>
                                        <MinusIcon className="h-4 w-4" />
                                    </Button>
                                    <span className="w-6 text-center">{pets}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setPets(pets + 1)}>
                                        <PlusIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                <Button size="lg" className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-6">
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </div>
        </div>
    )
}

export default NavbarBottom