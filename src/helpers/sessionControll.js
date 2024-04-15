const SESSION_KEY = "events-content";

const setSessionData = (data) => {
  if (!data) return null;
  const stringifyData = JSON.stringify(data);
  sessionStorage.setItem(SESSION_KEY, stringifyData);
};

const getSessionData = () => {
  const sessionData = sessionStorage.getItem(SESSION_KEY) || undefined;
  return sessionData ? JSON.parse(sessionData) : undefined;
};

module.exports = {
  setSessionData,
  getSessionData,
};
