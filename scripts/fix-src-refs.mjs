#!/usr/bin/env node
/** Final pass: fix remaining Combat Master references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['combatMasterImages', 'combatMasterImages'],
	["from '../data/combat-master'", "from '../data/combat-master'"],
	["from './combat-master'", "from './combat-master'"],
	['/undetected-combat-master-hacks/', '/undetected-combat-master-hacks/'],
	['/combat-master-wallhack/', '/combat-master-wallhack/'],
	['/combat-master-radar-hack/', '/combat-master-radar-hack/'],
	['/anti-cheat-bypass/', '/anti-cheat-bypass/'],
	['/combat-master-hacks-2026/', '/combat-master-hacks-2026/'],
	['/combat-master-aimbot/', '/combat-master-aimbot/'],
	['/combat-master-esp/', '/combat-master-esp/'],
	['/combat-master-hacks/', '/combat-master-esp/'],
	['Combat Master Hacks', 'Combat Master Hacks'],
	['Combat Master hacks', 'Combat Master hacks'],
	['Combat Master wallhack', 'Combat Master wallhack'],
	['Combat Master radar', 'Combat Master radar'],
	['Combat Master Aimbot', 'Combat Master Aimbot'],
	['Combat Master ESP', 'Combat Master ESP'],
	['Combat Master', 'Combat Master'],
	['Anti-Cheat', 'Anti-cheat system'],
	['anti-cheat', 'anti-cheat'],
	['combatmasterhacks.com', 'combatmasterhacks.com'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
