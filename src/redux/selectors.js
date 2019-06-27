import { createSelector } from 'reselect';

// eslint-disable-next-line import/prefer-default-export
export const getIsAuthenticated = createSelector(
  state => state.userData.expiresAt,
  expiresAt => new Date().getTime() < expiresAt
);
