import { readFileSync } from "fs";
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
	let output = "ClrHome";
	xml(function (res: result) {
		const { app } = res;

		app.page.forEach((page) => {
			let content = "";
			if (page.list) {
				page.list.forEach((list) => {
					let str0 = "";
					let l = -1;
					list.child.forEach((child) => {
						str0 += `${child},`;
						l++;
					});
					content += `\n\"${str0}\"→Str0\n0→Y\n${l}→V\n${prgm(
						"@ui/List"
					)}`;
				});
			}
			content += prgm("@ui/Page");
			output += content;
		});
	});
	return (output + `\n${prgm("@utils/WaitInput")}`)
		.replace(/^\s*[\r\n]/gm, "")
		.replace(/^ +/gm, "");
};
