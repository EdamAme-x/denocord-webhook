# denocord-webhook

Discord Webhook 操作用のライブラリです。
使用方法は[example.ts](example.ts)を見れば大体わかります。
[https://zenn.dev/lambta/articles/5edbda4ccb1ec6](https://zenn.dev/lambta/articles/5edbda4ccb1ec6)

## Quick Start

```typescript
import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook/mod.ts';

// Discord Webhook Url is https://discordapp.com/api/webhook...
const DiscordWH = new DiscordWebhook(
    '{{Discord Webhook Url}}',
);

DiscordWH.sendMessage({
    "text": "test" // message content
})

DiscordWH.sendMessage({
    "text": "test", // message content
    "username": "hello" // bot's username
})

DiscordWH.sendMessage({
    "text": "test", // message content
    "username": "hello", // bot's username
    "avatar": "https://placehold.jp/150x150.png" // bot's icon
})

/**
 * 
 * DiscordWH.sendMessageWithProxy({
 *  "text": "test", // message content
 *  "username": "hello", // bot's username
 *  "avatar": "https://placehold.jp/150x150.png" // bot's icon
 * }, {
 *  "url": "http://127.0.0.1:40000"
 * })
 * 
 * 
 */
```