import { Router } from "express";

const router = Router();

router.route("/").get(({}, res) => res.json({ message: "Hello Dear User" }));

export default router;
