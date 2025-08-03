"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
    {label: "Home", href:"/"},
    {label: "Companions", href:"/companions"},
    {label: "My Journey", href:"/my-journey"},
]

function NavItems() {
    const pathname = usePathname();

  return (
    <nav className='flex items-center gap-4'>
        {navItems.map((item, index) =>(
            <Link href={item.href} key={index} className={cn(pathname === item.href && "text-primary font-semibold")}>{item.label}</Link>
        ))}
    </nav>
  )
}

export default NavItems