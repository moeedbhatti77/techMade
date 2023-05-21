import { Router } from "express";
import projectRouter from './projectTimeline.js';
const apiRouter = Router();

apiRouter.use("/projectTimelines", projectRouter);

export default apiRouter



