#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Combat Master Hacks
 * Domain: combatmasterhacks.com
 * Run from project root: node scripts/adapt-combat-master.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'combat-master-aimbot'],
	['tarkov-esp', 'combat-master-esp'],
	['tarkov-wallhack', 'combat-master-wallhack'],
	['tarkov-radar-hack', 'combat-master-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-combat-master-hacks'],
	['tarkov-cheats-2026', 'combat-master-hacks-2026'],
	['battleye-bypass', 'anti-cheat-bypass'],
	['tarkov-cheats', 'combat-master-hacks'],
	['tarkov-cheat-download', 'combat-master-cheat-download'],
	['tarkov-mod-menu', 'combat-master-mod-menu'],
	['tarkov-soft-aim', 'combat-master-no-recoil'],
	['best-tarkov-cheats', 'best-combat-master-hacks'],
	['tarkov-aimbot-hack', 'combat-master-aimbot-hack'],
	['tarkov-esp-hack', 'combat-master-esp-hack'],
	['tarkov-unlock-all', 'combat-master-killstreak'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://combatmasterhacks.com'],
	['https://www.tarkovcheats.org', 'https://www.combatmasterhacks.com'],
	['www.tarkovcheats.org', 'www.combatmasterhacks.com'],
	['tarkovcheats.org', 'combatmasterhacks.com'],
	['support@tarkovcheats.org', 'support@combatmasterhacks.com'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fcombat-master'],
	['/products/escape-from-tarkov', '/products/combat-master'],
	['project-name=tarkovcheats', 'project-name=combatmasterhacks'],
	['project-name=besttarkovcheats', 'project-name=combatmasterhacks'],
	['name = "tarkovcheats"', 'name = "combatmasterhacks"'],
	['name = "besttarkovcheats"', 'name = "combatmasterhacks"'],
	['"name": "tarkov-cheats"', '"name": "combat-master-hacks"'],
	['undetected-tarkov-cheats', 'undetected-combat-master-hacks'],
	['best-tarkov-cheats', 'best-combat-master-hacks'],
	['tarkov-cheat-download', 'combat-master-cheat-download'],
	['tarkov-cheats-2026', 'combat-master-hacks-2026'],
	['tarkov-radar-hack', 'combat-master-radar-hack'],
	['tarkov-aimbot-hack', 'combat-master-aimbot-hack'],
	['tarkov-esp-hack', 'combat-master-esp-hack'],
	['combat-master-killstreak', 'combat-master-killstreak'],
	['tarkov-unlock-all', 'combat-master-killstreak'],
	['tarkov-soft-aim', 'combat-master-no-recoil'],
	['tarkov-mod-menu', 'combat-master-mod-menu'],
	['tarkov-wallhack', 'combat-master-wallhack'],
	['tarkov-cheats', 'combat-master-hacks'],
	['tarkov-aimbot', 'combat-master-aimbot'],
	['tarkov-esp', 'combat-master-esp'],
	['battleye-bypass', 'anti-cheat-bypass'],
	["pageId=\"battleye\"", 'pageId="anti-cheat"'],
	["pageId: 'battleye'", "pageId: 'anti-cheat'"],
	["'battleye'", "'anti-cheat'"],
	['tarkov-esp-player-tags', 'combat-master-esp-player'],
	['tarkov-wallhack-skeleton', 'combat-master-wallhack'],
	['tarkov-aimbot-sniper', 'combat-master-aimbot'],
	['tarkov-aimbot-skeleton', 'combat-master-aimbot-view'],
	['tarkov-esp-radar', 'combat-master-radar'],
	['tarkov-cheats-combat', 'combat-master-hacks-combat'],
	['tarkov-cheats-logo', 'combat-master-hacks-logo'],
	['tarkov-cheats-hero', 'combat-master-hacks-hero'],
	['tarkov-cheats-esp', 'combat-master-hacks-esp'],
	['tarkov-cheats-wallhack', 'combat-master-hacks-wallhack'],
	['tarkov-cheats-aimbot-view', 'combat-master-hacks-aimbot-view'],
	['tarkov-cheats-aimbot', 'combat-master-hacks-aimbot'],
	['tarkov-cheats-radar', 'combat-master-hacks-radar'],
	['tarkov-cheats-raid', 'combat-master-hacks-match'],
	['escape-from-tarkov-cheats', 'combat-master-hacks'],
	['Escape from Tarkov', 'Combat Master'],
	['escape from tarkov', 'combat master'],
	['Tarkov Cheats', 'Combat Master Hacks'],
	['Tarkov cheats', 'Combat Master hacks'],
	['Tarkov cheat', 'Combat Master hack'],
	['Tarkov hacks', 'Combat Master hacks'],
	['Tarkov hack', 'Combat Master hack'],
	['TarkovCheatsSite', 'CombatMasterHacksSite'],
	['Tarkov Intel', 'Combat Master Intel'],
	['BattlEye anti-cheat', 'Anti-cheat system'],
	['BattlEye maintenance', 'Anti-cheat maintenance'],
	['BattlEye bypass', 'Anti-cheat bypass'],
	['BattlEye Bypass', 'Anti-Cheat Bypass'],
	['BattlEye patches', 'Anti-cheat patches'],
	['BattlEye patch', 'Anti-cheat patch'],
	['BattlEye updates', 'Anti-cheat updates'],
	['BattlEye update', 'Anti-cheat update'],
	['after BattlEye', 'after anti-cheat'],
	['BattlEye', 'Anti-Cheat'],
	['battleye', 'anti-cheat'],
	['tarkov cheats', 'combat master hacks'],
	['tarkov cheat', 'combat master hack'],
	['tarkov esp', 'combat master esp'],
	['tarkov aimbot', 'combat master aimbot'],
	['tarkov wallhack', 'combat master wallhack'],
	['tarkov radar', 'combat master radar'],
	['tarkovImages', 'combatMasterImages'],
	["from './tarkov'", "from './combat-master'"],
	["from '../data/tarkov'", "from '../data/combat-master'"],
	["from '../../data/tarkov'", "from '../../data/combat-master'"],
	['fetch-tarkov-images', 'fetch-combat-master-images'],
	['tarkov-hack-overlays', 'combat-master-hack-overlays'],
	['trucos-tarkov', 'trucos-combat-master'],
	['triche-tarkov', 'triche-combat-master'],
	['cheats-tarkov', 'cheats-combat-master'],
	['trucchi-tarkov', 'trucchi-combat-master'],
	['cheaty-tarkov', 'cheaty-combat-master'],
	['chity-tarkov', 'chity-combat-master'],
	['chitov-tarkov', 'chitov-combat-master'],
	['chitiv-tarkov', 'chitiv-combat-master'],
	['cheatow-tarkov', 'cheatow-combat-master'],
	['hile-tarkov', 'hile-combat-master'],
	['tarkov-hile', 'combat-master-hile'],
	['PMC and Scav ESP', 'Player ESP overlay'],
	['PMC raids and Scav runs', 'multiplayer matches and ranked modes'],
	['PMC & Scav', 'Multiplayer & ranked'],
	['PMC raids', 'multiplayer matches'],
	['Scav runs', 'ranked matches'],
	['PMCs and Scavs', 'enemy players'],
	['PMCs', 'enemy players'],
	['Scavs', 'enemy players'],
	['extract fights', 'firefights'],
	['extract fight', 'firefight'],
	['raid rounds', 'match rounds'],
	['raid', 'match'],
	['raids', 'matches'],
	['Buy Tarkov Cheats', 'Buy Combat Master Hacks'],
	['Tarkov', 'Combat Master'],
	['tarkov', 'combat-master'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-combat-master.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'combat-master.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → combat-master.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'combat-master-aimbot': 'combat-master-aimbot',
		'combat-master-esp': 'combat-master-esp',
		'combat-master-wallhack': 'wallhack',
		'combat-master-radar-hack': 'radar',
		'undetected-combat-master-hacks': 'undetected',
		'combat-master-hacks-2026': 'cheats-2026',
		'anti-cheat-bypass': 'anti-cheat',
		'combat-master-hacks': 'hacks',
		'combat-master-cheat-download': 'cheat-download',
		'combat-master-mod-menu': 'mod-menu',
		'combat-master-no-recoil': 'soft-aim',
		'best-combat-master-hacks': 'best-cheats',
		'combat-master-aimbot-hack': 'aimbot-hack',
		'combat-master-esp-hack': 'esp-hack',
		'combat-master-killstreak': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file
			.replace(/tarkov-cheats/g, 'combat-master-hacks')
			.replace(/tarkov/g, 'combat-master');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Combat Master Hacks (combatmasterhacks.com)...\n');
	await renamePageDirs();
	await renameDataFile();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, process hero images, sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
