export default function LiveReport() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-8'>
        <div className='headerContainer'>
          <div className='header'>Live Report</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='levelSelected text-xs'>LATEST DEPOSIT</div>
          <div className='level text-xs'>LATEST WITHDRAW</div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
          </div>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
          </div>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
