import { webhookURLValidator } from "@/Validator/validator.ts";
import { Logger } from "@/Logger/mod.ts";
import { deleteNullProp, getProp } from "@/Ignore/mod.ts";

export class DiscordWebhook {
  url: `https://discordapp.com/api/webhooks/${string}`;

  private maskURL(url: string) {
    return url.substring(0, 50) + "...";
  }

  constructor(
    url: string,
  ) {
    // [@] Validator
    if (!webhookURLValidator(url)) {
      Logger.log(
        `${Logger.timestamp()} ${Logger.red(`(-)`)} Invalid webhook URL : ${
          this.maskURL(Logger.yellow(url))
        }`,
      );
      Deno.exit(1);
    }

    this.url = url as `https://discordapp.com/api/webhooks/${string}`;
    Logger.log(
      `${Logger.timestamp()} ${Logger.green(`(+)`)} Valid webhook URL : ${
        this.maskURL(Logger.yellow(url))
      }`,
    );
  }

  private generateMessageContext(context: {
    text: string;
    username?: string;
    avatar?: string;
  }) {
    const result = {
      content: context.text,
      username: context.username ?? null,
      avatar_url: context.avatar ?? null,
    };

    deleteNullProp<typeof result>(result);

    return result;
  }

  __test__(prop: string) {
    return getProp<typeof this>(this, prop);
  }
}
