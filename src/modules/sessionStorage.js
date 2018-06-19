export const TOKEN = "session/login/token";
export const USER = "session/login/user";

export const loadFromSessionStorage = key => {
  try {
    const serializedState = sessionStorage.getItem(key);

    if (!serializedState) return null;

    return JSON.parse(serializedState);
  } catch (_) {
    return null;
  }
};

export const removeFromSessionStorage = key => {
  try {
    sessionStorage.removeItem(key);
  } catch (_) {}
};

export const saveToSessionStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);

    sessionStorage.setItem(key, serializedState);
  } catch (_) {}
};
