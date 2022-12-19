import { readFileSync } from "fs";
import { List } from "./components/List";
import { xml, type result } from "./xml";

export const prgm = (name: string) => {
	const str = readFileSync(process.cwd() + "/" + name + ".8xp").toString();
	// const match = str.match(/"PRGM-START"[^"]*"PRGM-END"/);
	let code = str.substring(
		str.indexOf('"PRGM-START"') + 12,
		str.indexOf('"PRGM-END"')
	);

	if (code) {
		const imports = code.matchAll(/prgm @[a-zA-Z]+\/[a-zA-Z]+/g);
		Array.from(imports, (imp) => {
			code = code.replace(imp[0], prgm(imp[0].replace("prgm ", "")));
		});
		return code;
	} else return `prgm ${name}`;
};

export const transpile = (): string => {
	let output = "ClrHome\n1→Q";
	xml(function (res: result) {
		const { app } = res;
		let pages = "";

		app.page.forEach((page) => {
			let content = "";
			if (page.list) {
				page.list.forEach((elem) => {
					content += List(elem);
				});
			}
			pages += `If Q=${page.$.id}\nThen\n${content}\nEnd`;
		});

		output += `
\nWhile 1
\n${prgm("@utils/WaitInput")}
\n${pages}
\nEnd
`;
	});
	return output.replace(/^\s*[\r\n]/gm, "").replace(/^ +/gm, "");
};
