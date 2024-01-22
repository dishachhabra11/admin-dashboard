import React from 'react'
import { MdSearch } from "react-icons/md";
import Select from 'react-select';
import { useState, useEffect } from 'react';
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';


const Header = ({map}) => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative '>
            <MdSearch fontSize={23} className='text-gray-400 absolute top-1/4 px- pl-2 '/>
            {/* <input type="text" placeholder='Search....' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem]  border border-gray-300 rounded-sm px-7'></input> */}
            {map && <SearchField map={map} />}
        </div>
        <div className='flex-items-center gap-2 mr-2'>
            {/* icon  sixe 24 or 23 */}
        </div>
    </div>
  )
}

const SearchField = ({ map }) => {
  const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    if (status === 'OK') {
      setSelectOptions(
        data.map(({ description }) => ({ value: description, label: description }))
      );
    } else {
      setSelectOptions([]);
    }
  }, [status, data]);


  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const pos = getLatLng(results[0]);
    
    if(map) {
      map.panTo(pos);
      map.setZoom(14);
    }
  };  

  const searchFieldStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      width: '25rem'
    })
  }
  
  return (
    <Select
      value={value}
      onInputChange={(text) => setValue(text)}
      onChange={(address) => handleSelect(address.value)}
      options={selectOptions}
      isDisabled={!ready}
      placeholder="Search an address"
      styles={searchFieldStyle}
    />
  );
}

export default Header