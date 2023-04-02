const RecentPage: React.FC = () => {
  return (
    <>
      <div className="container pt-20 px-4 pb-4 mx-auto null">
        <div className="flex">
          <div className="flex flex-col w-2/6">
            <div className="flex justify-between text-sm"><span className="font-bold font-thin text-white uppercase">Recently played by me</span></div>
            <div className="grid h-48 grid-cols-2 xl:grid-cols-3 overflow-hidden">
              <div className="px-2 py-2 w-full ">
                <a className="transition-all duration-150 flex w-full h-full rounded-lg" href="#/game-overview/1639424047524" style={{ background: 'rgb(44, 43, 46)' }}>
                  <img src="#" alt="#" className="cursor-pointer object-fill rounded w-full h-full" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-4/6" />
        </div>
      </div>
      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
        <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
      </div>
      <div className="ps__rail-y" style={{ top: '0px', right: '0px' }}>
        <div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} />
      </div>
    </>
  )
}
export default RecentPage;