import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { employerGetAllApplications,jobseekerGetAllApplications,jobseekerDeleteApplication,postApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;