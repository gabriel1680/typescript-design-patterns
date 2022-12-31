import { Application, Controller } from "./creator";

export class CliApplication extends Application {
    createController(): Controller {
        return new CliController();
    }
}

class CliController implements Controller {
    start(): void {
        console.log("Cli controller started");
    }
}
