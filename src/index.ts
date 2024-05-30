import mongoose from "mongoose";
import { config } from "dotenv";
import { BOT_CLIENT } from "./lib/botClient";
import { player } from "./lib/discordPlayer";
import { initCommandKit } from "./lib/commandKit";
const keep_alive = require("./utils/keep_alive");

config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to MongoDB");

        initCommandKit();
        await player.extractors.loadDefault();

        BOT_CLIENT.login(process.env.TEST_BOT_TOKEN);
    } catch (error) {
        console.log(`There was an error during init: ${error}`);
    }
})();
