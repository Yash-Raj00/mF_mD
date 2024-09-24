export default {
    app: {
      port: Number(process.env.APP_PORT) || 8080,
      url: process.env.APP_URL,
    },
    db: {},
    environment: process.env.NODE_ENV,
  };
  