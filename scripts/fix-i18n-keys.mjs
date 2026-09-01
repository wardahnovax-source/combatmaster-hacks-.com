#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Combat Master Hacks', 'Combat Master Hacks'],
	['Combat Master hacks', 'Combat Master hacks'],
	['Combat Master Hacks', 'Combat Master Hacks'],
	['Combat Master', 'Combat Master'],
	['Combat Master', 'Combat Master'],
	['Call of Duty', 'Combat Master'],
	['Combat Master PC', 'Combat Master PC'],
	['for Combat Master', 'for Combat Master'],
	['Combat Master ', 'Combat Master '],
	['combat-master ', 'combat-master '],
	['Anti-cheat maintenance', 'Anti-cheat maintenance'],
	['Anti-cheat system', 'Anti-cheat system'],
	['Anti-Cheat', 'Anti-cheat system'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['enemy players', 'players'],
	['operator', 'player'],
	['enemy players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['combatmasterhacks.com', 'combatmasterhacks.com'],
	['Trucos Combat Master', 'Trucos Combat Master'],
	['Triches Combat Master', 'Triches Combat Master'],
	['Cheats Combat Master', 'Cheats Combat Master'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en anti-cheat key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tanti-cheat: \{/, "\t'anti-cheat': {");
pagesEn = pagesEn.replace(/Combat Master Combat Master/g, 'Combat Master');
pagesEn = pagesEn.replace(/for Combat Master Combat Master/g, 'for Combat Master');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'anti-cheat'/g, "'anti-cheat'");
pagesI18n = pagesI18n.replace(/anti-cheat:/g, "'anti-cheat':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
