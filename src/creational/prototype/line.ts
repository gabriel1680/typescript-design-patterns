import { Shape } from "./prototype";

export class Line extends Shape {
    length!: number;
    angle!: number;

    constructor(source?: Line) {
        super(source);
        if (source) {
            this.length = source.length;
            this.angle = source.angle;
        }
    }

    clone(): Shape {
        return new Line(this);
    }
}
