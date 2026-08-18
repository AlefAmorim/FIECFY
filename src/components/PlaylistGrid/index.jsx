import PlaylistCard from "../PlaylistCard";

function PlaylistGrid() {
  return (
    <div className="grid-playlist grid grid-cols-2 lg:grid-cols-4  gap-6">
      <PlaylistCard description="The top ten musics" title="Top 10"/> 
      <PlaylistCard description="To enjoy the weekend" title="Top Weekend" />
      <PlaylistCard description="Take a break" title="Lo-fi" />
      <PlaylistCard description="The rock legends" title="Rock" />
      <PlaylistCard description="To remember the old times" title="The old ones" />
    </div>
  );
}

export default PlaylistGrid;
