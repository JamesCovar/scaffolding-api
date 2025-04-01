import express from "express";
import { exampleController } from "../controller/example.controller";
import { authMiddleware } from "../middleware/authmiddleware";

const router = express.Router({ mergeParams: true });

router.post("/example-route", exampleController);
router.get("/example-route-middleware", authMiddleware, exampleController);

export default router;
