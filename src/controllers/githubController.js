import {
    fetchGithubProfile, getAllProfiles,
    getGithubProfileByUsername, deleteGithubProfileByUsername
} from "../services/githubService.js";

// --------------------------------------------------
// controller for fetching github profile
// --------------------------------------------------

export const getGithubProfileController = async (req, res) => {
    try {
        const username = req?.params?.username || null;

        if (!username?.trim()) {
            return res.status(400).json({ message: "Username is required" });
        }

        const response = await fetchGithubProfile(username);

        return res.status(response?.status || 500).json(response);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// --------------------------------------------------
// controller for getting all profiles
// --------------------------------------------------

export const getAllProfilesController = async (req, res) => {
    try {

        const response = await getAllProfiles();

        return res.status(response?.status || 500).json(response);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// --------------------------------------------------
// controller for getting github profile by username
// --------------------------------------------------

export const getGithubProfileByUsernameController = async (req, res) => {
    try {
        const username = req?.params?.username || null;

        if (!username?.trim()) {
            return res.status(400).json({ message: "Username is required" });
        }

        const response = await getGithubProfileByUsername(username?.trim());

        return res.status(response?.status || 500).json(response);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// --------------------------------------------------
// controller for delete github profile by username
// --------------------------------------------------

export const deleteGithubProfileByUsernameController = async (req, res) => {
    try {
        const username = req?.params?.username || null;

        if (!username?.trim()) {
            return res.status(400).json({ message: "Username is required" });
        }

        const response = await deleteGithubProfileByUsername(username?.trim());

        return res.status(response?.status || 500).json(response);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}