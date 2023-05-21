import { Router } from "express";
const projectTimeline = Router();
import { getData } from '../controller/projectTimelines.js'
projectTimeline.get('/', getData)
export default projectTimeline