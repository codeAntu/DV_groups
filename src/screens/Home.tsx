export default function Home() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-4'>
        <div className='headerContainer'>
          <div className='header'>
            <img src='./icons/appIcon.svg' alt='' className='w-20' />
          </div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='flexCol fixed bottom-24  right-5 justify-center gap-0 '>
          <div className='rounded-full bg-[#F1F5FF] p-4'>
            <img src='./icons/support.svg' alt='' className='w-6' />
          </div>
          <button className='absolute -bottom-2 left-px w-full rounded-full bg-accent px-1 py-0.5 text-[10px] font-semibold text-white'>
            Support
          </button>
        </div>
        <div className='flexCol gap-5 '>
          <div className='mitraCard '>
            <div className='mitraImgContainer'>
              <div className='mitraHeader'>
                Introducing <span>ASTRA</span>
              </div>
              <div className='mitraText '>
                Transform CX with user-friendly robots for enhanced engagement and valuable data capture.
              </div>
              <div className=''>
                <button className='buttonRounded px-10'>Join Us</button>
              </div>
            </div>
            <div className=' w-72 '>
              <img src='./icons/robot.svg' alt='' className='h' />
            </div>
          </div>
          <div className='walletCard'>
            <div className='flex items-center justify-between  '>
              <div>
                <div className='text-sm font-medium'>wallet Balance</div>
                <div className='text-3xl font-semibold text-accent'>$ 2000.00</div>
              </div>
              <div>
                <img src='./icons/wallet2.svg' alt='' className='w-9' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <button className='buttonRounded px-5'>
                  <img src='./icons/withdraw.svg' alt='' className='buttonIcon' />
                  <div className='text-xs'>Withdraw</div>
                </button>
              </div>
            </div>
          </div>
          <div className='inviteCard '>
            <div className='flexCol gap-4'>
              <div> Refer Friends and Earn 1,500,000</div>
              <div>
                <button className='inviteCardBtn'>Earn extra cash rewards</button>
              </div>
              <div>
                <button className='inviteCardBt2 flex-grow-0'>Invite Now</button>
              </div>
            </div>
            <div className='flexCenter w-44 '>
              <img src='./icons/man.svg' alt='' className='p-1' />
            </div>
          </div>
          <div>
            <button className='buttonRounded px-4'>
              <img src='./icons/report.svg' alt='' className='buttonIcon' />
              <div>Live Report</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
