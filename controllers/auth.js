const express = require("express")
const login = require("./login")
const register = require("./register")
const logout = require("./logout")
const usd = require("./usd")
const upd = require("./upd")
const chg = require("./chg")
const upd2 = require("./upd2")
const upd3 = require("./upd3")
const upd4 = require("./upd4")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout",logout)
router.get("/usd",usd)
router.post("/upd", upd)
router.post("/chg", chg)
router.post("/upd2", upd2)
router.post("/upd3", upd3)
router.post("/upd4", upd4)
// router.get("/facpanel",facpanel)
// router.get("/logout", logout)

module.exports = router