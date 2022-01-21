import dayjs from 'dayjs';
export const formatRuntime = (runtime = 0) => {
  const date = dayjs().startOf('day').minute(runtime);
  const hours = Number(date.format('H'));
  const minutes = Number(date.format('mm'));
  const humanizedHours = (hours !== 0) ? `${hours}h` : '';
  const humanizedMinutes = (minutes !== 0) ? `${minutes}m` : '';
  return `${humanizedHours} ${humanizedMinutes}`.trim();
};
export const formatReleaseDate = (releaseDate) => dayjs(releaseDate).format('D MMMM YYYY');

export const formatCommentDate = (commentDate) => dayjs(commentDate).format('YYYY/MM/DD HH:mm');

export const sortFilmsByDate = (prevFilm, currentFilm) => currentFilm.filmInfo.releaseDate.getTime() - prevFilm.filmInfo.releaseDate.getTime();

export const sortFilmsByRating = (prevFilm, currentFilm) => currentFilm.filmInfo.totalRating - prevFilm.filmInfo.totalRating;
