// eslint-disable-next-line import/prefer-default-export
export const getIsAuthenticated = state => {
  const { expiresAt } = state.userData;
  // console.log(new Date().getTime());
  // console.log(expiresAt);
  // console.log(new Date().getTime() < expiresAt);
  return new Date().getTime() < expiresAt;
};
