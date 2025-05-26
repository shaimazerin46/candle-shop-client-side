"use server";
import bcrypt from 'bcrypt';

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async(payload)=>{
    const userCollections = dbConnect(collectionNameObj.userCollections);

    // validation
    const {name,email,password} = payload;
    if(!email || !password || !name){
        return {success: false}
    }
    const user = await userCollections.findOne({email: payload.email});
    if(!user){
        const hashPassword = await bcrypt.hash(password,10);
        payload.password = hashPassword
        const result = await userCollections.insertOne(payload);
        const {acknowledged, insertedId} = result
        return {acknowledged, insertedId: insertedId.toString()}
    }
    return {success: false};
    
}