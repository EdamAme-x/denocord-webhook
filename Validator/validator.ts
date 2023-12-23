export function webhookURLValidator(url: string): `https://discord.com/api/webhooks/${string}` | false {
    const webhookURLValidatorMatch = /https:\/\/discord\.com\/api\/webhooks\/[0-9]+\/[-_a-zA-Z]+/;
    if (webhookURLValidatorMatch.test(url)) {
        return url as `https://discord.com/api/webhooks/${string}`;
    }
    return false;
}
