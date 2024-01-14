"use client";

import { useContext } from "react";
import { SearchContext } from "../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HourSelection from "./HourSelection";
import ReturnSelection from "./ReturnSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div 
      className={`${
        searchActive 
          ? 'bg-white rounded-none xl:h-[80px]' 
          : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
        } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <ReturnSelection />
        <DateSelection />
        <HourSelection />
        <div className='xl:h-full flex items-center px-6 xl:px-8'>
          <button 
            className={`${
              searchActive 
              ? 'btn btn-md btn-accent' 
              : 'btn btn-lg btn-accent'
              }`}
            >
              Search
          </button>
        </div>
      </div>
    </div>
  )
}
