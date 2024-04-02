export default function Banned() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col items-center gap-36 '>
        <div className=' flex flex-col items-center gap-14'>
          <img src='./icons/banned.svg' alt='' className='w-28' />
          <div className='flex flex-col gap-2.5 text-center'>
            <div className='text-lg font-bold '>Your account has been suspended</div>
            <div className='text-left text-sm font-semibold text-black/60'>Reason:</div>
          </div>
        </div>
        <div className='flex w-3/4 flex-col gap-2'>
          <button className='buttonRounded2 w-full text-sm font-semibold'>Contact Us</button>
          <button className='buttonRounded w-full text-sm font-semibold'>Got it</button>
        </div>
      </div>
    </div>
  )
}
