import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'
import Player from "./components/Player";

function App() {
  return (
    <div className="layout-principal p-2 grid grid-1 w-screen md:grid-cols-[160px_1fr]  text-white bg-gray-900 min-h-dvh">
        <Sidebar />
      <div className="flex flex-col gap-5 h-full w-full p-5 bg-gray-800 rounded-lg">
        <Header/>
        <main className="col-start-2 col-end-3 row-start-2 static ">
          <PlaylistGrid/>
          <Player/>
        </main>
      </div>
    </div>
  )
}

export default App
