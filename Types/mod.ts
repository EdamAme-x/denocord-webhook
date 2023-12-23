export type Context = {
    text: string;
    username?: string;
    avatar?: string;
};

export type FetchContext = {
    content: string;
    username?: string;
    avatar_url?: `https://${string}` | `https://${string}`;
};

export type Result = {
    status: number;
    status_text: string;
    headers: HeadersInit;
    raw: ResponseInit;
    result: "success" | "failed";
    body: unknown;
}
