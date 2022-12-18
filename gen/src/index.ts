import { writeFileSync, existsSync } from "fs";
import { transpile } from "./transpile";

(async function () {
	let file;
	let force = false;

	for (let arg of process.argv) {
		if (arg.startsWith("file:")) {
			file = arg.replace("file:", "");
		} else if (arg == "-f") force = true;
	}

	if (file) {
		try {
			if (existsSync(file) && force != true) {
				console.error(
					`${process.cwd()}/${file} already exists. Use -f to overwrite.`
				);
			} else {
				let code = transpile();
				let lines = code.split("\n");
				lines.forEach((line, index) => {
					if (
						line.match(/"(?:[^\\"]|\\\\|\\")*"/)?.join("") ==
						line.replace("\\r", "")
					)
						lines.splice(index, 1);
				});
				writeFileSync(file, lines.join("\n"));
			}
		} catch (err) {
			console.error(err);
		}
	} else {
		console.error("Must provide an output file. (Pass file:PATH argument)");
	}
})();
