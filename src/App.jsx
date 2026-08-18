import Sidebar from "./components/SideBar"
import PlaylistGrid from './components/PlaylistGrid';
import Header from './components/Header'
import Player from "./components/Player";
import Button from "./components/Button";

// function App() {
//   return (
//     <div className="layout-principal  grid grid-1 w-screen md:grid-cols-[220px_1fr]  text-white bg-gray-900 min-h-dvh">
//         <Sidebar />
//       <div className="flex flex-col gap-5 h-full w-full p-5 bg-gray-800 rounded-lg">
//         <Header/>
//         <main className="flex col-start-2 col-end-3 row-start-2  ">
//           <PlaylistGrid/>
//         </main>
//       </div>
//       <Player/> 
//     </div>
//   )
// }
function App() {
  return (
    <div className="layout-principal flex flex-col  w-screen text-white bg-zinc-950 h-screen">
      <div className="flex flex-1 overflow-hidden ">
          <Sidebar />
        <main className="flex-1 /*flex-col*/ gap-5 h-full w-full m-2 p-6 pt-0 bg-zinc-900 rounded-lg overflow-y-auto">
          <Header/>
          <div className="flex  flex-row gap-3 pt-10 flex-wrap">
            <CompactCard title="Good Vibes"/>
            <CompactCard title="Music to play"/>
            <CompactCard title="Lo-fi"/>
            <CompactCard title="Top 10"/>
          </div>
          <div className="h-[800px] pt-5">
            <PlaylistGrid/>
          </div>
        <Button>
          Play
        </Button>
        </main>
      </div>
      <Player/> 
    </div>
  )
}

export default App
