import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

function SelectToken({ show, onClose }) {

  const [open, setOpen] = useState(show);

  useEffect(() => {
    setOpen(show);
  }, [show])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="headlessui-dialog fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl bg-black0 p-10">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title className="flex items-center justify-between mb-6">
                    <span as="h3" className="text-base font-semibold">Select a Token</span>
                    <button onClick={onClose}>
                      <img src='./icons/close.svg' />
                    </button>
                  </Dialog.Title>
                  <div className="text-gray mb-2 text-sm">
                    Search Name or Paste Token Contract Address
                  </div>
                  <div className="mb-4">
                    <input
                      placeholder="Search ..."
                      className="input-value w-full px-4 py-3 bg-midnight rounded-xl"
                    />
                  </div>
                  <div className="mb-6">
                    <ul className="flex flex-col gap-y-4">
                      <li className="flex items-center justify-between">
                        <span className="flex items-center">
                          <img src="./tokens/ETH.svg" className="mr-2" />
                          <span>ETH</span>
                        </span>
                        <span className="tet-gray">100.2</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center">
                          <img src="./tokens/SHIBARIUM.svg" className="mr-2" />
                          <span>SHIBARIUM</span>
                        </span>
                        <span className="tet-gray">100.2</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SelectToken;
