import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'combat-master-esp'
	| 'combat-master-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'anti-cheat'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'combat-master-esp': '/combat-master-esp/',
	'combat-master-aimbot': '/combat-master-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-combat-master-hacks/',
	wallhack: '/combat-master-wallhack/',
	radar: '/combat-master-radar-hack/',
	'anti-cheat': '/anti-cheat-bypass/',
	'cheats-2026': '/combat-master-hacks-2026/',
	hacks: '/combat-master-hacks/',
	'cheat-download': '/combat-master-cheat-download/',
	'mod-menu': '/combat-master-mod-menu/',
	'soft-aim': '/combat-master-no-recoil/',
	'best-cheats': '/best-combat-master-hacks/',
	'aimbot-hack': '/combat-master-aimbot-hack/',
	'esp-hack': '/combat-master-esp-hack/',
	'unlock-all': '/combat-master-killstreak/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'combat-master-esp': {
		en: 'combat-master-esp',
		es: 'trucos-combat-master-esp',
		fr: 'triche-combat-master-esp',
		de: 'combat-master-esp-wallhack',
		pt: 'cheats-combat-master-esp',
		it: 'trucchi-combat-master-esp',
		nl: 'combat-master-esp-wallhack',
		pl: 'cheaty-combat-master-esp',
		ru: 'combat-master-esp-chity',
		tr: 'combat-master-esp-hile',
		ar: 'combat-master-esp-wallhack',
		ja: 'combat-master-esp-wallhack',
		ko: 'combat-master-esp-wallhack',
		zh: 'combat-master-esp-wallhack',
		hi: 'combat-master-esp-wallhack',
		id: 'combat-master-esp-wallhack',
		th: 'combat-master-esp-wallhack',
		vi: 'combat-master-esp-wallhack',
		uk: 'combat-master-esp-chity',
		cs: 'combat-master-esp-wallhack',
		ro: 'combat-master-esp-wallhack',
		sv: 'combat-master-esp-wallhack',
	},
	'combat-master-aimbot': {
		en: 'combat-master-aimbot',
		es: 'trucos-combat-master-aimbot',
		fr: 'triche-combat-master-aimbot',
		de: 'combat-master-aimbot',
		pt: 'cheats-combat-master-aimbot',
		it: 'trucchi-combat-master-aimbot',
		nl: 'combat-master-aimbot',
		pl: 'cheaty-combat-master-aimbot',
		ru: 'combat-master-aimbot-chity',
		tr: 'combat-master-aimbot-hile',
		ar: 'combat-master-aimbot',
		ja: 'combat-master-aimbot',
		ko: 'combat-master-aimbot',
		zh: 'combat-master-aimbot',
		hi: 'combat-master-aimbot',
		id: 'combat-master-aimbot',
		th: 'combat-master-aimbot',
		vi: 'combat-master-aimbot',
		uk: 'combat-master-aimbot-chity',
		cs: 'combat-master-aimbot',
		ro: 'combat-master-aimbot',
		sv: 'combat-master-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-combat-master',
		fr: 'fonctionnalites-triche-combat-master',
		de: 'escape-from-combat-master-hacks-funktionen',
		pt: 'recursos-cheats-combat-master',
		it: 'funzioni-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-functies',
		pl: 'funkcje-cheatow-combat-master',
		ru: 'funkcii-chitov-combat-master',
		tr: 'combat-master-hile-ozellikleri',
		ar: 'escape-from-combat-master-hacks-features',
		ja: 'escape-from-combat-master-hacks-features',
		ko: 'escape-from-combat-master-hacks-features',
		zh: 'escape-from-combat-master-hacks-features',
		hi: 'escape-from-combat-master-hacks-features',
		id: 'escape-from-combat-master-hacks-features',
		th: 'escape-from-combat-master-hacks-features',
		vi: 'escape-from-combat-master-hacks-features',
		uk: 'funkcii-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-funkce',
		ro: 'functii-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-combat-master',
		fr: 'prix-triche-combat-master',
		de: 'escape-from-combat-master-hacks-preise',
		pt: 'precos-cheats-combat-master',
		it: 'prezzi-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-prijzen',
		pl: 'ceny-cheatow-combat-master',
		ru: 'ceny-chitov-combat-master',
		tr: 'combat-master-hile-fiyatlari',
		ar: 'escape-from-combat-master-hacks-pricing',
		ja: 'escape-from-combat-master-hacks-pricing',
		ko: 'escape-from-combat-master-hacks-pricing',
		zh: 'escape-from-combat-master-hacks-pricing',
		hi: 'escape-from-combat-master-hacks-pricing',
		id: 'escape-from-combat-master-hacks-pricing',
		th: 'escape-from-combat-master-hacks-pricing',
		vi: 'escape-from-combat-master-hacks-pricing',
		uk: 'ciny-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-ceny',
		ro: 'preturi-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-combat-master',
		fr: 'installation-triche-combat-master',
		de: 'escape-from-combat-master-hacks-installation',
		pt: 'instalacao-cheats-combat-master',
		it: 'installazione-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-installatie',
		pl: 'instalacja-cheatow-combat-master',
		ru: 'ustanovka-chitov-combat-master',
		tr: 'combat-master-hile-kurulum',
		ar: 'escape-from-combat-master-hacks-setup',
		ja: 'escape-from-combat-master-hacks-setup',
		ko: 'escape-from-combat-master-hacks-setup',
		zh: 'escape-from-combat-master-hacks-setup',
		hi: 'escape-from-combat-master-hacks-setup',
		id: 'escape-from-combat-master-hacks-setup',
		th: 'escape-from-combat-master-hacks-setup',
		vi: 'escape-from-combat-master-hacks-setup',
		uk: 'vstanovka-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-instalace',
		ro: 'instalare-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-combat-master',
		fr: 'mises-a-jour-triche-combat-master',
		de: 'escape-from-combat-master-hacks-updates',
		pt: 'atualizacoes-cheats-combat-master',
		it: 'aggiornamenti-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-updates',
		pl: 'aktualizacje-cheatow-combat-master',
		ru: 'obnovleniya-chitov-combat-master',
		tr: 'combat-master-hile-guncellemeleri',
		ar: 'escape-from-combat-master-hacks-updates',
		ja: 'escape-from-combat-master-hacks-updates',
		ko: 'escape-from-combat-master-hacks-updates',
		zh: 'escape-from-combat-master-hacks-updates',
		hi: 'escape-from-combat-master-hacks-updates',
		id: 'escape-from-combat-master-hacks-updates',
		th: 'escape-from-combat-master-hacks-updates',
		vi: 'escape-from-combat-master-hacks-updates',
		uk: 'onovlennya-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-aktualizace',
		ro: 'actualizari-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-combat-master',
		fr: 'faq-triche-combat-master',
		de: 'escape-from-combat-master-hacks-faq',
		pt: 'faq-cheats-combat-master',
		it: 'faq-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-faq',
		pl: 'faq-cheatow-combat-master',
		ru: 'faq-chitov-combat-master',
		tr: 'combat-master-hile-sss',
		ar: 'escape-from-combat-master-hacks-faq',
		ja: 'escape-from-combat-master-hacks-faq',
		ko: 'escape-from-combat-master-hacks-faq',
		zh: 'escape-from-combat-master-hacks-faq',
		hi: 'escape-from-combat-master-hacks-faq',
		id: 'escape-from-combat-master-hacks-faq',
		th: 'escape-from-combat-master-hacks-faq',
		vi: 'escape-from-combat-master-hacks-faq',
		uk: 'faq-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-faq',
		ro: 'faq-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-combat-master',
		fr: 'support-triche-combat-master',
		de: 'escape-from-combat-master-hacks-support',
		pt: 'suporte-cheats-combat-master',
		it: 'supporto-trucchi-combat-master',
		nl: 'escape-from-combat-master-hacks-support',
		pl: 'wsparcie-cheatow-combat-master',
		ru: 'podderzhka-chitov-combat-master',
		tr: 'combat-master-hile-destek',
		ar: 'escape-from-combat-master-hacks-support',
		ja: 'escape-from-combat-master-hacks-support',
		ko: 'escape-from-combat-master-hacks-support',
		zh: 'escape-from-combat-master-hacks-support',
		hi: 'escape-from-combat-master-hacks-support',
		id: 'escape-from-combat-master-hacks-support',
		th: 'escape-from-combat-master-hacks-support',
		vi: 'escape-from-combat-master-hacks-support',
		uk: 'pidtrymka-chitiv-combat-master',
		cs: 'escape-from-combat-master-hacks-podpora',
		ro: 'suport-cheats-combat-master',
		sv: 'escape-from-combat-master-hacks-support',
	},
	undetected: {
		en: 'undetected-combat-master-hacks',
		es: 'trucos-combat-master-indetectables',
		fr: 'triche-combat-master-indetectable',
		de: 'unentdeckte-escape-from-combat-master-hacks',
		pt: 'cheats-combat-master-indetectaveis',
		it: 'trucchi-combat-master-indetectabili',
		nl: 'undetected-combat-master-hacks',
		pl: 'niewykrywalne-cheats-combat-master',
		ru: 'nedecektiruemye-chity-combat-master',
		tr: 'tespit-edilemeyen-combat-master-hileleri',
		ar: 'undetected-combat-master-hacks',
		ja: 'undetected-combat-master-hacks',
		ko: 'undetected-combat-master-hacks',
		zh: 'undetected-combat-master-hacks',
		hi: 'undetected-combat-master-hacks',
		id: 'undetected-combat-master-hacks',
		th: 'undetected-combat-master-hacks',
		vi: 'undetected-combat-master-hacks',
		uk: 'nedecektovani-chity-combat-master',
		cs: 'undetected-combat-master-hacks',
		ro: 'cheats-combat-master-nedetectabile',
		sv: 'undetected-combat-master-hacks',
	},
	wallhack: {
		en: 'combat-master-wallhack',
		es: 'wallhack-trucos-combat-master',
		fr: 'wallhack-triche-combat-master',
		de: 'combat-master-wallhack',
		pt: 'wallhack-cheats-combat-master',
		it: 'wallhack-trucchi-combat-master',
		nl: 'combat-master-wallhack',
		pl: 'wallhack-cheatow-combat-master',
		ru: 'wallhack-chity-combat-master',
		tr: 'combat-master-wallhack-hile',
		ar: 'combat-master-wallhack',
		ja: 'combat-master-wallhack',
		ko: 'combat-master-wallhack',
		zh: 'combat-master-wallhack',
		hi: 'combat-master-wallhack',
		id: 'combat-master-wallhack',
		th: 'combat-master-wallhack',
		vi: 'combat-master-wallhack',
		uk: 'wallhack-chity-combat-master',
		cs: 'combat-master-wallhack',
		ro: 'wallhack-cheats-combat-master',
		sv: 'combat-master-wallhack',
	},
	radar: {
		en: 'combat-master-radar-hack',
		es: 'radar-hack-trucos-combat-master',
		fr: 'radar-hack-triche-combat-master',
		de: 'combat-master-radar-hack',
		pt: 'radar-hack-cheats-combat-master',
		it: 'radar-hack-trucchi-combat-master',
		nl: 'combat-master-radar-hack',
		pl: 'radar-hack-cheatow-combat-master',
		ru: 'radar-hack-chity-combat-master',
		tr: 'combat-master-radar-hack',
		ar: 'combat-master-radar-hack',
		ja: 'combat-master-radar-hack',
		ko: 'combat-master-radar-hack',
		zh: 'combat-master-radar-hack',
		hi: 'combat-master-radar-hack',
		id: 'combat-master-radar-hack',
		th: 'combat-master-radar-hack',
		vi: 'combat-master-radar-hack',
		uk: 'radar-hack-chity-combat-master',
		cs: 'combat-master-radar-hack',
		ro: 'radar-hack-cheats-combat-master',
		sv: 'combat-master-radar-hack',
	},
	'anti-cheat': {
		en: 'anti-cheat-bypass',
		es: 'anti-cheat-bypass-trucos',
		fr: 'anti-cheat-bypass-triche',
		de: 'anti-cheat-bypass',
		pt: 'anti-cheat-bypass-cheats',
		it: 'anti-cheat-bypass-trucchi',
		nl: 'anti-cheat-bypass',
		pl: 'anti-cheat-bypass-cheatow',
		ru: 'anti-cheat-bypass-chity',
		tr: 'anti-cheat-bypass',
		ar: 'anti-cheat-bypass',
		ja: 'anti-cheat-bypass',
		ko: 'anti-cheat-bypass',
		zh: 'anti-cheat-bypass',
		hi: 'anti-cheat-bypass',
		id: 'anti-cheat-bypass',
		th: 'anti-cheat-bypass',
		vi: 'anti-cheat-bypass',
		uk: 'anti-cheat-bypass-chity',
		cs: 'anti-cheat-bypass',
		ro: 'anti-cheat-bypass-cheats',
		sv: 'anti-cheat-bypass',
	},
	'cheats-2026': {
		en: 'combat-master-hacks-2026',
		es: 'trucos-combat-master-2026',
		fr: 'triche-combat-master-2026',
		de: 'combat-master-hacks-2026',
		pt: 'cheats-combat-master-2026',
		it: 'trucchi-combat-master-2026',
		nl: 'combat-master-hacks-2026',
		pl: 'cheaty-combat-master-2026',
		ru: 'chity-combat-master-2026',
		tr: 'combat-master-hileleri-2026',
		ar: 'combat-master-hacks-2026',
		ja: 'combat-master-hacks-2026',
		ko: 'combat-master-hacks-2026',
		zh: 'combat-master-hacks-2026',
		hi: 'combat-master-hacks-2026',
		id: 'combat-master-hacks-2026',
		th: 'combat-master-hacks-2026',
		vi: 'combat-master-hacks-2026',
		uk: 'chity-combat-master-2026',
		cs: 'combat-master-hacks-2026',
		ro: 'cheats-combat-master-2026',
		sv: 'combat-master-hacks-2026',
	},
	hacks: {
		en: 'combat-master-hacks',
		es: 'hacks-trucos-combat-master',
		fr: 'hacks-triche-combat-master',
		de: 'combat-master-hacks',
		pt: 'hacks-cheats-combat-master',
		it: 'hacks-trucchi-combat-master',
		nl: 'combat-master-hacks',
		pl: 'hacks-cheatow-combat-master',
		ru: 'haksy-chity-combat-master',
		tr: 'combat-master-hile-hacks',
		ar: 'combat-master-hacks',
		ja: 'combat-master-hacks',
		ko: 'combat-master-hacks',
		zh: 'combat-master-hacks',
		hi: 'combat-master-hacks',
		id: 'combat-master-hacks',
		th: 'combat-master-hacks',
		vi: 'combat-master-hacks',
		uk: 'haksy-chity-combat-master',
		cs: 'combat-master-hacks',
		ro: 'hacks-cheats-combat-master',
		sv: 'combat-master-hacks',
	},
	'cheat-download': {
		en: 'combat-master-cheat-download',
		es: 'descarga-trucos-combat-master',
		fr: 'telechargement-triche-combat-master',
		de: 'combat-master-cheat-download',
		pt: 'download-cheats-combat-master',
		it: 'download-trucchi-combat-master',
		nl: 'combat-master-cheat-download',
		pl: 'pobieranie-cheatow-combat-master',
		ru: 'skachat-chity-combat-master',
		tr: 'combat-master-hile-indir',
		ar: 'combat-master-cheat-download',
		ja: 'combat-master-cheat-download',
		ko: 'combat-master-cheat-download',
		zh: 'combat-master-cheat-download',
		hi: 'combat-master-cheat-download',
		id: 'combat-master-cheat-download',
		th: 'combat-master-cheat-download',
		vi: 'combat-master-cheat-download',
		uk: 'zavantazhennya-chitiv-combat-master',
		cs: 'combat-master-cheat-download',
		ro: 'descarcare-cheats-combat-master',
		sv: 'combat-master-cheat-download',
	},
	'mod-menu': {
		en: 'combat-master-mod-menu',
		es: 'menu-mod-trucos-combat-master',
		fr: 'menu-mod-triche-combat-master',
		de: 'combat-master-mod-menu',
		pt: 'menu-mod-cheats-combat-master',
		it: 'menu-mod-trucchi-combat-master',
		nl: 'combat-master-mod-menu',
		pl: 'menu-mod-cheatow-combat-master',
		ru: 'mod-menu-chity-combat-master',
		tr: 'combat-master-mod-menu',
		ar: 'combat-master-mod-menu',
		ja: 'combat-master-mod-menu',
		ko: 'combat-master-mod-menu',
		zh: 'combat-master-mod-menu',
		hi: 'combat-master-mod-menu',
		id: 'combat-master-mod-menu',
		th: 'combat-master-mod-menu',
		vi: 'combat-master-mod-menu',
		uk: 'mod-menu-chity-combat-master',
		cs: 'combat-master-mod-menu',
		ro: 'meniu-mod-cheats-combat-master',
		sv: 'combat-master-mod-menu',
	},
	'soft-aim': {
		en: 'combat-master-no-recoil',
		es: 'soft-aim-trucos-combat-master',
		fr: 'soft-aim-triche-combat-master',
		de: 'combat-master-no-recoil',
		pt: 'soft-aim-cheats-combat-master',
		it: 'soft-aim-trucchi-combat-master',
		nl: 'combat-master-no-recoil',
		pl: 'soft-aim-cheatow-combat-master',
		ru: 'soft-aim-chity-combat-master',
		tr: 'combat-master-no-recoil',
		ar: 'combat-master-no-recoil',
		ja: 'combat-master-no-recoil',
		ko: 'combat-master-no-recoil',
		zh: 'combat-master-no-recoil',
		hi: 'combat-master-no-recoil',
		id: 'combat-master-no-recoil',
		th: 'combat-master-no-recoil',
		vi: 'combat-master-no-recoil',
		uk: 'soft-aim-chity-combat-master',
		cs: 'combat-master-no-recoil',
		ro: 'soft-aim-cheats-combat-master',
		sv: 'combat-master-no-recoil',
	},
	'best-cheats': {
		en: 'best-combat-master-hacks',
		es: 'mejores-trucos-combat-master',
		fr: 'meilleures-triches-combat-master',
		de: 'beste-escape-from-combat-master-hacks',
		pt: 'melhores-cheats-combat-master',
		it: 'migliori-trucchi-combat-master',
		nl: 'beste-escape-from-combat-master-hacks',
		pl: 'najlepsze-cheats-combat-master',
		ru: 'luchshie-chity-combat-master',
		tr: 'en-iyi-combat-master-hileleri',
		ar: 'best-combat-master-hacks',
		ja: 'best-combat-master-hacks',
		ko: 'best-combat-master-hacks',
		zh: 'best-combat-master-hacks',
		hi: 'best-combat-master-hacks',
		id: 'best-combat-master-hacks',
		th: 'best-combat-master-hacks',
		vi: 'best-combat-master-hacks',
		uk: 'naykrashchi-chity-combat-master',
		cs: 'nejlepsi-escape-from-combat-master-hacks',
		ro: 'cele-mai-bune-cheats-combat-master',
		sv: 'basta-escape-from-combat-master-hacks',
	},
	'aimbot-hack': {
		en: 'combat-master-aimbot-hack',
		es: 'aimbot-hack-trucos-combat-master',
		fr: 'aimbot-hack-triche-combat-master',
		de: 'combat-master-aimbot-hack',
		pt: 'aimbot-hack-cheats-combat-master',
		it: 'aimbot-hack-trucchi-combat-master',
		nl: 'combat-master-aimbot-hack',
		pl: 'aimbot-hack-cheatow-combat-master',
		ru: 'aimbot-hack-chity-combat-master',
		tr: 'combat-master-aimbot-hack',
		ar: 'combat-master-aimbot-hack',
		ja: 'combat-master-aimbot-hack',
		ko: 'combat-master-aimbot-hack',
		zh: 'combat-master-aimbot-hack',
		hi: 'combat-master-aimbot-hack',
		id: 'combat-master-aimbot-hack',
		th: 'combat-master-aimbot-hack',
		vi: 'combat-master-aimbot-hack',
		uk: 'aimbot-hack-chity-combat-master',
		cs: 'combat-master-aimbot-hack',
		ro: 'aimbot-hack-cheats-combat-master',
		sv: 'combat-master-aimbot-hack',
	},
	'esp-hack': {
		en: 'combat-master-esp-hack',
		es: 'esp-hack-trucos-combat-master',
		fr: 'esp-hack-triche-combat-master',
		de: 'combat-master-esp-hack',
		pt: 'esp-hack-cheats-combat-master',
		it: 'esp-hack-trucchi-combat-master',
		nl: 'combat-master-esp-hack',
		pl: 'esp-hack-cheatow-combat-master',
		ru: 'esp-hack-chity-combat-master',
		tr: 'combat-master-esp-hack',
		ar: 'combat-master-esp-hack',
		ja: 'combat-master-esp-hack',
		ko: 'combat-master-esp-hack',
		zh: 'combat-master-esp-hack',
		hi: 'combat-master-esp-hack',
		id: 'combat-master-esp-hack',
		th: 'combat-master-esp-hack',
		vi: 'combat-master-esp-hack',
		uk: 'esp-hack-chity-combat-master',
		cs: 'combat-master-esp-hack',
		ro: 'esp-hack-cheats-combat-master',
		sv: 'combat-master-esp-hack',
	},
	'unlock-all': {
		en: 'combat-master-killstreak',
		es: 'unlock-all-trucos-combat-master',
		fr: 'unlock-all-triche-combat-master',
		de: 'combat-master-killstreak',
		pt: 'unlock-all-cheats-combat-master',
		it: 'unlock-all-trucchi-combat-master',
		nl: 'combat-master-killstreak',
		pl: 'unlock-all-cheatow-combat-master',
		ru: 'unlock-all-chity-combat-master',
		tr: 'combat-master-killstreak',
		ar: 'combat-master-killstreak',
		ja: 'combat-master-killstreak',
		ko: 'combat-master-killstreak',
		zh: 'combat-master-killstreak',
		hi: 'combat-master-killstreak',
		id: 'combat-master-killstreak',
		th: 'combat-master-killstreak',
		vi: 'combat-master-killstreak',
		uk: 'unlock-all-chity-combat-master',
		cs: 'combat-master-killstreak',
		ro: 'unlock-all-cheats-combat-master',
		sv: 'combat-master-killstreak',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('combat-master-aimbot', locale), pageId: 'combat-master-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('combat-master-esp', locale), pageId: 'combat-master-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
