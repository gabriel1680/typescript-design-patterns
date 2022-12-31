import { Circle } from "./circle";
import { Line } from "./line";
import { Rectangle } from "./rectangle";

export class GraphFramework {
    constructor(
        readonly circle: Circle,
        readonly rectangle: Rectangle,
        readonly line: Line
    ) {}

    drawRectangle(x: number, y: number) {
        const rectangle = this.rectangle.clone();
        rectangle.x = x;
        rectangle.y = y;
        rectangle.render();
    }

    drawCircle(x: number, y: number) {
        const circle = this.circle.clone();
        circle.x = x;
        circle.y = y;
        circle.render();
    }

    drawLine(x: number, y: number) {
        const line = this.line.clone();
        line.x = x;
        line.y = y;
        line.render();
    }
}
