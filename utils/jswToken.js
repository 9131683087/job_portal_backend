export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();

    // Ensure COOKIE_EXPIRE is a number before calculation
    const cookieExpire = Number(process.env.COOKIE_EXPIRE) || 5; // Default to 5 days if not set

    const options = {
        expires: new Date(Date.now() + cookieExpire * 24 * 60 * 60 * 1000), // Convert to milliseconds
        httpOnly: true, // Set httpOnly to true
        secure: process.env.NODE_ENV === "production", // Secure cookies in production
        sameSite: "strict", // Helps prevent CSRF attacks
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
};
