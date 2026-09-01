/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Combat Master Hacks',
	/** Short product label if needed */
	shortName: 'Combat Master',
	/** Canonical origin — no trailing slash */
	url: 'https://combatmasterhacks.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@combatmasterhacks.com',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fcombat-master',

	/** Game this template instance targets */
	game: 'Combat Master',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Anti-Cheat',

	logo: '/images/combat-master-hacks-logo.webp',
	logoRaster: '/images/combat-master-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Combat Master Hacks logo',
	defaultOgImage: '/images/combat-master-hacks-hero-1024w.webp',
	heroImage: '/images/combat-master-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC', 'Mobile'] as const,

	/**
	 * Site color tones — tactical sky blue + gold accent from hero art.
	 */
	theme: {
		accent: '#FFD700',
		bg: '#0A2E5C',
		soft: '#4DA6FF',
		deep: '#E6B800',
		hover: '#FFE566',
		panel: '#081828',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'combat master hacks',
		list: [
			'combat master hacks',
			'combat master cheats',
			'combat master hack',
			'combat master cheat',
			'combat master aimbot',
			'combat master esp',
			'combat master overlay',
			'combat master radar',
			'combat master no recoil',
			'combat master stream proof',
			'combat master killstreak',
			'best combat master cheat',
		] as const,
	},

	seo: {
		homeTitle: 'Combat Master Hacks | Official Site',
		homeDescription:
			'Official Combat Master Hacks site. Player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay in one license. Buy now.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license — player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay with {antiCheat} updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans. Same player ESP, aimbot, radar, and overlay features on both. Instant delivery after checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before your next match.',
		previewTitle: 'Combat Master Hacks | Aimbot & ESP Overlay',
		previewDescription:
			'Buy Combat Master hacks with player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay. Instant delivery after checkout.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} after checkout. Short setup steps so you can play faster. Follow each step before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand}. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Combat Master — delivery, setup, {antiCheat} updates, refunds, and system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — player ESP, aimbot, no recoil, radar, and overlay tools for Combat Master.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — aimbot, ESP, radar, killstreak tips, and {antiCheat} update coverage for players.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — player ESP, aimbot, and radar overlay',
		summary:
			'{brand} is an undetected {game} hack package. Includes player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay with {antiCheat} maintenance.',
		heroLede: 'Player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay for Combat Master.',
		blogLabel: 'Combat Master Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game}.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Combat Master — player ESP, aimbot, no recoil, killstreak, radar minimap, and stream-proof overlay.',
		setupIntro: 'Install {brand} after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, radar, and support.',
		chipEsp: 'Player ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Radar minimap',
		chipUpdates: 'Stream-proof overlay',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-01',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/combat-master-hacks-esp.webp',
				title: 'Player ESP overlay in Combat Master',
				caption: 'Player ESP boxes and distance readouts during a match',
			},
			{
				src: '/images/combat-master-hacks-wallhack.webp',
				title: 'Wallhack visibility for Combat Master',
				caption: 'Enemy player outlines through walls and cover',
			},
			{
				src: '/images/combat-master-hacks-aimbot.webp',
				title: 'Aimbot assist for Combat Master',
				caption: 'Configurable aimbot FOV and bone priority',
			},
			{
				src: '/images/combat-master-hacks-aimbot-view.webp',
				title: 'Aimbot view in Combat Master Hacks',
				caption: 'In-menu aimbot controls and settings',
			},
			{
				src: '/images/combat-master-hacks-radar.webp',
				title: 'Radar minimap threat overlay',
				caption: 'Radar cues for flanks and nearby enemies',
			},
			{
				src: '/images/combat-master-hacks-match.webp',
				title: 'Combat Master Hacks license plans',
				caption: 'Monthly and lifetime plans with instant delivery',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
