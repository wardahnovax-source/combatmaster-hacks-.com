export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Combat Master Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Combat Master Hacks Blog | Raid Guides',
		blogDescription:
			'Combat Master guides — match tips, ESP, aimbot notes, loot routes, and Anti-cheat update coverage. English blog at combatmasterhacks.com/blog/.',
		blogH1: 'Combat Master Hacks Intel',
		blogIntro:
			'Short Combat Master guides for multiplayer matches and ranked modes. Pair these tips with the Combat Master Hacks product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Combat Master Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Combat Master Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Combat Master en PC Windows.',
		blogH1: 'Blog Combat Master Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos Combat Master indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Anti-cheat system en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Combat Master relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Combat Master Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Combat Master Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour Combat Master sur PC Windows.',
		blogH1: 'Blog Combat Master Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Combat Master indétectables, ESP wallhack, radar hack, Aimbot et Anti-cheat system en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Combat Master associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Combat Master Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Combat Master Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Combat Master Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Combat Master auf Windows PC.',
		blogH1: 'Combat Master Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Combat Master Hacks, ESP Wallhack, Radar Hack, Aimbot und Anti-cheat system in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Combat Master Guides',
		allPosts: 'Alle Beiträge',
		home: 'Combat Master Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Combat Master Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Combat Master no PC.',
		blogH1: 'Blog Combat Master Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats Combat Master indetectáveis, ESP wallhack, radar hack, Aimbot e Anti-cheat system em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Combat Master relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Combat Master Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Combat Master Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per Combat Master su PC Windows.',
		blogH1: 'Blog Combat Master Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat Combat Master indetectable, ESP wallhack, radar hack, Aimbot e Anti-cheat system in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Combat Master correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Combat Master Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Combat Master Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Combat Master Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Combat Master op Windows PC.',
		blogH1: 'Combat Master Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Combat Master hacks, ESP wallhack, radar hack, Aimbot en Anti-cheat system in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Combat Master gidsen',
		allPosts: 'Alle posts',
		home: 'Combat Master Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Combat Master Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla Combat Master na PC.',
		blogH1: 'Blog Combat Master Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Combat Master, ESP wallhack, radar hack, Aimbot i Anti-cheat system w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Combat Master',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Combat Master Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Combat Master Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Combat Master Hacks: undetected ESP, wallhack, radar и Aimbot для Combat Master на Windows PC.',
		blogH1: 'Блог Combat Master Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Combat Master, ESP wallhack, radar hack, Aimbot и Anti-cheat system на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Combat Master',
		allPosts: 'Все статьи',
		home: 'Главная Combat Master Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Combat Master Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Combat Master Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Combat Master Windows PC.',
		blogH1: 'Combat Master Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected Combat Master hileleri, ESP wallhack, radar hack, Aimbot ve Anti-cheat system SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Combat Master rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Combat Master Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Combat Master Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Combat Master Hacks: غش undetected وESP wallhack ورadar وAimbot لـ Combat Master على Windows PC.',
		blogH1: 'مدونة Combat Master Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Combat Master undetected وESP wallhack ورadar hack وAimbot وAnti-cheat system بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Combat Master ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Combat Master Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Combat Master Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Combat Master Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。Combat Master Windows PC向け。',
		blogH1: 'Combat Master Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected Combat Masterチート、ESP wallhack、radar hack、Aimbot、Anti-cheat systemのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Combat Masterガイド',
		allPosts: 'すべての記事',
		home: 'Combat Master Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Combat Master Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Combat Master Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Combat Master Windows PC.',
		blogH1: 'Combat Master Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Combat Master 치트, ESP wallhack, radar hack, Aimbot, Anti-cheat system SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Combat Master 가이드',
		allPosts: '모든 게시물',
		home: 'Combat Master Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Combat Master Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'Combat Master Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Combat Master Windows PC。',
		blogH1: 'Combat Master Hacks 博客 — 全球指南',
		blogIntro:
			'undetected Combat Master作弊、ESP wallhack、radar hack、Aimbot和Anti-cheat system的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Combat Master指南',
		allPosts: '所有文章',
		home: 'Combat Master Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Combat Master Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Combat Master Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Combat Master Windows PC के लिए।',
		blogH1: 'Combat Master Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Combat Master hacks, ESP wallhack, radar hack, Aimbot और Anti-cheat system SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Combat Master गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Combat Master Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Combat Master Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk Combat Master di PC Windows.',
		blogH1: 'Blog Combat Master Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat Combat Master undetected, ESP wallhack, radar hack, Aimbot dan Anti-cheat system dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Combat Master terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Combat Master Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Combat Master Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Combat Master Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Combat Master บน PC',
		blogH1: 'บล็อก Combat Master Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Combat Master undetected, ESP wallhack, radar hack, Aimbot และ Anti-cheat system 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Combat Master ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Combat Master Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Combat Master Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Combat Master trên PC.',
		blogH1: 'Blog Combat Master Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Combat Master undetected, ESP wallhack, radar hack, Aimbot và Anti-cheat system bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Combat Master liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Combat Master Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Combat Master Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Combat Master Hacks: undetected ESP, wallhack, radar та Aimbot для Combat Master на Windows PC.',
		blogH1: 'Блог Combat Master Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Combat Master, ESP wallhack, radar hack, Aimbot та Anti-cheat system 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Combat Master",
		allPosts: 'Усі статті',
		home: 'Головна Combat Master Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Combat Master Hacks: undetected ESP, wallhack, radar a Aimbot pro Combat Master na Windows PC.',
		blogH1: 'Blog Combat Master Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Combat Master hacky, ESP wallhack, radar hack, Aimbot a Anti-cheat system ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Combat Master průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Combat Master Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Combat Master Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Combat Master Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Combat Master pe PC.',
		blogH1: 'Blog Combat Master Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Combat Master undetected, ESP wallhack, radar hack, Aimbot și Anti-cheat system în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Combat Master related',
		allPosts: 'Toate articolele',
		home: 'Acasă Combat Master Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Combat Master Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Combat Master Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för Combat Master på PC.',
		blogH1: 'Combat Master Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Combat Master hacks, ESP wallhack, radar hack, Aimbot och Anti-cheat system på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Combat Master guider',
		allPosts: 'Alla inlägg',
		home: 'Combat Master Hacks hem',
		language: 'Språk',
	},
};
