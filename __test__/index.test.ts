import { assertEquals, assertFalse } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { webhookURLValidator } from "@/Validator/validator.ts";

Deno.test("validator test 1", () => {
    const url = "https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_00mRieasKiA5c8-C";
    const result = webhookURLValidator(url);
    assertEquals<string | false>(result, `https://discordapp.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_00mRieasKiA5c8-C`);
})

Deno.test("validator test 2", () => {
    const badURL = "https://discordtin.com/api/webhooks/badbad114154";

    assertFalse(webhookURLValidator(badURL));
})