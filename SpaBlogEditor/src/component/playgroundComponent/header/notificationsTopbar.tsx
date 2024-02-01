import { BellIcon } from '@radix-ui/react-icons'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NotificationsTopbar(){
  const notices = [
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    },
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    },
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    }
  ]
  return (
    <Popover>
      <PopoverTrigger className='ml-[30px]'>
        <BellIcon color='#7D7D7D' width='17' height='17'/>
      </PopoverTrigger>
      <PopoverContent className='w-[400px] absolute -right-2'>
        <h2 className='font-semibold tracking-[-0.4px] text-[#09090B]'>Notifications</h2>

        {notices.length > 0 ? (
          <ul className='flex flex-col gap-y-[14px] mt-4'>
            {notices.map(notice => (
              <li className='flex gap-x-4' key={notice.text}>
                <Avatar>
                  <AvatarImage src={notice.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className='subheading'>{notice.text}</h3>
                  <p className='text-desc mt-2'>{notice.date}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='flex flex-col items-center my-4 h-full justify-center'>
            <h2 className='subheading'>ยังไม่มีแจ้งเตือนใหม่</h2>
            <p className='text-desc mt-2'>คุณยังไม่ได้รับการแจ้งเตือนใดๆ</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}