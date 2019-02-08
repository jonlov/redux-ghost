export let host = null; // .e.g 'http://localhost:2368',
export let contentKey = null; // .e.g 'ghost-frontend',

export const config = (options = {}) => {
  host = options.host;
  contentKey = options.contentKey;
};
