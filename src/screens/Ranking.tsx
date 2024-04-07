export default function Ranking() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-8'>
        <div className='headerContainer'>
          <div className='header'>Ranking</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='levelSelected '>INTEREST WISE</div>
          <div className='level '>REFER WISE</div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='rankNum'>1</div>
              <div>
                <div className='rankingName'>Code Antu</div>
                <div className='rankingAmount'> Amount: ₹ 71095.50</div>
              </div>
            </div>
              <img src='./icons/1.svg' alt='' className='w-6' />
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
