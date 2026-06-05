import rateLimit from "express-rate-limit";

const ApiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes

    max: 25,

    message: {
        success: false,
        message: "Too many requests. Please try again later after 15 minutes."
    },

    standardHeaders: true,
    legacyHeaders: false,
});

export default ApiRateLimiter;