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
