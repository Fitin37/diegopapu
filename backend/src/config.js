import dotenv from "dotenv";

dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20170508",
    },
    server: {
        PORT: process.env.PORT || 4000,
    },
    email:{
        contra: process.env.contra
    }

};