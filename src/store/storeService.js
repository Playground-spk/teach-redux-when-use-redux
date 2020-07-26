export const saveState = (state) => {
  const serializeState = JSON.stringify(state);
  localStorage.setItem("store", serializeState);
};

export const loadState = () => {
  const serializeState = localStorage.getItem("store");
  if (serializeState) {
    return JSON.parse(serializeState);
  } else {
    return undefined;
  }
};
