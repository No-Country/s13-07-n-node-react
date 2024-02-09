export const config = (app, config) => {
  config.forEach((element) => {
    app.use(element);
  });
};
