import { assertEquals, assertFalse } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { webhookURLValidator } from "@/Validator/validator.ts";

Deno.test("validator test 1", () => {
    const url = "https://discord.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-";
    const result = webhookURLValidator(url);
    assertEquals<string | false>(result, `https://discord.com/api/webhooks/1187964421344079932/nq8hOq79N4QldaXsaef-23sUZlhBIPEIljmRxEALauzMPpD4ZTf_10mRieasKiA5c8-`);
})

Deno.test("validator test 2", () => {
    const badURL = "https://discord.com/api/webhooks/badbad114154";

    assertFalse(webhookURLValidator(badURL));
})