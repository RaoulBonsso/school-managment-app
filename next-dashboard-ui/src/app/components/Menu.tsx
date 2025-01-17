import React from 'react'
import data from "@/lib/menu_items_data";
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className='mt-4 texr-sm'>{data.map(menu =>(
      <div className='flex flex-col gap-2' key={menu.title}> 
      <span className='hidden lg:block text-gray-400 font-light my-4'>{menu.title}</span>
      {menu.items.map(item =>(
        <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
          <Image src={item.icon} alt='' width={20} height={20}/>
          <span className='hidden lg:block'>{item.label}</span>
        </Link>
      ))}
      </div>
    ))}</div>
  )
}

export default Menu