import { webhookURLValidator } from "@/Validator/validator.ts";
import { Logger } from "@/Logger/mod.ts";

export class DiscordWebhook {
    url: `https://discord.com/api/webhooks/${string}`;

    private maskURL(url: string) {
        return url.substring(0, 20) + "..."
    }

    constructor(
        url: string
    ) {
        // [@] Validator
        if (!webhookURLValidator(url)) {
            Logger.log(`${Logger.timestamp()} ${Logger.red(`(-)`)} Invalid webhook URL : ${this.maskURL(Logger.yellow(url))}`);
            Deno.exit(1);
        }

        this.url = url as `https://discord.com/api/webhooks/${string}`;
        Logger.log(`${Logger.timestamp()} ${Logger.green(`(+)`)} Valid webhook URL : ${this.maskURL(Logger.yellow(url))}`);
    }
}

// https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_00mRieasKiA5c8-
