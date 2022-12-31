export abstract class Shape {
    x = 0;
    y = 0;
    border = 1;

    constructor(source?: Shape) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.border = source.border;
        }
    }

    render() {
        console.log(
            // @ts-ignore
            `rendering class: ${this.constructor.name} with x: ${this.x} and y: ${this.y}`
        );
    }

    abstract clone(): Shape;
}
