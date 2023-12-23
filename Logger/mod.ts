export class Logger {
    static log(...message: string[]) {
        console.log(...message);
    }

    static red(message: string) {
        return `\x1b[31m${message}\x1b[0m`;
    }

    static green(message: string) {
        return `\x1b[32m${message}\x1b[0m`;
    }

    static yellow(message: string) {
        return `\x1b[33m${message}\x1b[0m`;
    }

    static blue(message: string) {
        return `\x1b[34m${message}\x1b[0m`;
    }

    static gray(message: string) {
        return `\x1b[90m${message}\x1b[0m`;
    }

    static timestamp() {
        return this.gray(`[${new Date().toLocaleString()}]`);
    }
}