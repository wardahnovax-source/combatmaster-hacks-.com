#!/usr/bin/env node
/**
 * Completes escape-from-combat-master-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'combat-master-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'combat-master-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'combat-master-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'combat-master-no-recoil', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-combat-master-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'combat-master-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'combat-master-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'combat-master-killstreak', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/combat-master-combat-master/g, 'combat-master'],
	[/anti-cheat-bypass-combat-master/g, 'anti-cheat-bypass'],
	[/Combat Master/g, 'Combat Master'],
	[/Combat Master/g, 'Combat Master'],
	[/Call of Duty/g, 'Combat Master'],
	[/Combat Master Wallhack/g, 'Combat Master Wallhack'],
	[/Combat Master Radar Hack/g, 'Combat Master Radar Hack'],
	[/Combat Master Cheat Features/g, 'Combat Master Cheat Features'],
	[/Combat Master Cheat Pricing/g, 'Combat Master Cheat Pricing'],
	[/Combat Master Cheat Setup/g, 'Combat Master Cheat Setup'],
	[/Combat Master Cheat Status/g, 'Combat Master Cheat Status'],
	[/Combat Master Cheat Support/g, 'Combat Master Cheat Support'],
	[/Combat Master squad fight/g, 'Combat Master squad fight'],
	[/Combat Master squad builder/g, 'Combat Master loadout builder'],
	[/Combat Master store header/g, 'Combat Master header'],
	[/Combat Master wasteland combat/g, 'Combat Master battle royale combat'],
	[/Combat Master loadout builder/g, 'Combat Master loadout builder'],
	[/Combat Master pricing/g, 'Combat Master pricing'],
	[/Combat Master Anti-cheat system/g, 'Combat Master Anti-cheat system'],
	[/on Combat Master/g, 'on Combat Master'],
	[/for Combat Master/g, 'for Combat Master'],
	[/Combat Master guides/g, 'Combat Master guides'],
	[/Combat Master guide/g, 'Combat Master guide'],
	[/Combat Master hileleri/g, 'Combat Master hileleri'],
	[/Combat Master hile/g, 'Combat Master hile'],
	[/Combat Master hileleri/g, 'Combat Master hileleri'],
	[/cheatów Combat Master/g, 'cheatów Combat Master'],
	[/cheat Combat Master/g, 'cheat Combat Master'],
	[/cheats Combat Master/g, 'cheats Combat Master'],
	[/trucos Combat Master/g, 'trucos Combat Master'],
	[/triche Combat Master/g, 'triche Combat Master'],
	[/trucchi Combat Master/g, 'trucchi Combat Master'],
	[/Wallhack Combat Master/g, 'Combat Master Wallhack'],
	[/cheat Combat Master undetected/g, 'cheat Combat Master undetected'],
	[/cheats Combat Master undetected/g, 'cheats Combat Master undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/match and scav-run/g, 'match and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/anti-cheat/gi, 'anti-cheat'],
	[/Anti-Cheat/g, 'Anti-cheat system'],
	[/escape-from-combat-master-hacks/g, 'escape-from-combat-master-hacks'],
	[/escape-from-combat-master/g, 'combat-master'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Combat Master'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Combat Master anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Combat Master Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Combat Master guides/g, 'Combat Master guides');
	content = content.replace(/Combat Master guide/g, 'Combat Master guide');
	content = content.replace(/Combat Master hileleri/g, 'Combat Master hileleri');
	content = content.replace(/Combat Master hile/g, 'Combat Master hile');
	content = content.replace(/cheat Combat Master/g, 'cheat Combat Master');
	content = content.replace(/cheats Combat Master/g, 'cheats Combat Master');
	content = content.replace(/trucos Combat Master/g, 'trucos Combat Master');
	content = content.replace(/triche Combat Master/g, 'triche Combat Master');
	content = content.replace(/trucchi Combat Master/g, 'trucchi Combat Master');
	content = content.replace(/cheatów Combat Master/g, 'cheatów Combat Master');
	content = content.replace(/читов Combat Master/g, 'читов Combat Master');
	content = content.replace(/читів Combat Master/g, 'читів Combat Master');
	content = content.replace(/Combat Masterチート/g, 'Combat Masterチート');
	content = content.replace(/Combat Master 치트/g, 'Combat Master 치트');
	content = content.replace(/Combat Master作弊/g, 'Combat Master作弊');
	content = content.replace(/Combat Master rehberleri/g, 'Combat Master rehberleri');
	content = content.replace(/Combat Master gidsen/g, 'Combat Master gidsen');
	content = content.replace(/Combat Master průvodce/g, 'Combat Master průvodce');
	content = content.replace(/Combat Master guider/g, 'Combat Master guider');
	content = content.replace(/Combat Master related/g, 'Combat Master related');
	content = content.replace(/Combat Master ガイド/g, 'Combat Master ガイド');
	content = content.replace(/Combat Master 가이드/g, 'Combat Master 가이드');
	content = content.replace(/Combat Master指南/g, 'Combat Master指南');
	content = content.replace(/Combat Master गाइड/g, 'Combat Master गाइड');
	content = content.replace(/Combat Master panduan/g, 'Combat Master panduan');
	content = content.replace(/Combat Master คู่มือ/g, 'Combat Master คู่มือ');
	content = content.replace(/Combat Master hướng dẫn/g, 'Combat Master hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Combat Master Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
