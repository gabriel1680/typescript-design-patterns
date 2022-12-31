import { CliApplication } from "./cli-application";
import { Application } from "./creator";
import { WebApplication } from "./web-application";

export class Main {
    application!: Application;

    constructor(app: AppType) {
        this.init(app);
    }

    init(app: AppType) {
        switch (app) {
            case "cli":
                this.application = new CliApplication();
                break;
            case "web":
                this.application = new WebApplication();
                break;
            default:
                throw new Error("Unknown application environment");
        }
    }

    start() {
        this.application.start();
    }
}

type AppType = "cli" | "web";
