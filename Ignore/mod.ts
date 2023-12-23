export function getProp<T = unknown>(self: T, prop: string) {
    // deno-lint-ignore ban-ts-comment
    // @ts-ignore
    return self[prop];
}

export function deleteNullProp<T = unknown>(self: T) {
    for (const prop in self) {
        // deno-lint-ignore ban-ts-comment
        // @ts-ignore
        if (self[prop] === null) {
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            delete self[prop];
        }
    }

    return self;
}