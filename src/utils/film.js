import dayjs from 'dayjs';

export const formatRuntime = (runtime) => {
  const date = dayjs().startOf('day').minute(runtime);
  const hours = Number(date.format('H'));
  const minutes = Number(date.format('mm'));
  const humanizedHours = (hours !== 0) ? `${hours}h` : '';
  const humanizedMinutes = (minutes !== 0) ? `${minutes}m` : '';
  return `${humanizedHours} ${humanizedMinutes}`.trim();
};

export const formatReleaseDate = (releaseDate) => dayjs(releaseDate).format('D MMMM YYYY');

export const formatCommentDate = (commentDate) => {
  const date1 = dayjs();
  const date2 = dayjs(commentDate);
  const diffDayCount = date1.diff(date2, 'day');

  if (diffDayCount === 0) {
    return 'Today';
  }

  if (diffDayCount >= 1 && diffDayCount <= 3) {
    return `${diffDayCount} days ago`;
  }

  return dayjs(commentDate).format('YYYY/MM/DD HH:mm');
};

export const sortFilmsByDate = (prevFilm, currentFilm) => currentFilm.releaseDate.getTime() - prevFilm.releaseDate.getTime();

export const sortFilmsByRating = (prevFilm, currentFilm) => currentFilm.totalRating - prevFilm.totalRating;

export const sortCommentsByDate = (prevComment, currentComment) => (dayjs(prevComment.date).isAfter(dayjs(currentComment.date))) ? 1 : -1;
