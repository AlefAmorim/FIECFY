import PlaylistCard from "../PlaylistCard";

function PlaylistGrid({playlistData}) {
  return (
    <div className=" grid-playlist flex  gap-6">
      {
        playlistData.map((data) => (
          <PlaylistCard key={data.id} description={data.description} title={data.title} imgUrl={data.coverUrl}/>
        ))
      }
    </div>
  );
}

export default PlaylistGrid;
