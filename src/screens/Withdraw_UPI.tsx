export default function Withdraw_OTP() {
  return (
    <div className='component flex justify-center  '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>Withdraw</div>
        <div className='content'>
          <div className='flexCol gap-5 '>
            <div className='flexCol gap-2'>
              <div className='inputContainer'>
                <div className='inputText'>Withdraw Amount</div>
                <div className='inputBox'>
                  <input type='text' className='input' placeholder='Enter Withdraw Amount' />
                </div>
              </div>
              <div className='text-sm font-semibold text-black/30 '>
                Withdraw Charges: <span className='text-[#EE3838]'> ₹0.00</span>{' '}
              </div>
              <div className='flex flex-col gap-1.5'>
                <div className='inputContainer'>
                  <div className='inputText'>UPI ID</div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Please enter your UPI ID' />
                  </div>
                </div>
                <div className='my-2 flex items-center gap-1 rounded-lg bg-[#EE3838]/40 p-1'>
                  <img src='./icons/info.svg' alt='' className='w-5' />
                  <div className='text-xs text-[#EE3838]'>UPI ID Change Not Allowed</div>
                </div>
                <div className='inputContainer'>
                  <div className='inputText'>UPI ID Holder Name</div>
                  <div className='inputBox'>
                    <input type='text' className='input' placeholder='Enter your UPI ID Holder Name' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flexCol gap-2'>
              <div className='contentHeader'>Select investment plan</div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='200' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                  <input type='radio' id='200' name='quick-opt' className='radio ' />
                  <div className=''>₹200 (Beginner Plan)</div>
                </label>
                <label htmlFor='500' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                  <input type='radio' id='500' name='quick-opt' className='radio ' />
                  <div className=''>₹500 (Standard Plan)</div>
                </label>
                <label htmlFor='1000' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                  <input type='radio' id='1000' name='quick-opt' className='radio ' />
                  <div className=''>₹1000 (Refer Wallet)</div>
                </label>
              </div>
            </div>
          </div>
          <div className='flexCenter w-full py-4'>
            <button className='buttonRounded w-2/3'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}
