import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import './style.css'

function Transfer() {

  const [open, setOpen] = useState(false)
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [tokenFrom, setTokenFrom] = useState('ETH');
  const [tokenTo, setTokenTo] = useState('SHIBARIUM');

  const cancelButtonRef = useRef(null)

  const swapToken = () => {
    const tmpToken = `${tokenTo}`;
    setTokenTo(tokenFrom);
    setTokenFrom(tmpToken);
  }

  return (
    <div className='transfer-body '>
      <div className="container mx-auto">
        <div className="flex justify-between max-w-[50%] pt-16 mx-auto">
          <h3 className="text-3xl font-['Fractul_Alt']">Bridge Tokens</h3>
          <p>
            <span className='text-gray mr-1'>(0)</span>
            <span className="text-blue">Recent Transactions</span>
          </p>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-5">
          <div className='col-span-1'></div>

          <div className='col-span-3'>
            <div className="transfer-form p-10 bg-black">
              <div className="flex items-center justify-between my-2">
                <span className='text-xs'>From: <strong>Ethereum</strong></span>
                <div class="relative">
                  <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300" aria-expanded="false">
                    <img src={`./tokens/${tokenFrom}.svg`} />
                    {tokenFrom}
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="input-from">
                <input
                  placeholder='0'
                  className="input-value w-full px-4 py-5 text-center bg-midnight rounded-xl error"
                  onChange={e => setValueFrom(e.target.value)}
                />
              </div>

              <div className="flex my-2 text-xs">
                <span className='text-gray mr-2'>Balance: 28,874,769</span>
                <button className="text-blue font-bold">MAX</button>
              </div>

              <div className="flex justify-center">
                <button onClick={swapToken}>
                  <img src="./icons/swap.svg" />
                </button>
              </div>

              <div className="flex items-center justify-between my-2">
                <span className="text-gray text-xs">To: <strong>Shibarium</strong></span>
                <div class="relative">
                  <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300" aria-expanded="false">
                    <img src={`./tokens/${tokenTo}.svg`} />
                    {tokenTo}
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="input-to">
                <input
                  placeholder='0'
                  className="input-value w-full px-4 py-5 text-center bg-midnight rounded-xl"
                  onChange={e => setValueTo(e.target.value)}
                />
              </div>

              <div className="flex my-2 text-xs">
                <span className="text-gray mr-2">Balance: 28,874,769</span>
                <button className="text-blue font-bold">MAX</button>
              </div>

              <div className="bg-midnight mt-10 p-4 text-center text-blue rounded-xl">
                <button
                  className='btn-submit'
                  onClick={() => setOpen(true)}
                  disabled={!valueFrom || !valueTo}
                >
                  {(valueFrom > 0 && valueTo > 0) ? 'Transfering' : 'Insufficient balance on sending chain'}
                </button>
              </div>
            </div>
          </div>

          <div className='col-span-1'>
            <ul role="feed" class="relative flex flex-col gap-12 pl-8">
              <li role="article" class="relative pl-8 text-center">
                <span class="absolute left-0 z-10 flex items-start justify-center w-10 h-12 -translate-x-1/2 before:absolute before:top-7 before:left-5 before:h-full before:border before:-translate-x-1/2 before:border-gray">
                  <img src='./icons/check.svg' />
                </span>
                <div class="flex flex-col flex-1 gap-4">
                  <p class=" text-slate-500">Starting</p>
                </div>
              </li>
              <li role="article" class="relative pl-8 text-center">
                <span class="absolute left-0 z-12 flex items-start justify-center w-10 h-11 -translate-x-1/2">
                  <span className="rounded-full bg-blue text-sm text-white w-7 h-7 flex items-center justify-center  before:absolute before:top-7 before:left-5 before:h-full before:border before:-translate-x-1/2 before:border-gray">
                    2
                  </span>
                </span>
                <div class="flex flex-col flex-1 gap-4">
                  <p class=" text-slate-500">Bridge</p>
                </div>
              </li>
              <li role="article" class="relative pl-8 text-center">
                <span class="absolute left-0 z-12 flex items-start justify-center w-10 h-11 -translate-x-1/2">
                  <span className="rounded-full text-sm text-gray w-7 h-7 flex items-center justify-center  border border-gray">
                    3
                  </span>
                </span>
                <div class="flex flex-col flex-1 gap-4">
                  <p class=" text-slate-500">Complete</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
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
                      <span as="h3" className="text-base font-semibold">Transaction History</span>
                      <button onClick={() => setOpen(!open)}>
                        <img src='./icons/close.svg' />
                      </button>
                    </Dialog.Title>
                    <div className="mb-6 flex items-center justify-between">
                      <span>1 item</span>
                      <button className='text-blue'>Clear All</button>
                    </div>
                  </div>
                  <div className='rounded-xl border border-gray overflow-hidden'>
                    <div className='flex items-center justify-between bg-midnight px-4 py-5'>
                      <span>2023.15.08, 10:22:30 AM</span>
                      <span className='text-green'>Completed</span>
                    </div>
                    <div className='flex items-center px-4 py-2'>
                      <div className='flex items-center grow'>
                        <img className='mr-2' src='./tokens/ETH.svg' />
                        <div className='flex flex-col'>
                          <span className='font-semibold text-red'>- 28874769 SHIBETS</span>
                          <span>Ethereum Network</span>
                        </div>
                      </div>
                      <div className='grow-0 mx-4'>
                        <img src='./icons/arrow-right.svg' />
                      </div>
                      <div className='flex items-center grow'>
                        <img className='mr-2' src='./tokens/SHIBARIUM.svg' />
                        <div className='flex flex-col'>
                          <span className='font-semibold text-green'>+28870437.78465 SHIBETS</span>
                          <span>Shibarium Network</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Transfer;
