const token = `acFjSd1XjmEP2B3D34SDxeLj`;

module.exports = {
  path: "/auth/login",
  methods: "POST",
  data: {
    code: "0",
    success: true,
    msg: "成功",
    data: {
        token
    },
  }
}