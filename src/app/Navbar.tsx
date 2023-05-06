import React from "react";
import Link from 'next/link';
import Image from 'next/image';

function Navbar () {
    return (
        <nav className='flex bg-blue-400 text-white h-16 justify-between items-center p-4'>
            <Link href={'/'}>
                <Image
                    src="/logo.svg" // Route of the image file
                    width={216}
                    height={30}
                    alt="NextSpace Logo"
                />
            </Link>
            <ul className="flex mr-4">
                <li className='flex p-1 items-center h-10'>
                    <Link href={'/about'}>About</Link>
                </li>
                <li className='flex p-1 items-center h-10'>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li className='flex p-1 items-center h-10'>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;