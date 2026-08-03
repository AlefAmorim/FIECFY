import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'

function App() {
  return (
    <div className="layout-principal p-2 grid grid-cols-2  grid-cols-[150px]  gap-5 ">
      <Sidebar />
      <Header/>
      <main className="col-start-2 col-end-3 row-start-2">
        <PlaylistGrid/>
      </main>
    </div>
  )
}

export default App
