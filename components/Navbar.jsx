import { Disclosure, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { href: '/features', name: 'Why Grouple?', current: false, disable: true },
  { href: '/tools', name: 'Tools', current: false, disable: true },
  { href: '/pricing', name: 'Pricing', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className=' shadow-sm fixed w-full left-0 top-5 z-10'>
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto  border-b border-brand-primaryLightbg-brand-background px-2 sm:px-6">
            <div className='xl:mx-16 md:mx-10   flex h-16 xl:h-28 items-center bg-white rounded-full px-3 '>
              <div className="md:left-0 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center ml-3 justify-center rounded-full p-2 text-brand-primaryLight hover:bg-brand-primaryLight hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={setOpen(!open)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch  sm:justify-start">
                <div className="flex flex-shrink-0 justify-start  items-start">
                  <Image src='/images/Grouple.png' alt="Grouple"
        quality={100} width={150} height={80}/>
                  {/* <h1 className="cursor-pointer text-xl font-semibold ">
                    Travel<span className="text-brand-primaryLight">in</span>
                  </h1> */}
                </div>
                
              </div>
              <div className="hidden sm:ml-6 sm:block md:ml-60">
                  <div className="flex  whitespace-nowrap space-x-4">
                    {navigation.map(({name, href, current}) => (
                      <Link 
                      href={href} passHref>
                      <a
                        
                        className={classNames(
                          current
                            ? 'bg-brand-primaryLight text-white shadow-lg'
                            : 'text-brand-primaryLight hover:bg-brand-primaryLight hover:text-white hover:shadow-lg',
                          'flex items-center rounded-md px-3 py-2 xl:px-6 xl:py-3 xl:text-lg  text-sm font-medium'
                        )}
                        aria-current={current ? 'page' : undefined}
                      >{name}

                      </a>
                      
                    </Link>
                    ))}
                  </div>
                </div>
              <div className="lg:relative  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/form" passHref>
                <a  className="relative inline-block text-lg group">
                    
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-brand-primaryLight transition-colors duration-300 ease-out border-2 border-brand-primaryLight rounded-full group-hover:text-white">

                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-white"></span>
                      <span className="absolute left-0 w-48 xl:w-52 xl:h-52 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-brand-primaryLight group-hover:-rotate-180 ease"></span>
                      <span className="relative xl:text-2xl">Register</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-brand-primaryLight rounded-full group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-full"></span>
                    
                </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-brand-primaryLight text-white shadow-lg'
                      : 'text-brand-primaryLight bg-white hover:bg-brand-primaryLight hover:text-white hover:shadow-lg',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}