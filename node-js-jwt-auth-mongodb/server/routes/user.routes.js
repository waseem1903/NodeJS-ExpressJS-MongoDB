const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {

    app.post('/api/v1/registerUser', controller.newUser)
    app.get('/api/v1/allUsers', controller.allUsers)
    app.get('/api/v1/oneUser/:id', controller.oneUser)
    app.get('/api/v1/editUser', controller.editUser)
    app.delete('/api/v1/removeUser/:id', controller.removeUser)

    // app.use(function (req, res, next) {
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    // });

    // app.get("/api/test/all", controller.allAccess);

    // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

    // app.get(
    //     "/api/test/mod",
    //     [authJwt.verifyToken, authJwt.isModerator],
    //     controller.moderatorBoard
    // );

    // app.get(
    //     "/api/test/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminBoard
    // );
};