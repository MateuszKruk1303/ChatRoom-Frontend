const env = <const>{
  apiUrl: process.env.REACT_APP_API_URL || '',
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    console.error(`Missing ${key} environmental variable.`);
  }
});

export default env;
