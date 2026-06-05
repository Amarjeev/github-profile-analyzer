import { Router } from "express";
import {
    getGithubProfileController, getAllProfilesController,
    getGithubProfileByUsernameController, deleteGithubProfileByUsernameController
} from "../controllers/githubController.js";

import ApiRateLimiter from "../middlewares/rateLimiter.js";

const router = Router();

//Route for fetching github profile
router.get("/github/:username",ApiRateLimiter, getGithubProfileController);

//Route for getting all profiles
router.get("/profiles",ApiRateLimiter, getAllProfilesController);

//Route for getting github profile by username
router.get("/profiles/:username",ApiRateLimiter, getGithubProfileByUsernameController);

//Route for deleting github profile by username
router.delete("/profiles/:username",ApiRateLimiter, deleteGithubProfileByUsernameController);

export default router;
