export const POST_TYPE_LOOKUP_ARTICLE = 'ATCL';
export const POST_TYPE_LOOKUP_COMMENT = 'CMMT';
export const POST_TYPE_LOOKUP_REPLY   = 'RPLY';

export const POST_TYPE_NAME_ARTICLE = 'Article';
export const POST_TYPE_NAME_COMMENT = 'Comment';
export const POST_TYPE_NAME_REPLY   = 'Reply';

export const POST_TYPE_MAP = {
  [POST_TYPE_LOOKUP_ARTICLE]: {
    lookup: POST_TYPE_LOOKUP_ARTICLE,
    name: POST_TYPE_NAME_ARTICLE,
  },
  [POST_TYPE_LOOKUP_COMMENT]: {
    lookup: POST_TYPE_LOOKUP_COMMENT,
    name: POST_TYPE_NAME_COMMENT,
  },
  [POST_TYPE_LOOKUP_REPLY]: {
    lookup: POST_TYPE_LOOKUP_REPLY,
    name: POST_TYPE_NAME_REPLY,
  },
}
