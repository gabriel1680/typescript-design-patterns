import { Application, Controller } from "./creator";

export class WebApplication extends Application {
    createController(): Controller {
        return new WebController();
    }
}

class WebController implements Controller {
    start(): void {
        console.log("Web controller started");
    }
}
