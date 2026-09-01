import { siteConfig } from './site';
import { combatMasterImages } from './combat-master';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	combatMasterImages.espWallhack,
	combatMasterImages.aimbotCombat,
	combatMasterImages.aimbotSkeleton,
	combatMasterImages.playerEsp,
	combatMasterImages.cheatsCombat,
	'/images/combat-master-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/combat-master-hacks-hero-1024w.webp',
	'combat-master-esp': combatMasterImages.playerEsp,
	'combat-master-aimbot': combatMasterImages.aimbotCombat,
	features: '/images/combat-master-hacks-hero-1024w.webp',
	pricing: '/images/combat-master-hacks-hero-1024w.webp',
	setup: combatMasterImages.playerEsp,
	updates: '/images/combat-master-hacks-hero-1024w.webp',
	faq: combatMasterImages.aimbotSkeleton,
	support: combatMasterImages.cheatsCombat,
	undetected: combatMasterImages.espWallhack,
	wallhack: combatMasterImages.espWallhack,
	radar: combatMasterImages.playerEsp,
	'anti-cheat': combatMasterImages.aimbotCombat,
	'cheats-2026': '/images/combat-master-hacks-hero-1024w.webp',
	hacks: combatMasterImages.cheatsCombat,
	'cheat-download': combatMasterImages.cheatsCombat,
	'mod-menu': combatMasterImages.playerEsp,
	'soft-aim': combatMasterImages.aimbotSkeleton,
	'best-cheats': '/images/combat-master-hacks-hero-1024w.webp',
	'aimbot-hack': combatMasterImages.aimbotSkeleton,
	'esp-hack': combatMasterImages.espWallhack,
	'unlock-all': combatMasterImages.playerEsp,
	privacy: combatMasterImages.aimbotCombat,
	refund: combatMasterImages.cheatsCombat,
	terms: combatMasterImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
