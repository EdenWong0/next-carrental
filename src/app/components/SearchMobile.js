import DateSelection from "./DateSelection";
import HourSelection from "./HourSelection";
import LocationSelection from "./LocationSelection";
import ReturnSelection from "./ReturnSelection";

export default function SearchMobile() {
  return (
    <div className='xl:hidden font-bold'>
      <div className='container mx-auto'> 
        <div className='flex flex-col gap-y-4'>
            <LocationSelection />
            <ReturnSelection />
            <DateSelection />
            <HourSelection />
            <div className='flex items-center px-6'>
              <button className='btn btn-sm btn-accent w-[164px] mx-auto'>Search</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}
