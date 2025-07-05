import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (res, req) => {
   return res.status(200).json({
        message: "OK",
    })
})

export {registerUser};