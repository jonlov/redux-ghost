export let host = null; // .e.g 'http://localhost:2368',
export let contentKey = null; // .e.g 'b67bf578201553cf80ff55c170',

export const config = (options = {}) => {
  host = options.host;
  contentKey = options.contentKey;
};
