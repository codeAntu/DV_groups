export default function Profile() {
  return (
    <div className='component pb-24 '>
      <div className='maxWidth flex h-full min-h-[100dvh] w-full  flex-col justify-between gap-4'>
        <div className='header '>Profile</div>

        <div className=' flex flex-col gap-8'>
          <div className='flexColCenter gap-3'>
            <div>
              <img src='./icons/appIcon.svg' alt='' className='h-24 w-24 rounded-full bg-accent/20' />
            </div>
            <div>
              <div className='text-xl font-bold'>username</div>
              <div className='text-center text-sm font-semibold text-black/40'>Id 12345678</div>
            </div>
          </div>

          <div className='flexCol gap-3'>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-3'>
                <img src='./icons/profile.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Account</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-4'>
                <img src='./icons/key2.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Change Password</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-4'>
                <img src='./icons/share.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Share</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-4'>
                <img src='./icons/download2.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Download app</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex items-center gap-5 '>
            <img src='./icons/telegram.svg' alt='' className='shareIcon' />
            <img src='./icons/whatsapp.svg' alt='' className='shareIcon' />
            <img src='./icons/youtube.svg' alt='' className='shareIcon' />
            <img src='./icons/insta.svg' alt='' className='shareIcon' />
          </div>
          <div className='text-sm font-[550]  text-accent'>Follow us</div>
        </div>

        <button className='buttonRounded w-full gap-3'>
          <img src='./icons/logout2.svg' alt='' />
          <div className='text-base font-normal'> Logout</div>
        </button>
      </div>
    </div>
  )
}
