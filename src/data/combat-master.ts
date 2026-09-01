import { siteConfig } from './site';

/** Screenshots used across product pages — simple combat master hacks keyword alts. */
export const combatMasterImages = {
	hero: '/images/combat-master-hacks-hero-full.png',
	espWallhack: '/images/combat-master-hacks-wallhack.webp',
	aimbotCombat: '/images/combat-master-hacks-aimbot.webp',
	aimbotSkeleton: '/images/combat-master-hacks-aimbot-view.webp',
	playerEsp: '/images/combat-master-hacks-radar.webp',
	cheatsCombat: '/images/combat-master-hacks-match.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/combat-master-hacks-match.webp',
	loadoutBuilder: '/images/combat-master-hacks-radar.webp',
	squadFight: '/images/combat-master-hacks-aimbot-view.webp',
	cheatsPackage: '/images/combat-master-hacks-radar.webp',
	headerArt: '/images/combat-master-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/combat-master-hacks-match.webp',
	extractFight: '/images/combat-master-hacks-aimbot.webp',
	rebootFight: '/images/combat-master-hacks-aimbot.webp',
	scavRunCombat: '/images/combat-master-hacks-wallhack.webp',
	scavRunMode: '/images/combat-master-hacks-esp.webp',
	battleRoyaleIsland: '/images/combat-master-hacks-esp.webp',
	matchMap: '/images/combat-master-hacks-esp.webp',
	product: [
		{ src: '/images/combat-master-hacks-esp.webp', alt: 'Player ESP boxes in a Combat Master match' },
		{ src: '/images/combat-master-hacks-wallhack.webp', alt: 'Wallhack outlines for enemy players' },
		{ src: '/images/combat-master-hacks-aimbot.webp', alt: 'Aimbot assist overlay for Combat Master' },
		{ src: '/images/combat-master-hacks-radar.webp', alt: 'Radar minimap enemy tracking' },
		{ src: '/images/combat-master-hacks-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/combat-master-hacks-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/combat-master-hacks-esp.webp', alt: 'Player ESP overlay showing enemy distance', featured: true },
		{ src: '/images/combat-master-hacks-wallhack.webp', alt: 'Wallhack view through cover' },
		{ src: '/images/combat-master-hacks-aimbot.webp', alt: 'Aimbot FOV ring in combat' },
		{ src: '/images/combat-master-hacks-radar.webp', alt: 'Radar minimap enemy positions' },
		{ src: '/images/combat-master-hacks-match.webp', alt: 'Combat Master hacks in-match overlay' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/combat-master-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/combat-master-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/combat-master-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/combat-master-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/combat-master-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/combat-master-hacks-match.webp', title: '', caption: '' },
	],
} as const;
