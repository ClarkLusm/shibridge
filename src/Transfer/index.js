import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ToastSuccess } from './ToastSuccess';
import SelectToken from './SelectToken';
import './style.css';

function Transfer() {

  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [tokenFrom, setTokenFrom] = useState('ETH');
  const [tokenTo, setTokenTo] = useState('SHIBARIUM');
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [validValue, setValidValue] = useState(false);
  const [step, setStep] = useState(1);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setValidValue(valueFrom > 0 && valueFrom <= 1000 && valueTo > 0 && valueTo <= 1000);
  }, [valueFrom, valueTo])


  const swapToken = () => {
    const tmpToken = `${tokenTo}`;
    setTokenTo(tokenFrom);
    setTokenFrom(tmpToken);
  }

  const showConfirm = () => {
    if (step < 4) {
      setStep(step + 1);
    }
    if (valueFrom && valueTo) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(true);
        setCompleted(true);
      }, 1500);
    }
  }

  const getButton = () => {
    if (completed) {
      return <span>Complete</span>
    }
    else if (loading) {
      return (
        <div className='flex items-center justify-center'>
          <span>Transfering</span>
          <div className="animate-spin">
            <img src='./icons/loading.svg' />
          </div>
        </div>
      )
    }
    else if (valueFrom > 1000 || valueTo > 1000) {
      return <span>Insufficient balance on sending chain</span>
    }
    else if (valueFrom > 0 && valueTo > 0) {
      return <span>Transfer</span>;
    }
    else {
      return <span>Enter An Amount</span>
    }
  }

  const getStep = (value) => {
    if (step < value) {
      return (
        <span className="absolute left-0 z-12 flex items-start justify-center w-10 h-11 -translate-x-1/2">
          <span className={`rounded-full text-sm text-gray w-7 h-7 flex items-center justify-center  border border-gray ${value < 3 ? 'before:absolute before:top-7 before:left-5 before:h-full before:border before:-translate-x-1/2 before:border-gray' : ''}`}>
            {value}
          </span>
        </span>
      )
    }
    else if (step == value) {
      return (
        <span className="absolute left-0 z-12 flex items-start justify-center w-10 h-11 -translate-x-1/2">
          <span className={`rounded-full bg-blue text-sm text-white w-7 h-7 flex items-center justify-center ${value < 3 ? 'before:absolute before:top-7 before:left-5 before:h-full before:border before:-translate-x-1/2 before:border-gray' : ''}`}>
            {value}
          </span>
        </span>
      )
    }
    else {
      return (
        <span className={`absolute left-0 z-10 flex items-start justify-center w-10 h-12 -translate-x-1/2 before:absolute before:top-7 ${value < 3 ? 'before:left-5 before:h-full before:border before:-translate-x-1/2 before:border-gray' : ''}`}>
          <img src='./icons/check.svg' />
        </span>
      )
    }
  }

  return (
    <div className='transfer-body '>
      <div className="container mx-auto">
        <div className="flex justify-between max-w-[60%] pt-16 mx-auto">
          <h3 className="text-3xl font-['Fractul_Alt']">Bridge Tokens</h3>
          <p>
            <span className='text-gray mr-1'>(0)</span>
            <span className="text-blue">Recent Transactions</span>
          </p>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-5">
          <div className='col-span-1'></div>

          <div className='col-span-3'>
            <div className="transfer-form p-10 bg-black">
              <div className='flex items-center gap-x-2 mb-10' onClick={() => setShow(true)}>
                <span className="text-xl font-['Fractul_Alt']">Tokens</span>
                <svg className="h-4 w-4 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                <div className='rounded-md px-4 py-3 bg-midnight'>
                  <div className="flex items-center text-sm">
                    <img className="h-6 w-6" src="./logo.svg" alt="Your Company" />
                    <span className='ml-3 font-semibold'>SHIBRIDGE</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className='text-xs'>From: <strong>Ethereum</strong></span>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300"
                    onClick={() => setShow(true)}
                  >
                    <img src={`./tokens/${tokenFrom}.svg`} />
                    {tokenFrom}
                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="input-from">
                <input
                  value={valueFrom}
                  placeholder='0'
                  className={`input-value w-full px-4 py-5 text-center bg-midnight rounded-xl ${valueFrom > 1000 ? 'error' : ''}`}
                  onChange={e => setValueFrom(e.target.value)}
                />
              </div>

              <div className="flex my-2 text-xs">
                <span className='text-gray mr-2'>Balance: 28,874,769</span>
                <button
                  className="text-blue font-bold"
                  onClick={() => setValueFrom(1000)}
                >
                  MAX
                </button>
              </div>

              <div className="flex justify-center">
                <button onClick={swapToken}>
                  <img src="./icons/swap.svg" />
                </button>
              </div>

              <div className="flex items-center justify-between my-2">
                <span className="text-gray text-xs">To: <strong>Shibarium</strong></span>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300"
                    onClick={() => setShow(true)}
                  >
                    <img src={`./tokens/${tokenTo}.svg`} />
                    {tokenTo}
                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="input-to">
                <input
                  value={valueTo}
                  placeholder='0'
                  className={`input-value w-full px-4 py-5 text-center bg-midnight rounded-xl ${valueTo > 1000 ? 'error' : ''}`}
                  onChange={e => setValueTo(e.target.value)}
                />
              </div>

              <div className="flex my-2 text-xs">
                <span className="text-gray mr-2">Balance: 28,874,769</span>
                <button
                  className="text-blue font-bold"
                  onClick={() => setValueTo(1000)}
                >
                  MAX
                </button>
              </div>

              <button
                className={`${(completed || validValue) ? 'text-white bg-blue' : 'bg-midnight text-blue'} btn-submit w-full mt-10 p-4 text-center rounded-xl`}
                onClick={showConfirm}
                disabled={!valueFrom || valueFrom > 1000 || !valueTo || valueTo > 1000}
              >
                {getButton()}
              </button>
            </div>
          </div>

          <div className='col-span-1'>
            <ul role="feed" className="relative flex flex-col gap-12 pl-8">
              <li role="article" className="relative pl-8 text-center">
                {getStep(1)}
                <div className="flex flex-col flex-1 gap-4">
                  <p className="font-semibold">Starting</p>
                </div>
              </li>
              <li role="article" className="relative pl-8 text-center">
                {getStep(2)}
                <div className="flex flex-col flex-1 gap-4">
                  <p className="font-semibold">Bridge</p>
                </div>
              </li>
              <li role="article" className="relative pl-8 text-center">
                {getStep(3)}

                <div className="flex flex-col flex-1 gap-4">
                  <p className="font-semibold">Complete</p>
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

      {completed && <ToastSuccess />}

      <SelectToken show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default Transfer;
