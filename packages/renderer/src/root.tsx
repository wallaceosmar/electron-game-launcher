import {
  Outlet
} from 'react-router-dom';
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore,
  VscSettingsGear,
  VscChevronLeft,
  VscChevronRight,
  VscDesktopDownload,
  VscCalendar,
} from 'react-icons/vsc';
const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="select-none fixed h-screen w-screen">
        <div className="relative flex w-full h-screen overflow-hidden antialiased" style={{ background: 'rgba(53, 53, 64, 0.8)' }}>
          <div className="relative flex flex-col h-full md:block transition-all duration-500 ease-in-out" style={{ width: '18.5rem', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="flex flex-col h-full overflow-auto">
              <div className="z-20 absolute w-full p-8 py-4 drag">
                <div className="flex justify-between">
                  <div className="dropdown inline-block relative">
                    <button className="inline-flex items-center justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative btn-group btn-purple text-gray-300 text-opacity-50">
                      <VscSettingsGear />
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-12 hover:overflow-auto">
                <span className="flex font-medium text-sm text-gray-400 px-6 my-4 uppercase">Game</span>
                <nav className="flex flex-col w-full">
                  <a aria-current="page" className="cursor-pointer flex focus:outline-none hover:text-gray-400 items-center justify-between px-6 py-1 relative text-gray-700 text-opacity-75 w-full active text-white" href="#/recent">
                    <span className="flex items-center w-full">
                      <VscCalendar className="h-4 w-4 text-white fill-current" />
                      <span className="ml-4 capitalize text-gray-400">Recent</span>
                    </span>
                  </a>
                  <a className="cursor-pointer flex focus:outline-none hover:text-gray-400 items-center justify-between px-6 py-1 relative text-gray-700 text-opacity-75 w-full" href="#/owned-games">
                    <span className="flex items-center w-full">
                      <VscDesktopDownload className="h-4 w-4 fill-current text-white" />
                      <span className="ml-4 capitalize text-gray-400">Owned Games</span>
                      <span className="flex items-center justify-center text-gray-600 font-semibold bg-gray-200 bg-opacity-75 px-2 mr-3 rounded-full ml-auto" style={{ fontSize: '0.6rem' }}>0</span>
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col flex-1">
            <div className="absolute drag my-4 px-8 w-full z-20">
              <div className="flex justify-between">
                <div className="flex flex-shrink-0">
                  <div>
                    <button className="inline-flex items-center justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative btn-group btn-purple text-gray-300 text-opacity-50">
                      <VscChevronLeft />
                    </button>
                    <button className="inline-flex items-center justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative btn-group btn-purple text-gray-300 text-opacity-50">
                      <VscChevronRight />
                    </button>
                  </div>
                </div>
                <div className="flex flex-shrink-0">
                  <div className="dropdown inline-block relative">
                    <button className="justify-center p-2 text-xl leading-5 btn-purple font-semibold py-2 px-4 rounded-md inline-flex items-center ">
                      <span>
                        <span className="pl-2 text-sm">Add Game</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-shrink-0">
                  <div className="">
                    <button className="inline-flex items-center rounded-l-md justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative shadow-sm transition text-gray-300 bg-black bg-opacity-25 hover:bg-gray-400 hover:bg-opacity-25 w-no-drag">
                      <VscChromeMinimize />
                    </button>
                    <button className="inline-flex items-center justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative shadow-sm transition text-gray-300 bg-black bg-opacity-25 hover:bg-gray-400 hover:bg-opacity-25 w-no-drag">
                      <VscChromeMaximize />
                      <VscChromeRestore />
                    </button>
                    <button className="inline-flex items-center last:rounded-r-md justify-center p-2 px-3 text-xl leading-5 font-medium drag-none relative shadow-sm transition text-gray-300 bg-black bg-opacity-25 hover:bg-red-700 w-no-drag">
                      <VscChromeClose />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <main className="border-none flex flex-col flex-grow-0 flex-shrink-0 h-full overflow-auto w-full z-0">
              <div className="scrollbar-container ps">
                { children ?? <Outlet /> }
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
export default Root;