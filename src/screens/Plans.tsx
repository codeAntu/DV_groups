export default function Plans() {
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
          <div className='productCard'>
            <div className='flex items-start'>
              <div className='status pending '>
                <img src='./icons/pending.svg' alt='' className='statusImg' />
                <div>Pending</div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='productCardImgContainer'>
                <img src='./icons/plan.png' alt='' className='productCardImg' />
              </div>
              <div className='flexCol flex-grow justify-between'>
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
          <div className='productCard'>
            <div className='flex items-start'>
              <div className='status approved'>
                <img src='./icons/approved.svg' alt='' className='statusImg' />
                <div>Approved</div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='productCardImgContainer'>
                <img src='./icons/plan.png' alt='' className='productCardImg' />
              </div>
              <div className='flexCol flex-grow justify-between'>
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
          <div className='productCard'>
            <div className='flex items-start'>
              <div className='status rejected'>
                <img src='./icons/rejected.svg' alt='' className='statusImg' />
                <div>Rejected</div>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='productCardImgContainer'>
                <img src='./icons/plan.png' alt='' className='productCardImg' />
              </div>
              <div className='flexCol flex-grow justify-between'>
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
    </div>
  )
}
