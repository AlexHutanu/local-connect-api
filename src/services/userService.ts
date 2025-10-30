import { UserModel } from "../models/userModel";

export const createUser = async (userData: any) => {
    try {
        const newUser = await UserModel.create(userData);
        console.log("User created successfully:", newUser);
        return { 
            status: 201,
            message: "User created successfully",
            user: newUser
        }
    } catch (error) {
        return {
            status: 500,
            message: "Error creating user",
            error: error
        }
    }
}

// export async function getUsers() {
//     try {
//         const users = await UserModel.find();
//         return {
//             status: 200,
//             message: "Users retrieved successfully",
//             users: users
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             message: "Error retrieving users",
//             error: error
//         }
//     }
// }