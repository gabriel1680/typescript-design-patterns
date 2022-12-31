export abstract class Application {
    abstract createController(): Controller;

    start() {
        const api = this.createController();
        api.start();
    }
}

export interface Controller {
    start(): void;
}
