
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TabContext } from "@/provider/tabProvider"
import { useContext , useState} from "react"

import { AnimationContext } from "@/provider/animationProvider"
import {Link} from "react-router-dom";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronRight, PlusCircle, Shuffle, UserPlus, Users, ChevronsUpDown, PanelLeftClose, LayoutGrid, LayoutDashboard, Newspaper, UserCircle, Layout, Search, Settings, PanelLeftOpen, Home, Check } from "lucide-react"
import { Icons } from "@/components/ui/icons"
import { BellIcon } from "@radix-ui/react-icons"
import { ListIcons } from "./sidebar/sidebardata/side-data"
import {menuData} from "./sidebar/sidebardata/data";

import { LightningBoltIcon } from "@radix-ui/react-icons";
import ServicePrivileges from "./sidebar/privileges";
import { ServiceBadge } from "./sidebar/badge";
import DrawLine from "./sidebar/drawline";
import { EyeNoneIcon } from "@radix-ui/react-icons";
import { TabContextType } from "typing"

const privileges = [
  {
    icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Super Admin',
    desc:'Can access billing and members'
  },
  {
    icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Remove',
    desc:'Turn off all notifications'
  },
  {
    icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Super Admin',
    desc:'Can access billing and members'
  },
  {
    icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Remove',
    desc:'Turn off all notifications'
  }
]

const iconstyle = 'w-4 h-4 stroke-[1.5]'
interface iconProps extends React.ReactElement<SVGAElement> { className?: string }
type BLogType = {title : TabContextType, icon : iconProps}
const Blogs : BLogType[] = [{title : 'Overview', icon : <LayoutDashboard className={iconstyle}/>},{title : 'Post', icon : <Newspaper className={iconstyle}/>},{title : 'Categories', icon : <LayoutGrid className={iconstyle} />},{title : 'Blogger', icon : <UserCircle className={iconstyle}/>}]
const Pages : BLogType[] = [{title : 'Page', icon : <Layout className={iconstyle} />},{title : 'SystemPage', icon : <LayoutGrid className={iconstyle}/>}]

export function SidebarMain({ className}: {className? : string}) {
  const tab = useContext(TabContext)
  const animation = useContext(AnimationContext)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  const workspaceMenus = [
    {title:'WorkSpace', icon:<Icons.ZaviagoAppIcon className='w-[30px] h-[30px]'/>, desc:'ระบบจัดการธุรกิจและขายสินค้า', link:'https://zaviago-dashboard.vercel.app/'},
    {title:'จัดการธุรกิจ', icon:<Icons.ErpAppIcon className='w-[30px] h-[30px]'/>, desc:'ระบบจัดการธุรกิจและขายสินค้า', link:'https://www.zaviago.com/manage'},
    {title:'บล็อกและบทความ', icon:<Icons.BlogAndPagesAppIcon className='w-[30px] h-[30px]'/>, desc:'สร้างข่าวสารและเขียนบทความ', link:'/coming-soon', enabled:<Check className="h-4 w-4"/>},
    {title:'CRM', icon:<Icons.PosAppIcon className='w-[30px] h-[30px]'/>, desc:'จัดการและดูข้อมูลลูกค้าต่างๆ', link:'https://www.zaviago.com/crm'},
    {title:'เว็บไซต์', icon:<Icons.WebsiteApp className='w-[30px] h-[30px]'/>, desc:'สร้างและออกแบบเว็บไซต์', link:'/coming-soon'},
    {title:'MarketConnect', icon:<Icons.MarketConnectApp className='w-[30px] h-[30px]'/>, desc:'จัดการออเดอร์จาก eCommerce Platform', link:'https://www.zaviago.com/marketplace'},
    {title:'Canvas', icon:<Icons.CanvasApp className='w-[30px] h-[30px]'/>, desc:'ระบบออกแบบ Graphics', link:'/coming-soon'}
  ]

  return (
    <> 
    <div id='full sidebar' className={cn(className, 'h-screen w-auto flex flex-column')}>
      {/* <div id='first sidebar' className="fixed top-0 left-0 gap-[3px] py-3 px-3 flex flex-col items-center w-[60px] h-screen border-r border-[#E4E4E7] z-10 bg-white" >
        <div className="nav-left-side">
          {animation.sidebar === true ? (
            <Button variant={'secondary'} className="px-[9px] border" onClick={()=> window.location.href="https://zaviago-dashboard.vercel.app/"}>
              <Home color='#18181B' viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5'/>
            </Button>
          ) : (
            <Button variant={'secondary'} className="px-[9px] border" onClick={()=>{animation.toggle('SideBar')}}>
              <PanelLeftOpen color='#18181B' viewBox='0 0 24 24' width='16' height='16' strokeWidth='1.5'/>
            </Button>
          )}
          <a className='nav-btns add-ons' href={`${import.meta.env.VITE_BASE_URL}`}>
            <Icons.ZaviagoAppIcon />
          </a>
          <Dialog>
            {ListIcons.map((i, index) => (
              <DialogTrigger className="nav-btns add-ons" tabIndex={index} onClick={() => setSelected(index)}>{i}</DialogTrigger>
            ))}
              {menuData.filter(item => item.id == selected).map(data => (
                <DialogContent className='p-0 border-0 max-w-4xl'>
                <DialogHeader className='flex-row'>
                  <DialogTitle className='relative'>
                    <img src={data.image} className='rounded-l-lg h-full w-[800px]'/>
                    <div className="absolute left-5 bottom-5 flex gap-x-2 items-center">
                      <Button variant='link' className='text-white text-xs p-0 h-fit'>Privacy Policy</Button>
                      <DrawLine color='#FFF' width='1px' height='14px'/>
                      <Button variant='link' className='text-white text-xs p-0 h-fit'>Contact us</Button>
                    </div>
                  </DialogTitle>
                  <DialogDescription className='px-10 pt-6 pb-10 shadow-lg'>
                    <div className="flex flex-col justify-between h-full">
                      <section>
                        <ServiceBadge text={data.require_pro_text}/>
                        <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">{data.title}</h1>
                        <p>{data.desc}</p>
                        <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
                          {privileges.map(p => {
                            return (<ServicePrivileges key={p.title} icon={p.icon} title={p.title} desc={p.desc}/>)
                          })}
                        </ul>
                      </section>
                      <section>
                        <Link to='/payment'>
                          <Button className='btn-with-icon w-full mt-10 mb-[7px]'>
                            <LightningBoltIcon />Upgrade to Pro
                          </Button>
                        </Link>
                        <p className="main-desc">See all features in <Link className="text-[#006AFF]" to={`/integration/appstore/${data.link}`}>App store Detail</Link></p>
                      </section>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
              ))}
            </Dialog>
            <Link className="w-9 h-9 border rounded-md flex items-center justify-center" to=''>
              <PlusCircle className="w-4 h-4"></PlusCircle>
            </Link>
          </div>
      </div> */}

      <div id='second sidebar' className={`nav-bar h-screen border-r border-[#E4E4E7] bg-white pt-[18px]`}>
        <div id="container" className="flex flex-col gap-4">
          <div id="primary">
            <div id='popover' className="flex px-[14px] bg-white flex-row gap-2 z-[4]" aria-label="Sidebar">
            <Popover>
              <PopoverTrigger className="w-full">
                <div className="flex items-center gap-x-2">
                  <div className="min-w-9 min-h-9 relative">
                    <Icons.BlogAndPagesAppIcon className='cursor-pointer w-9 h-9 z-9'/>
                  </div>
                  <span className="flex gap-x-2 items-center">
                    <div className="flex flex-col text-left">
                      <h2 className="cal-sans text-[17px] font-semibold">zaviago<span className="text-[13px]">.com</span></h2>
                      <p className={`text-[11px] font-medium tracking-[-0.33px] text-[#5A5A5A] -mt-1`}>
                        {window.location.hostname}
                      </p>
                    </div>
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className='p-1 relative left-3 min-w-[355px] w-full rounded-xl'>
                <Command>
                  <CommandList className='max-h-full w-full'>
                    <CommandGroup>
                      {workspaceMenus.map((menu, index) => (
                        <CommandItem className='mb-[10px] px-[7px]' onSelect={() => {menu.link === '/coming-soon' ? window.open("/coming-soon",'_blank') : window.open(menu.link, '_self')}}>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-x-[10px]">
                              {menu.icon}
                              <div>
                                <h2 className="text-sm text-primary font-semibold">{menu.title}</h2>
                                <p className="text-[13px] text-[#565656] -mt-1">{menu.desc}</p>
                              </div>
                            </div>
                            {menu.enabled}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            </div>

            <div id='main' className="flex flex-col items-center px-3 pt-2 mt-3">
              <Button variant="ghost" className="flex h-9 gap-2 justify-start items-center self-stretch" onClick={() => window.location.href = `${import.meta.env.VITE_BASE_URL}/`}>
                <LayoutGrid className={iconstyle}/>
                <h2 className="text-forground font-inter text-[13px] leading-[20px]">Dashboard</h2>
              </Button>
              <Button variant="ghost" className="flex h-9 gap-2 justify-start items-center self-stretch" onClick={() => window.location.href = `${import.meta.env.VITE_BASE_URL}/dashboard/settings/account`}>
                <Settings className={iconstyle}/>
                <h2 className="text-forground font-inter text-[13px] leading-[20px]">Settings</h2>
              </Button>
            </div>
        </div>


        <div id='secondary' className="flex flex-col gap-4 px-3">
              <div id='Blogs block' className="flex flex-col py-4 gap-[8px]">
                <div  className="flex justify-start items-center">          
                    <h2 className="sidebar-title px-4">
                      Blogs
                    </h2>
                </div>
                <div className="flex flex-col items-start self-stretch w-full h-[138px]">
                  {Blogs.map((item, index)=> {
                    return (
                      <Link title='home' key={index} to="/" className="w-full">
                        <Button variant="ghost" onClick={() => {tab.ChangeVariable(item.title)}} className="flex h-9 py-2 gap-2 w-full justify-start items-center self-stretch">
                          {item.icon}
                          <h2 className="sidebar-item">{item.title}</h2>   
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div id='PageBlock' className="flex flex-col items-start py-2 gap-2 self-stretch">

                <div className="flex  justify-center items-center">        
                  <h2 className="sidebar-title px-4">
                    Pages
                  </h2>
                </div>

                <div className="flex flex-col items-start self-stretch">
                {Pages.map((item, index)=> {
                    return (
                      <Link title='home' className="w-full" key={index} to="/">
                        <Button variant="ghost" onClick={() => {tab.ChangeVariable(item.title)}} className="flex h-9 gap-2 w-full justify-start items-center self-stretch">
                          {item.icon}
                          <h2 className="sidebar-item">{item.title}</h2>   
                        </Button>
                      </Link>
                    )
                  })}
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
     </>
  )
}