// eslint-disable-next-line import/prefer-default-export
export const getIsAuthenticated = state => {
  const { expiresAt } = state.userData;
  return new Date().getTime() < expiresAt;
};
