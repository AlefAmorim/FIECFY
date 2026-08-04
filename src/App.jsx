import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'

function App() {
  return (
    <div className="layout-principal p-2 grid grid-cols-2 grid-cols-[100px_1fr]  text-white bg-gray-900 min-h-dvh">
        <Sidebar />
      <div className="grid grid-cols-2  grid-cols-[150px] grid-rows-[90px_150px] gap-5 h-full w-full">
        <Header/>
        <main className="col-start-2 col-end-3 row-start-2">
          <PlaylistGrid/>
        </main>
      </div>
    </div>
  )
}

export default App
