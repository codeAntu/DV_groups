export default function Slider() {
  return (
    <div className='component '>
      <div className='maxWidth relative'>
        <div className='slider'>
          <div className='flexCol gap-9'>
            <div>
              <img src='./icons/appIcon.svg' alt='' className='w-20 pt-3' />
            </div>
            <div className='sliderItems'>
              <a className='sliderItemActive'>
                <img src='./icons/home.svg' alt='' className='sliderItemIcon' />
                <div>Home</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/messages.svg' alt='' className='sliderItemIcon' />
                <div>About Us</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/exchange.svg' alt='' className='sliderItemIcon' />
                <div>My Referral</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/24-7.svg' alt='' className='sliderItemIcon' />
                <div>24/7 Support</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/policy.svg' alt='' className='sliderItemIcon' />
                <div>Policies</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/ranking.svg' alt='' className='sliderItemIcon' />
                <div>Ranking</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/notification.svg' alt='' className='sliderItemIcon' />
                <div>Notification</div>
              </a>
              <a className='sliderItem'>
                <img src='./icons/report2.svg' alt='' className='sliderItemIcon' />
                <div>Live Report</div>
              </a>
            </div>
            <a className='flex items-center gap-3 px-5 text-sm font-semibold text-accent'>
              <img src='./icons/logOut.svg' alt='' />
              <div className='text-[#EE3838]'>LogOut</div>
            </a>
          </div>
        </div>
        <div className='sliderHide'></div>
      </div>
    </div>
  )
}
