export const UPDATE_SCRIPT = "UPDATE_SCRIPT";
export const CHANGE_DARK_MODE = "CHANGE_DARK_MODE";
export const updateScript = script => ({
  type: UPDATE_SCRIPT,
  payload: { script }
});
export const changeDarkMode = () => ({
  type: CHANGE_DARK_MODE
});
