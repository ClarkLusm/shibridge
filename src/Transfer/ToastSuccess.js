import { useEffect, useState } from "react";

export function ToastSuccess() {

  const [open, setOpen] = useState(true);

  useEffect(() => {
    var time = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(time);
  }, [open])


  return open
    ? <div id="toast-success" className="fixed top-20 right-6 z-99 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 rounded-lg shadow border border-green bg-black" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
        <img src="./icons/check-select.svg" />
      </div>
      <div className="ml-3 text-sm font-normal">Successfully Completed!</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-6 w-6" data-dismiss-target="#toast-success" aria-label="Close"
        onClick={() => setOpen(false)}
      >
        <span className="sr-only">Close</span>
        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
    : null;
}

