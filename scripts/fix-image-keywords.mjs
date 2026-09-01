#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'combat master hacks', espWallhack: 'combat master hacks wallhack', aimbotCombat: 'combat master hacks aimbot', squadFight: 'combat master hacks', playerEsp: 'combat master hacks esp', headerArt: 'combat master hacks aimbot', cheatsPackage: 'combat master hacks radar', rebootFight: 'combat master hacks aimbot', battleRoyale: 'combat master hacks', battleRoyaleIsland: 'combat master hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Combat Master ESP player tags hack'", "imageAlt: 'combat master hacks esp'"],
	["imageAlt: 'Combat Master ESP radar hack'", "imageAlt: 'combat master hacks radar'"],
	["imageAlt: 'Combat Master aimbot sniper kill'", "imageAlt: 'combat master hacks aimbot'"],
	["imageAlt: 'Combat Master aimbot skeleton targeting'", "imageAlt: 'combat master hacks aimbot'"],
	["imageAlt: 'Combat Master hacks ADS combat'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks setup PC activation'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks updates Anti-cheat maintenance'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks FAQ ESP aimbot'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks support license help'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Undetected combat master hacks ESP wallhack'", "imageAlt: 'undetected combat master hacks'"],
	["imageAlt: 'Combat Master wallhack skeleton ESP'", "imageAlt: 'combat master hacks wallhack'"],
	["imageAlt: 'Anti-cheat bypass combat-master ESP aimbot'", "imageAlt: 'combat master hacks anti-cheat'"],
	["imageAlt: 'Combat Master hacks 2026 ESP aimbot'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks combat aimbot'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hack download ESP aimbot'", "imageAlt: 'combat master hacks download'"],
	["imageAlt: 'Combat Master mod menu ESP aimbot'", "imageAlt: 'combat master hacks mod menu'"],
	["imageAlt: 'Combat Master soft aim aimbot settings'", "imageAlt: 'combat master hacks soft aim'"],
	["imageAlt: 'Best combat master hacks 2026 ESP'", "imageAlt: 'best combat master hacks'"],
	["imageAlt: 'Combat Master aimbot hack combat'", "imageAlt: 'combat master hacks aimbot'"],
	["imageAlt: 'Combat Master ESP hack wallhack'", "imageAlt: 'combat master hacks esp'"],
	["imageAlt: 'Combat Master unlock all ESP aimbot guide'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks privacy policy'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks refund policy'", "imageAlt: 'combat master hacks'"],
	["imageAlt: 'Combat Master hacks terms of use'", "imageAlt: 'combat master hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Combat Master ${meta.altKeyword}`")
	.join("imageAlt: 'combat master hacks'")
	.split("galleryTitle: `Combat Master Hacks ${topicName}`")
	.join("galleryTitle: 'combat master hacks'")
	.split("imageAlt: `Combat Master hacks ${kind} policy`")
	.join("imageAlt: 'combat master hacks'")
	.split("galleryTitle: `Combat Master Hacks ${kind} resources`")
	.join("galleryTitle: 'combat master hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
