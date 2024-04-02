export default function Slider() {
  return (
    <div className='component '>
      <div className='maxWidth relative'>
        <div className='menu'>
          <div className='flexCol gap-9'>
            <div>
              <img src='./icons/appIcon.svg' alt='' className='w-20 pt-3' />
            </div>
            <div className='menuItems'>
              <a className='menuItemActive'>
                <img src='./icons/home.svg' alt='' className='menuItemIcon' />
                <div>Home</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/messages.svg' alt='' className='menuItemIcon' />
                <div>About Us</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/exchange.svg' alt='' className='menuItemIcon' />
                <div>My Referral</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/24-7.svg' alt='' className='menuItemIcon' />
                <div>24/7 Support</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/policy.svg' alt='' className='menuItemIcon' />
                <div>Policies</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/ranking.svg' alt='' className='menuItemIcon' />
                <div>Ranking</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/notification.svg' alt='' className='menuItemIcon' />
                <div>Notification</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/report2.svg' alt='' className='menuItemIcon' />
                <div>Live Report</div>
              </a>
            </div>
            <a className='flex items-center gap-3 px-5 text-sm font-semibold text-accent'>
              <img src='./icons/logOut.svg' alt='' />
              <div className='text-[#EE3838]'>LogOut</div>
            </a>
          </div>
        </div>
        <div className='menuHide'></div>
      </div>
    </div>
  )
}
