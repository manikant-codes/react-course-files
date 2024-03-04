function cleanUpParams(params) {
  const cleaned = {};
  for (const key in params) {
    if (params[key]) {
      cleaned[key] = params[key];
    }
  }
  return cleaned;
}

function getStateFromSearchQuery(query) {
  let params = query.slice(1);

  let initialState = {
    task: "",
    isCompleted: "",
    sort: "",
  };

  if (!query) {
    return initialState;
  }

  params = params.split("&");

  if (params.length) {
    params = params.forEach(function (value, index) {
      const temp = value.split("=");
      if (temp[0] === "task") {
        initialState[temp[0]] = temp[1].replaceAll("+", " ");
      } else {
        initialState[temp[0]] = temp[1];
      }
    });
  }

  return initialState;
}

export { cleanUpParams, getStateFromSearchQuery };
