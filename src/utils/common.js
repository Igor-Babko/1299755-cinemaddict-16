export const watchedFilmCountToUserRank = (count) => {
  let userRank = null;

  if (count >= 21) {
    userRank = 'Movie Buff';
  } else if (count >= 11 && count <= 20) {
    userRank = 'Fan';
  } else if (count >= 1 && count <= 10) {
    userRank = 'Novice';
  } else {
    userRank = '';
  }
  return userRank;
};
