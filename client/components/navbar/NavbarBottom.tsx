"use client"
import React, { useState, useRef, useEffect } from 'react'
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
    const [clicked, setClicked] = useState<number | null>(null)
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    })
    const popoverRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setClicked(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const regions = [
        { name: "I'm flexible", icon: "1.jpg" },
        { name: "Southeast Asia", icon: "2.webp" },
        { name: "Canada", icon: "3.webp" },
        { name: "Europe", icon: "4.webp" },
        { name: "Malaysia", icon: "5.webp" },
        { name: "United States", icon: "6.webp" },
    ]

    return (
        <div className="flex justify-center max-w-[850px] mx-auto">
            <div ref={popoverRef} className={`flex items-center border rounded-full shadow-md w-full ${clicked !== null ? "bg-gray-200" : ""}`}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button onClick={() => setClicked(0)} variant="ghost" className={`rounded-full flex-1 justify-start py-8 pr-2 pl-6 ${clicked === 0 ? "bg-white hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]" : "hover:bg-gray-100"}`}>
                            <div className="text-left w-full">
                                <div className="font-semibold">Where</div>
                                <input type="text" placeholder="Search destinations" className="w-full pr-3 bg-transparent font-normal outline-none" />
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[425px] mt-2 rounded-3xl overflow-y-auto" align="start">
                        <h2 className="text-lg font-semibold my-3 pl-2">Search by region</h2>
                        <div className="grid grid-cols-3 h-[300px] mb-8">
                            {regions.map((region, index) => (
                                <div className="w-full rounded-xl group hover:bg-gray-200" key={index}>
                                    <Button
                                        variant="ghost"
                                        className="pt-3 px-2 bg-transparent hover:bg-transparent border-none w-full flex flex-col h-32 justify-center items-start relative"
                                    >
                                        <div className="h-full w-full relative rounded-xl overflow-hidden">
                                            <Image
                                                src={`/assets/where/${region.icon}`}
                                                alt={region.name}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className='absolute rounded-xl border border-gray-300'
                                            />
                                        </div>
                                    </Button>
                                    <p className='group-hover:bg-gray-200 pb-3 px-2 rounded-b-xl text-sm' >{region.name}</p>
                                </div>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
                {(clicked !== 0 && clicked !== 1) ? <div className="h-8 w-px bg-gray-300"></div> : null}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button onClick={() => setClicked(1)} variant="ghost" className={`rounded-full w-36 flex justify-start items-center py-8 px-6 ${clicked === 1 ? "bg-white hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]" : "hover:bg-gray-100"}`}>
                            <div className="text-left">
                                <div className="font-semibold">Check in</div>
                                <div className="text-sm text-gray-500">Add dates</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[850px] mr-[257px] rounded-3xl mt-2 p-0" align="start">
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
                {(clicked !== 1 && clicked !== 2) ? <div className="h-8 w-px bg-gray-300"></div> : null}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button onClick={() => setClicked(2)} variant="ghost" className={`rounded-full w-36 flex justify-start items-center py-8 px-6 ${clicked === 2 ? "bg-white hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]" : "hover:bg-gray-100"}`}>
                            <div className="text-left">
                                <div className="font-semibold">Check out</div>
                                <div className="text-sm text-gray-500">Add dates</div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[850px] mr-[257px] rounded-3xl mt-2 p-0" align="start">
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
                {(clicked !== 2 && clicked !== 3) ? <div className="h-8 w-px bg-gray-300"></div> : null}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button onClick={() => setClicked(3)} variant="ghost" className={`rounded-full flex-1 py-8 pr-2 pl-6 ${clicked === 3 ? "bg-white hover:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]" : "hover:bg-gray-100"}`}>
                            <div className="flex justify-between items-center w-full">
                                <div className="text-left">
                                    <div className="font-semibold">Who</div>
                                    <div className="text-sm text-gray-500">Add guests</div>
                                </div>
                                <div className={`rounded-full ${clicked === null ? "bg-[#FF385C] hover:bg-[#E41D58]" : "bg-[#E41D58] hover:bg-[#FF385C] transition-all duration-1000"} text-white px-4 flex justify-center items-center gap-2 h-12 text-[17px]`}>
                                    <SearchIcon className="h-4 w-4" />
                                    {clicked !== null ? <span>Search</span> : null}
                                </div>
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[425px] mt-2 rounded-3xl" align="end">
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
            </div>
        </div>
    )
}

export default NavbarBottom
