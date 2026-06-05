import prisma from "../config/prisma.js";

// --------------------------------------------------
// GitHub Profile Fetching & Database Persistence
// --------------------------------------------------
const fetchGithubProfile = async (username) => {
    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        //converting response to json
        const data = await response.json();

        if (response?.status === 404) {
            return { message: "User not found Please provide valid username", status: 404 };
        }

        // Calculate custom insights
        let developerLevel = "Beginner";

        if (data.public_repos >= 20 || data.followers >= 50) {
            developerLevel = "Intermediate";
        }

        if (data.public_repos >= 50 || data.followers >= 200) {
            developerLevel = "Advanced";
        }

        const savedProfile = await prisma.githubProfile.upsert({

            where: {
                githubId: data.id
            },

            update: {

                name: data.name,
                email: data.email,

                bio: data.bio,
                avatarUrl: data.avatar_url,

                githubProfileUrl: data.html_url,

                publicRepos: data.public_repos,
                followers: data.followers,
                following: data.following,

                developerLevel,

                githubUpdatedAt: new Date(data.updated_at)
            },

            create: {

                githubId: data.id,
                username: data.login,

                name: data.name,
                email: data.email,

                bio: data.bio,
                avatarUrl: data.avatar_url,

                githubProfileUrl: data.html_url,

                publicRepos: data.public_repos,
                followers: data.followers,
                following: data.following,

                developerLevel,

                githubCreatedAt: new Date(data.created_at),
                githubUpdatedAt: new Date(data.updated_at)
            }
        });

        return { data: savedProfile, status: 200 };

    } catch (error) {
        return { message: "Internal Server Error", status: 500 };
    }
}

// --------------------------------------------------
// All GitHub Profiles Fetching
// --------------------------------------------------

const getAllProfiles = async () => {
    try {

        const profiles = await prisma.githubProfile.findMany();

        if (profiles.length === 0) {
            return { message: "No profiles found", status: 404 };
        }

        return { data: profiles, status: 200 };

    } catch (error) {
        return { message: "Internal Server Error", status: 500 };
    }
}

// --------------------------------------------------
// Fetch Single GitHub Profile From Database
// --------------------------------------------------

const getGithubProfileByUsername = async (username) => {
    try {

        const profile = await prisma.githubProfile.findUnique({
            where: {
                username: username
            }
        });

        if (!profile) {
            return { message: "Profile not found", status: 404 };
        }

        return { data: profile, status: 200 };

    } catch (error) {
        return { message: "Internal Server Error", status: 500 };
    }
}

// --------------------------------------------------
// Delete Single GitHub Profile From Database
// --------------------------------------------------

const deleteGithubProfileByUsername = async (username) => {
    try {

        const existingProfile = await prisma.githubProfile.findUnique({
            where: {
                username: username
            }
        });

        if (!existingProfile) {
            return { message: "Profile not found", status: 404 };
        }

        await prisma.githubProfile.delete({
            where: {
                username: username
            }
        });

        return { data: `Profile deleted successfully ${username}`, status: 200 };

    } catch (error) {
        return { message: "Internal Server Error", status: 500 };
    }
}

export { fetchGithubProfile, getAllProfiles, getGithubProfileByUsername, deleteGithubProfileByUsername }