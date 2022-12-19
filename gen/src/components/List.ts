import { prgm } from "../transpile";

export const List = function (elem) {
	let out = "";
	let str0 = "";
	let l = -1;
	elem.child.forEach((child) => {
		str0 += `${child},`;
		l++;
	});
	if (elem.child.length > 9) {
		out += `\n\"${str0}\"→Str0\n0→Y\n${l}→V\n${prgm("@ui/ScrollableList")}`;
	} else {
		out += `\n\"${str0}\"→Str0\n0→Y\n${l}→V\n${prgm("@ui/List")}`;
	}

	return out;
};
