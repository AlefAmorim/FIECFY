import PlaylistCard from "../PlaylistCard";


function PlaylistGrid() {
    return (
        <div className="grid-playlist grid grid-cols-2 lg:grid-cols-4   gap-6">
            <PlaylistCard/> <PlaylistCard/> <PlaylistCard/> <PlaylistCard/> <PlaylistCard/>
        </div>
    )
}

export default PlaylistGrid;