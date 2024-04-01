export default function MyFamily() {
  return (
    <div className='component flex justify-center'>
      <div className='maxWidth flexCol gap-5 '>
        <div className='header'>My Family</div>
        <div className='flexCol gap-5'>
          <div className='card gap-1.5 p-3'>
            <div className='contentHeader flex justify-between '>
              <div className=''>0</div>
              <div>₹0.00</div>
            </div>
            <div className='contentText flex justify-between '>
              <div>Total Member</div>
              <div>Total Profit</div>
            </div>
          </div>
          {/* <div className='flex  gap-2'>
            <div className='levelSelected'>Level 1</div>
            <div className='level'>Level 2</div>
            <div className='level'>Level 3</div>
          </div> */}
        </div>
        {/* <div className='flex h-full flex-col items-center justify-center gap-5 pb-10'>
          <img src='./icons/noMember.svg' alt='' className='w-24' />
          <div className='text-center text-sm font-semibold text-accent '>No Member</div>
        </div> */}
        <div className='flex flex-col gap-2.5 pt-5'>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
          <div className='member'>
            <img src='./icons/member.svg ' alt='' className='memberIcon' />
            <div>Code Antu</div>
          </div>
        </div>
      </div>
    </div>
  )
}
