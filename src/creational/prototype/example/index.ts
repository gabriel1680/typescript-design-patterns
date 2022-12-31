import { Circle } from "../circle";
import { GraphFramework } from "../graph-framework";
import { Line } from "../line";
import { Rectangle } from "../rectangle";

const defaultCircle = new Circle();
defaultCircle.radius = 10;

const defaultRectangle = new Rectangle();
defaultRectangle.width = 10;
defaultRectangle.height = 5;

const defaultLine = new Line();
defaultLine.length = 10;
defaultLine.angle = 0;

const framework = new GraphFramework(
    defaultCircle,
    defaultRectangle,
    defaultLine
);

framework.drawCircle(0, 0);
framework.drawLine(10, 10);
framework.drawRectangle(20, 20);
