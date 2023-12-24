import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook/mod.ts';

const DiscordWH = new DiscordWebhook(
    '{{Discord Webhook Url}}',
);

DiscordWH.sendMessage({
    "text": "test"
})

DiscordWH.sendMessage({
    "text": "test",
    "username": "hello"
})

DiscordWH.sendMessage({
    "text": "test",
    "username": "hello",
    "avatar": "https://placehold.jp/150x150.png"
})