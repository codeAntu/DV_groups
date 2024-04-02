export default function Notification() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-8'>
        <div className='headerContainer'>
          <div className='header'>Ranking</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='day'>Today </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 px-5 text-sm'>
              <div className='rounded-full bg-accent p-1'></div>
              <div className='leading-tight'>
                <span className='font-medium text-accent'>Code Antu </span> your funds will be deposited shortly{' '}
                <span className='text-black/40'>• 30 sec</span>
              </div>
            </div>
            <hr />
            <div className='flex items-center gap-4 px-5 text-sm'>
              <div className='rounded-full bg-accent p-1'></div>
              <div className='leading-tight'>
                <span className='font-medium text-accent'>Code Antu </span> your funds will be deposited shortly{' '}
                <span className='text-black/40'>• 30 sec</span>
              </div>
            </div>
            <hr />
            <div className='flex items-center gap-4 px-5 text-sm'>
              <div className='rounded-full bg-accent p-1'></div>
              <div className='leading-tight'>
                <span className='font-medium text-accent'>Code Antu </span> your funds will be deposited shortly{' '}
                <span className='text-black/40'>• 30 sec</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='day'>Tomorrow </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 px-5 text-sm'>
              <div className='rounded-full bg-accent p-1'></div>
              <div className='leading-tight'>
                <span className='font-medium text-accent'>Code Antu </span> your funds will be deposited shortly{' '}
                <span className='text-black/40'>• 30 sec</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}
