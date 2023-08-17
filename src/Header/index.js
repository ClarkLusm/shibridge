import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="min-h-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <img className="h-8 w-8" src="./logo.svg" alt="Your Company" />
                <span className='ml-3 text-lg'>SHIBRIDGE</span>
              </div>
            </div>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <div className="hidden lg:gap-x-6 lg:flex lg:flex-1 lg:justify-end items-center">
              <a href="#" className="text-sm font-semibold text-blue">Bridge</a>
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
                        <div className="flex-auto">
                          <a href="#" className="block font-semibold text-gray-900">
                            Sub Item
                            <span className="absolute inset-0"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <button type="button" className="flex items-center gap-x-1 rounded-xl bg-midnight font-bold p-3">
                <img style={{ height: 20 }} src='./tokens/ETH.svg' />
                <span className='ml-2'>ETHEREUM</span>
              </button>
              <div className='flex items-center gap-x-1 text-sm font-bold bg-midnight rounded-xl p-1'>
                <span className='m-3'>Wallet Address</span>
                <span className='bg-blue rounded-xl px-3 py-2'>0x3Dc...8fG9</span>
              </div>
            </div>
          </Popover.Group>
        </nav>
      </div>
    </header >
  );
}

export default Header;
