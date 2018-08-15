var playlist = { artist: 'names', song: 'songs'};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artist: [artistName]}, {song: [songTitle]});
  return playlist;
}