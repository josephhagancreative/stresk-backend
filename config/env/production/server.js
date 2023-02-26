module.exports = ({ env }) => ({
  url: env("https://stresk.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["z40svj5fzhuwuvja", "r8d1bu6acqp1060l"]),
  },
})
