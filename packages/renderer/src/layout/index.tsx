
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="select-none fixed h-screen w-screen">
        <div className="relative flex flex-col flex-1">
          {children}
        </div>
      </div>
    </>
  )
}
export default Layout;