import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { BadgeInfo, BookCopy, ChevronDown, ClipboardList, Info, MessageCircle, Zap, User, Keyboard, Layout, LogOut, Search, BadgeHelp } from 'lucide-react'
import { useState } from 'react'

export default function HelpMenu(){
  return (
    <Popover>
      <PopoverTrigger className='text-[13px] flex justify-between items-center !ml-4 gap-x-2 relative'>
        ช่วยเหลือ
        <ChevronDown viewBox='0 0 24 24' width='14' height='14' strokeWidth='1'/>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-[243px] absolute -right-10'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = "https://zaviago-platform-doc.vercel.app/"}>
                <BookCopy viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                คู่มือการใช้งาน
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = 'https://page.line.me/zaviago'}>
                <ClipboardList viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                แจ้งปัญหา
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem onSelect={() => window.location.href = `https://www.zaviago.com/`}>
                <Info viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
               ไปยัง zaviago.com
              </CommandItem>
              <CommandItem onSelect={() => window.location.href = 'https://page.line.me/zaviago'}>
                <BadgeHelp viewBox='0 0 24 24' width='16' height='16' className='mr-2'/>
                ติดต่อเรา
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}