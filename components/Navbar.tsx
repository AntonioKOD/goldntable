'use client'
import {Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu} from '@/components/ui/resizable-navbar'

import {useState} from 'react'

export default function NavbarComponent(){
    const navItems = [
        {name: 'Home', link: '/'},
        {name: 'Courses', link: '/courses'},
        {name: 'About', link: '/about'},
        {name: 'FAQ', link: '/faq'},
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} className="hidden md:flex" />
                    <NavbarButton className="hidden md:inline-flex">Sign Up</NavbarButton>
                </NavBody>
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>
                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} className="flex flex-col space-y-4" />
                        <NavbarButton className="w-full">Sign Up</NavbarButton>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    )
}