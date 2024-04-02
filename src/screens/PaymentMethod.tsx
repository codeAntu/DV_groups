export default function PaymentMethod() {
  return (
    <div>
      <button id='popUpBtn'>Pop Up</button>
      <div id='popUp' className='popUp'>
        <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-5 py-6 backdrop-blur-2xl '>
          <div className='flex w-full flex-col items-center gap-6 px-6 text-center'>
            <div className='text-2xl font-semibold' id='text'>
              Withdrawal Method
            </div>

            <div className='flex w-full flex-col gap-4 '>
              <label htmlFor='Bank' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                <input type='radio' id='Bank' name='quick-opt' className='radio ' />
                <div className=''>Bank Account</div>
              </label>
              <label htmlFor='UPI_ID' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                <input type='radio' id='UPI_ID' name='quick-opt' className='radio ' />
                <div className=''>UPI ID</div>
              </label>
            </div>
          </div>

          <div className='flex w-full flex-col items-center gap-3 px-4'>
            <button className='buttonRounded2 w-full' id='btn1'>
              Cancel
            </button>
            <button className='buttonRounded w-full' id='btn2'>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// payment method

{/* <div>
<button id='popUpBtn'>Pop Up</button>
<div id='popUp' className='popUp'>
  <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-5 py-6 backdrop-blur-2xl '>
    <div className='flex w-full flex-col items-center gap-6 px-6 text-center'>
      <div className='text-2xl font-semibold' id='text'>
        Payment Method
      </div>

      <div className='flex w-full flex-col gap-4'>
        <label htmlFor='UPI' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
          <input type='radio' id='UPI' name='quick-opt' className='radio ' />
          <div className=''>UPI</div>
        </label>
        <label htmlFor='QR_CODE' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
          <input type='radio' id='QR_CODE' name='quick-opt' className='radio ' />
          <div className=''>QR CODE</div>
        </label>
      </div>
    </div>

    <div className='flex w-full flex-col items-center gap-3 px-4'>
      <button className='buttonRounded2 w-full' id='btn1'>
        Cancel
      </button>
      <button className='buttonRounded w-full' id='btn2'>
        Ok
      </button>
    </div>
  </div>
</div>
</div> */}
