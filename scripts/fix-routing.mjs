#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Combat Master source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['combat-master-esp', 'combat-master-esp'],
	['combat-master-aimbot', 'combat-master-aimbot'],
	['anti-cheat', 'anti-cheat'],
	['undetected-combat-master-hacks', 'undetected-combat-master-hacks'],
	['combat-master-wallhack', 'combat-master-wallhack'],
	['combat-master-radar-hack', 'combat-master-radar-hack'],
	['combat-master-hacks-2026', 'combat-master-hacks-2026'],
	['anti-cheat-bypass', 'anti-cheat-bypass'],
	['combatmasterhacks.com', 'combatmasterhacks.com'],
	['trucos-combat-master', 'trucos-combat-master'],
	['triche-combat-master', 'triche-combat-master'],
	['combat-master-hacks', 'escape-from-combat-master-hacks'],
	['cheats-combat-master', 'cheats-combat-master'],
	['trucchi-combat-master', 'trucchi-combat-master'],
	['cheaty-combat-master', 'cheaty-combat-master'],
	['chity-combat-master', 'chity-combat-master'],
	['chitov-combat-master', 'chitov-combat-master'],
	['chitiv-combat-master', 'chitiv-combat-master'],
	['cheatow-combat-master', 'cheatow-combat-master'],
	['hile-combat-master', 'hile-combat-master'],
	['combat-master-hile', 'combat-master-hile'],
	['combat-master-esp-chity', 'combat-master-esp-chity'],
	['combat-master-aimbot-chity', 'combat-master-aimbot-chity'],
	['unentdeckte-combat-master-hacks', 'unentdeckte-escape-from-combat-master-hacks'],
	['cheats-combat-master-indetectaveis', 'cheats-combat-master-indetectaveis'],
	['trucchi-combat-master-indetectabili', 'trucchi-combat-master-indetectabili'],
	['niewykrywalne-cheats-combat-master', 'niewykrywalne-cheats-combat-master'],
	['nedecektiruemye-chity-combat-master', 'nedecektiruemye-chity-combat-master'],
	['tespit-edilemeyen-combat-master-hileleri', 'tespit-edilemeyen-combat-master-hileleri'],
	['nedecektovani-chity-combat-master', 'nedecektovani-chity-combat-master'],
	['cheats-combat-master-nedetectabile', 'cheats-combat-master-nedetectabile'],
	['basta-combat-master-hacks', 'basta-escape-from-combat-master-hacks'],
	['anti-cheat-bypass-trucos-combat-master', 'anti-cheat-bypass-trucos-combat-master'],
	['anti-cheat-bypass-triche-combat-master', 'anti-cheat-bypass-triche-combat-master'],
	['anti-cheat-bypass-cheats-combat-master', 'anti-cheat-bypass-cheats-combat-master'],
	['anti-cheat-bypass-chity-combat-master', 'anti-cheat-bypass-chity-combat-master'],
	['anti-cheat-bypass-combat-master', 'anti-cheat-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix anti-cheat key in englishPaths
	content = content.replace(/\tanti-cheat: '/, "\t'anti-cheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-combat-master-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-combat-master-hacks-hero.webp',
	'combat-master-esp': '/images/escape-from-combat-master-hacks-esp-wallhack.webp',
	'combat-master-aimbot': '/images/escape-from-combat-master-hacks-aimbot-combat.webp',
	features: '/images/escape-from-combat-master-hacks-package.webp',
	pricing: '/images/escape-from-combat-master-hacks-cover.webp',
	setup: '/images/combat-master-loadout-builder.webp',
	updates: '/images/combat-master-header-art.webp',
	faq: '/images/combat-master-squad-fight.webp',
	support: '/images/escape-from-combat-master-hacks-package.webp',
	undetected: '/images/combat-master-battle-royale-combat.webp',
	wallhack: '/images/escape-from-combat-master-hacks-esp-wallhack.webp',
	radar: '/images/combat-master-player-esp.webp',
	'anti-cheat': '/images/combat-master-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-combat-master-hacks-hero.webp',
	privacy: '/images/escape-from-combat-master-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-combat-master-hacks-cover.webp',
	terms: '/images/escape-from-combat-master-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'combat-master-esp', 'combat-master-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anti-cheat',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'combat-master-esp' | 'combat-master-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
