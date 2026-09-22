import PlaylistCard from "../PlaylistCard";

function PlaylistGrid({playlistData}) {
  return (
    <div className=" grid-playlist flex flex-wrap items-center overflow-x-auto overflow-y-hidden gap-6" >
      {
        playlistData.map((data) => (
          <PlaylistCard  key={data.id} description={data.description || ""} title={data.title} imgUrl={data.thumbnailUrl}/>
        ))
      }
    </div>
  );
}

export default PlaylistGrid;
