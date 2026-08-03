import PlaylistCard from "../PlaylistCard";


function PlaylistGrid() {
    return (
        <div className="grid-playlist flex gap-5  flex-wrap">
            <PlaylistCard/> <PlaylistCard/> <PlaylistCard/> <PlaylistCard/> <PlaylistCard/>
        </div>
    )
}

export default PlaylistGrid;