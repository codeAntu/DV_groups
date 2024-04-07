export default function UPI() {
  return (
    <div className='component flex justify-center  '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>UPI PAYMENT</div>
        <div className='content'>
          <div className='flexCol gap-5 '>
            <div className='text-sm font-semibold'>
              You have requested <span className='text-accent'>5000.00 INR</span>. Please pay{' '}
              <span className='text-accent'>5000.00 INR</span> for successful payment
            </div>
            <div className='flex flex-col gap-1.5'>
              <div className='text-sm font-bold'>Please send your payment on this details through any UPI app.</div>
              <div className='text-xs font-medium text-[#EE3838]'>*Deposited amount will be credit within 48 hours</div>
            </div>
            <div className='text-sm font-bold text-accent'>UPI ID : dvgroups@axl</div>
            <div className='inputContainer'>
              <div className='inputText'>UTR Number</div>
              <div className='inputBox'>
                <input type='text' className='input' placeholder='Enter UTR Number' />
              </div>
            </div>
          </div>
          <div className='flexCenter w-full flex-col gap-3 '>
            <button className='buttonRounded w-full py-4 text-sm font-semibold'>Pay Now</button>
            <div className='flex items-center justify-center gap-2'>
              <img src='./icons/lock.svg' alt='' className='w-5' />
              <div className='text-xs text-[#35D49C]'>Your payment is secured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
