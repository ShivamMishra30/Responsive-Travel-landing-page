import { Disclosure, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Why Grouple?', href: '#', current: false },
  { name: 'Tools', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className='mt-4 shadow-sm fixed w-full z-10'>
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto  border-b border-gray-50 bg-brand-background px-2 sm:px-6">
            <div className='xl:mx-16 md:mx-10   flex h-16 xl:h-28 items-center bg-white justify-between  rounded-full px-3 '>
              <div className="md:absolute md:inset-y-0 md:left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center ml-3 justify-center rounded-full p-2 text-gray-400 hover:bg-brand-primaryLight hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-brand-primaryLight text-white shadow-lg'
                            : 'text-gray-300 hover:bg-brand-primaryLight hover:text-white hover:shadow-lg',
                          'flex items-center rounded-md px-3 py-2 xl:px-6 xl:py-3 xl:text-lg  text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <Popover className="relative">
                          <Popover.Button>{item.name}</Popover.Button>

                          <Popover.Panel className="">
                            <div className="grid grid-cols-2 ">
                              <Link href="/analytics">Analytics</Link>
                              <Link href="/analytics">Analytics</Link>
                              <Link href="/analytics">Analytics</Link>
                            </div>
                          </Popover.Panel>
                        </Popover>
                      </a>
                    ))}
                  </div>
                </div>
              <div className="lg:relative  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="rounded-full border-2 border-brand-primaryLight px-6 py-3 xl:px-10 xl:py-6 xl:text-2xl text-md font-medium text-brand-primaryLight hover:bg-brand-primaryLight hover:text-white mr-1 hover:shadow-lg">
                  Register
                </button>
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
                      : 'text-gray-300 hover:bg-brand-primaryLight hover:text-white hover:shadow-lg',
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