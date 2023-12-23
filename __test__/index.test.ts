import { assertEquals, assertFalse } from 'https://deno.land/std@0.184.0/testing/asserts.ts';
import { webhookURLValidator } from '@/Validator/mod.ts';
import { DiscordWebhook } from '@/mod.ts';

Deno.test('validator test 1', () => {
    const url =
        'https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-C';
    const result = webhookURLValidator(url);
    assertEquals<string | false>(
        result,
        `https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-C`,
    );
});

Deno.test('validator test 2', () => {
    const badURL = 'https://discordtin.com/api/webhooks/badbad114154';

    assertFalse(webhookURLValidator(badURL));
});

Deno.test('context test', () => {
    const arg = {
        'text': 'test',
        'username': 'test',
        'avatar': 'https://example.com/favicon.png',
    };

    const dwh = new DiscordWebhook(
        'https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-C',
    );

    const result2 = dwh.__test__('generateMessageContext')(arg);

    assertEquals({
        'content': 'test',
        'username': 'test',
        'avatar_url': 'https://example.com/favicon.png',
    }, result2);
});

Deno.test('context test 2', () => {
    const result = {
        'text': 'test',
    };

    const dwh = new DiscordWebhook(
        'https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-C',
    );

    const result2 = dwh.__test__('generateMessageContext')(result);

    assertEquals({
        'content': 'test',
    }, result2);
});
