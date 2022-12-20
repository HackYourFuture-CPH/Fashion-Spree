const getLocalStorage = (key) => {
  const storageString = window.localStorage.getItem(key);
  return JSON.parse(storageString);
};

const setLocalStorage = (key, data) => {
  const storageString = JSON.stringify(data);
  window.localStorage.setItem(key, storageString);
};

export { getLocalStorage, setLocalStorage };
