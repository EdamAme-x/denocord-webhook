/// <reference lib="deno.unstable" />
import { webhookURLValidator } from './Validator/mod.ts';
import { Logger } from './Logger/mod.ts';
import { deleteNullProp, getProp } from './Ignore/mod.ts';
import { Context, FetchContext, Result } from './Types/mod.ts';

export class DiscordWebhook {
    url: `https://discordapp.com/api/webhooks/${string}`;

    private maskURL(url: string) {
        return url.substring(0, 50) + '...';
    }

    constructor(
        url: string,
    ) {
        // [@] Validator
        if (!webhookURLValidator(url)) {
            Logger.log(
                `${Logger.timestamp()} ${Logger.red(`(-)`)} Invalid webhook URL : ${this.maskURL(Logger.yellow(url))}`,
            );
        }

        this.url = url as `https://discordapp.com/api/webhooks/${string}`;
        Logger.log(
            `${Logger.timestamp()} ${Logger.green(`(+)`)} Valid webhook URL : ${this.maskURL(Logger.yellow(url))}`,
        );
    }

    private generateMessageContext(context: Context): FetchContext {
        const result = {
            content: context.text,
            username: context.username ?? null,
            avatar_url: context.avatar ?? null,
        };

        deleteNullProp<typeof result>(result);

        let isURLFlag = false;

        try {
            if (!('avater' in context)) {
                isURLFlag = true;

                return result as unknown as FetchContext;
            }

            new URL(context.avatar ?? '');
            isURLFlag = true;
        } catch (_e) {
            isURLFlag = false;
            Logger.log(
                `${Logger.timestamp()} ${Logger.yellow(`[!]`)}Avatar Invalid URL : ${
                    this.maskURL(Logger.yellow(context.avatar ?? ''))
                }`,
            );
        }

        if (isURLFlag) {
            result.avatar_url = context.avatar as `https://${string}` | `https://${string}`;
        }

        return result as unknown as FetchContext;
    }

    public async sendMessage(
        context: Context,
        options: HeadersInit = new Headers({
            'User-Agent': 'Denocord - @amex2189 / github:@EdamAme-x - Safari 1.0.0',
        }),
    ): Promise<Result> {
        const ctx = this.generateMessageContext(context);

        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                ...options,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ctx),
        });

        return await this.parser(res);
    }

    public async sendMessageWithProxy(
        context: Context,
        options: HeadersInit = new Headers({
            'User-Agent': 'Denocord - @amex2189 / github:@EdamAme-x - Safari 1.0.' +
                Math.floor(Math.random() * 10).toString(),
        }),
        proxy: Deno.Proxy,
    ) {
        const client = Deno.createHttpClient({
            proxy,
        });

        const ctx = this.generateMessageContext(context);

        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                ...options,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ctx),
            client,
        });

        return await this.parser(res);
    }

    private async parser(res: Response): Promise<Result> {
        if (!res.ok) {
            Logger.log(
                `${Logger.timestamp()} ${Logger.red(`(-)`)} Discord API Error`,
            );

            return {
                status: res.status,
                status_text: res.statusText,
                headers: res.headers,
                raw: res,
                result: 'failed',
                body: await res.text(),
            };
        } else {
            Logger.log(
                `${Logger.timestamp()} ${Logger.green(`(+)`)} Discord API Success`,
            );

            return {
                status: res.status,
                status_text: res.statusText,
                headers: res.headers,
                raw: res,
                result: 'success',
                body: await res.text(),
            };
        }
    }

    public __test__(prop: string) {
        return getProp<typeof this>(this, prop);
    }
}
