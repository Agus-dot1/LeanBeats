import { Grid2X2, SearchIcon } from 'lucide-react';
import { CommandMenu } from '../utils/CommandMenu';
import React from 'react';

const Search = () => {
    const [open, setOpen] = React.useState(false)
  return (
    <>
        <div className="bg-[#444444] font-medium gap-2 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
            <SearchIcon size={20} className="text-white" />
            <input
             onFocus={(e) => {
                e.target.blur();
                setOpen(true);
             }}
             type="text" className="bg-transparent w-full text-white placeholder:text-stone-400 focus:outline-none" placeholder="Buscar" />
            <span className="p-1 text-xs flex gap-0.5 items-center shadow-xl bg-[#1e1e1e] rounded absolute right-1.5 top-1/2 -translate-y-1/2">
                ctrl + k
            </span>
        </div>
        <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}

export default Search;