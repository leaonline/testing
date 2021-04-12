export const unsafeInt = negative => negative
  ? (Number.MIN_SAFE_INTEGER - 1)
  : (Number.MAX_SAFE_INTEGER + 1)
