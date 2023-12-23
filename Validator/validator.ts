export function webhookURLValidator(
  url: string,
): `https://discordapp.com/api/webhooks/${string}` | false {
  const webhookURLValidatorMatch =
    /https:\/\/discordapp.com\/api\/webhooks\/[0-9]{17,19}\/[a-zA-Z0-9_-]{60,80}/g;
  if (webhookURLValidatorMatch.test(url)) {
    return url as `https://discordapp.com/api/webhooks/${string}`;
  }
  return false;
}