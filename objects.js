var playlist = {'Artist': 'SongName'};

function updatePlaylist(playlist, artistName, songTitle) {
 Object.assign({}, playlist, { [artistName]: songTitle} );
}
