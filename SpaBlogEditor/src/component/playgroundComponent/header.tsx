
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { TabContext } from "@/provider/tabProvider"
import {  Search } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent,DialogTrigger } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,  } from "@/components/ui/command"
import HelpMenu from "./header/helpMenu"
import AvatarMenu from "./header/avatarMenu"
import UpgradeProModal from "./header/upgradeProModal"
import { useState } from "react"
import NotificationsTopbar from "./header/notificationsTopbar"

export default function Header ({className} : {className ?: string}) {
  const [open, setOpen] = useState<boolean>(false)

  window.onkeydown = (e): void => {
    if (e.ctrlKey && e.key === 'g'){
      e.preventDefault()
      setOpen(true)
    }
  }
    const tab = useContext(TabContext)
    return ( 
      <div className={cn(className,'font-inter h-[53px] py-1 px-[19px]')}>
        <div className="flex flex-row items-center gap-[8px]">
            <span className="text-[#18181B] font-Inter font-medium text-[14px] leading-[20px]">{tab.variable}</span>
        </div>
        <div className="flex flex-row items-center space-x-3">
            <div className="flex px-[2px] items-center pr-3">
                <div className="flex items-center">
                  <UpgradeProModal />
                  <div className="space-x-5 flex items-center ml-[19px]">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger className='outline-none bg-zinc-100 pl-2 pr-4 py-[6px] text-[13px] h-7 flex items-center text-zinc-500 tracking-[0.02em] gap-x-[9px] leading-5 w-[155px] rounded-full'>
                        <Search viewBox='0 0 24 24' width='14' height='14' className='ml-1'/>
                        <div className="flex justify-between items-center w-full text-xs">
                          <p>ค้นหา</p>
                          <p>(CTRL +G)</p>
                        </div>
                      </DialogTrigger>
                      <DialogContent className='p-0'>
                      <Command>
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup heading="Settings">
                            <CommandItem>Profile</CommandItem>
                            <CommandItem>Billing</CommandItem>
                            <CommandItem>Settings</CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </DialogContent>
                    </Dialog>

                    <NotificationsTopbar />
                  </div>
                </div>
            </div>
            <Separator orientation="vertical" className="h-6 m-[0!important]"/>

            <HelpMenu />

            <AvatarMenu />
        </div>
    </div>)
}