import PlaylistCard from "../PlaylistCard";

function PlaylistGrid({playlistData}) {
  return (
    <div className="grid-playlist grid grid-cols-2 lg:grid-cols-4  gap-6">
      {
        playlistData.map((data) => (
          <PlaylistCard key={data.id} description={data.description} title={data.title} imgUrl={data.coverUrl}/>
        ))
      }
      {/* <PlaylistCard description="The top ten musics" title="Top 10"/> 
      <PlaylistCard description="To enjoy the weekend" title="Top Weekend" />
      <PlaylistCard description="Take a break" title="Lo-fi" />
      <PlaylistCard description="The rock legends" title="Rock" />
      <PlaylistCard description="To remember the old times" title="The old ones" /> */}
    </div>
  );
}

export default PlaylistGrid;
