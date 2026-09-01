#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Anti-Cheat security'],
	['Activision Status', 'Combat Master Support'],
	['Activision Combat Master', 'Combat Master'],
	['Activision Support', 'Combat Master Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromcombat-master.com/support'],
	['www.epicgames.com/combat-master', 'www.escapefromcombat-master.com'],
	['www.combat-master.com/competitive', 'www.escapefromcombat-master.com'],
	['https://www.combat-master.com/', 'https://www.escapefromcombat-master.com/'],
	['Combat Master.com', 'Combat Master'],
	['Combat Master Competitive', 'Combat Master'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
