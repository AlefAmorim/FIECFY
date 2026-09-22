import PlaylistCard from "../PlaylistCard";

function PlaylistGrid({playlistData}) {
  return (
    <div className=" grid-playlist flex  p-3 overflow-x-hidden inset-shadow-2xs  inset-zinc-100 overflow-y-hidden gap-6">
      {
        playlistData.map((data) => (
          <PlaylistCard key={data.id} description={data.description} title={data.title} imgUrl={data.thumbnailUrl}/>
        ))
      }
    </div>
  );
}

export default PlaylistGrid;
