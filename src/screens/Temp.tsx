export default function Temp() {
  return (
    <div className='component flex justify-center  pb-24'>
      <div className='maxWidth flex flex-col gap-4'>
        <div className='headerContainer'>
          <div className='header'>Plans</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='grid grid-cols-2 gap-5 px-1'>
          <div className='levelSelected'>PLAN</div>
          <div className='level'>YOUR PLAN</div>
        </div>
        <div className='flexCol gap-3'>
          <div className='productCard flex-row'>
            <div className='productCardImgContainer'>
              <img src='./icons/plan.png' alt='' className='productCardImg' />
            </div>
            <div className='flexCol flex-grow justify-between gap-2'>
              <div className='productCardText'>Pic Automation</div>
              <div className='productCardSubText  '>
                <div className='flex justify-between'>
                  <div>Day Income</div>
                  <div>₹489</div>
                </div>
                <div className='flex justify-between'>
                  <div>Earning Days</div>
                  <div>49 Days</div>
                </div>
                <div className='flex justify-between'>
                  <div>Total Income</div>
                  <div>₹489</div>
                </div>
              </div>
              <div className='textAccent flex justify-between'>
                <div>Invest Amount</div>
                <div>₹489</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
