import { COMMENT_TEXTS, EMOTIONS, NAMES } from '../const.js';
import { getRandomItem, getRandomPastDate } from '../utils/common.js';
import { formatCommentDate } from '../utils/film.js';

export const generateComment = (id) => {
  const emotion = getRandomItem(EMOTIONS);
  const comment = getRandomItem(COMMENT_TEXTS);
  const author = getRandomItem(NAMES);
  const date = formatCommentDate(getRandomPastDate(0, 10));

  return {
    id,
    emotion,
    comment,
    author,
    date
  };
};
