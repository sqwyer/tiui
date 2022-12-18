import { parseString } from "xml2js";
import { readFileSync } from "fs";

export type result = {
	app: any;
};

const raw = readFileSync(process.cwd() + "/gen/app.xml");
const str = raw.toString();
export const xml = (next: (result: result) => void) =>
	parseString(str, function (err, result) {
		if (err) console.error(err);
		else if (result.app) next(result as result);
		else console.error("Missing app element");
	});
