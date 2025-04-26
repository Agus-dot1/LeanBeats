import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { Eye, HelpCircle, Plus, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const CommandMenu = ({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>;}) => {
    const router = useNavigate()
    const [value, setValue] = useState("");

  // Toggle the menu
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleNavigation = (url: string) => {
    setOpen(false)
    router(url)
  }

  return (
    <Command.Dialog
    open={open}
    onOpenChange={setOpen}
    label="Global Command Menu"
    className="bg-[#1e1e1e]/80 inset-0 fixed"
    onClick={() => setOpen(false)}
    >
    <div
    onClick={(e) => e.stopPropagation()}
    className="bg-[#101010] rounded-lg shadow-xl border-white/20 overflow-hidden w-full max-w-lg mx-auto mt-12"
    >
      <Command.Input
      value={value}
      onValueChange={setValue}
      placeholder="¿Qué buscás?"
      className="relative bg-[#101010] font-medium border-b border-white/20 p-3 text-lg w-full placeholder:text-white/20 focus:outline-none focus:ring-0"
      />
      <Command.List className="max-h-[300px] font-medium overflow-y-scroll p-4">
        <Command.Empty>
            No se encontraron resultados para {" "}
            <span className='font-bold'>"{value}"</span>
        </Command.Empty>

        <Command.Group heading="Acciones Rápidas" className="text-sm mb-3 text-white/20">
            <Command.Item
             onSelect={() => handleNavigation('/admin/añadir')}
             className="flex cursor-pointer transition-colors p-2 text-sm text-white hover:bg-black/20 rounded items-center gap-2">
              <Plus />
              Añadir Producto
            </Command.Item>
            <Command.Item 
             onSelect={() => handleNavigation('/admin/lista')}
             className="flex cursor-pointer transition-colors p-2 text-sm text-white hover:bg-black/20 rounded items-center gap-2">
              <Eye />
              Lista de Productos
            </Command.Item>
        </Command.Group>

        <Command.Group heading="Gestión" className="text-sm mb-3 text-white/20">
            <Command.Item 
             onSelect={() => handleNavigation('/admin/configuracion')}
             className="flex cursor-pointer transition-colors p-2 text-sm text-white hover:bg-black/20 rounded items-center gap-2">
              <Settings />
              Configuración
            </Command.Item>
            <Command.Item 
             onSelect={() => handleNavigation('/admin/ayuda')}
             className="flex cursor-pointer transition-colors p-2 text-sm text-white hover:bg-black/20 rounded items-center gap-2">
              <HelpCircle />
              Ayuda
            </Command.Item>
        </Command.Group>
      </Command.List>
      </div>
    </Command.Dialog>
  )
}
