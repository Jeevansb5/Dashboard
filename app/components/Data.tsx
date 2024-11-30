"use client"
import React, { useState } from 'react'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Command,
    CommandGroup,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"




const Data = () => {
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
    return (
        <div className='my-7 mx-10'>
            <div className='flex flex-wrap items-center justify-around' >
                <Select>
                    <SelectTrigger className="w-[280px] bg-white outline-0">
                        <SelectValue placeholder="Timeframe: All Time" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="7">Last 7 Days</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[280px] bg-white outline-0">
                        <SelectValue placeholder="People: All" />
                    </SelectTrigger>
                    <SelectContent>
                        <Command>
                            <CommandList>
                                <CommandGroup heading="Groups">
                                    <RadioGroup defaultValue="">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">Option One</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">Option Two</Label>
                                        </div>
                                    </RadioGroup>
                                </CommandGroup>
                                <CommandSeparator />
                                <CommandGroup heading="Settings">
                                    <RadioGroup defaultValue="">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-one" id="option-one" />
                                            <Label htmlFor="option-one">Option One</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="option-two" id="option-two" />
                                            <Label htmlFor="option-two">Option Two</Label>
                                        </div>
                                    </RadioGroup>

                                </CommandGroup>


                            </CommandList>
                        </Command>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[280px] bg-white outline-0">
                        <SelectValue placeholder="Topic: All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Weakest">Weakest Topics</SelectItem>
                        <SelectItem value="Strongest">Strongest Topics</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default Data
