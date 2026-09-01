import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Combat Master Hacks 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'Combat Master hacks for Windows PC — ESP, soft aim, radar, and Anti-cheat updates. Compare plans and buy.',
		h1: 'Combat Master Hacks — Undetected ESP, Wallhack & Aimbot',
		intro:
			'Combat Master Hacks is the undetected combat master hacks package for Windows PC — built for Combat Master on Windows PC. Combat Master esp wallhack, 2D radar, and combat master aimbot with Anti-cheat maintenance after every major patch.',
		imageAlt: "Combat Master Hacks homepage hero — ESP and aimbot for Combat Master",
		galleryTitle: 'Combat Master Hacks gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Combat Master hacks in 2026',
				'Combat Master rewards map awareness. Combat Master Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on match, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.combat-master} and ${EXT.anti-cheat}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Anti-cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/combat-master-hacks/">Combat Master hacks pillar</a>, <a href="/combat-master-esp/">ESP guide</a>, <a href="/combat-master-aimbot/">Aimbot controls</a>, and <a href="/combat-master-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, Combat Master Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for multiplayer matches and scav-runs — covering both “combat master hacks” and “combat master cheats” search intent.',
				'Browse the <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, <a href="/combat-master-esp/">wallhack</a>, and <a href="/combat-master-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'combat-master-esp': {
		title: 'Combat Master ESP 2026 | Player Boxes & Wallhack',
		description:
			'Combat Master ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected combat master hacks for Combat Master.',
		h1: 'Combat Master ESP — Player Boxes & Wallhack',
		intro:
			'Combat Master esp visibility tools for match and scav-run. Read enemy squads, enemy players, enemy players, loot, and distance before you commit — toggleable combat master esp wallhack overlays bundled in our combat master hacks package.',
		imageAlt: "Combat Master ESP player boxes and distance readouts in a match",
		galleryTitle: 'Combat Master ESP overlay visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Combat Master wallhack guide',
		ctaSecondaryHref: '/combat-master-esp/',
		sections: [
			section(
				'What Combat Master ESP solves in matchs',
				'Combat Master maps punish incomplete information. Combat Master Hacks ESP wallhack helps you spot enemy squads early, spot enemy players before they push your angle, and mark high-value loot worth the detour.',
				'On match, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`Combat Master’s live seasons and map updates are published by Battlestate Games (${EXT.combat-master}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extract cues, and loot pins so only match-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports multiplayer matches and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/combat-master-esp/">wallhack page</a> and pair visibility with the <a href="/combat-master-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extract awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Anti-cheat maintenance',
				'Combat Master Hacks ESP wallhack is maintained for Combat Master with rebuilds after Anti-cheat system patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.anti-cheat} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Anti-cheat bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first match.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/combat-master-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/combat-master-hacks/">Combat Master hacks pillar</a> and <a href="/combat-master-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'combat-master-aimbot': {
		title: 'Combat Master Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'Combat Master aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our combat master hacks package.',
		h1: 'Combat Master Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for Combat Master firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Combat Master aimbot and soft aim controls on Windows PC",
		galleryTitle: 'Combat Master Aimbot combat previews',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/combat-master-esp/',
		sections: [
			section(
				'Aimbot tuned for Combat Master combat pace',
				'Combat Master mixes long-range AR fights with close-quarters SMG pushes. Combat Master Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.combat-master}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/combat-master-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/combat-master-esp/">ESP wallhack</a> and <a href="/combat-master-radar-hack/">2D radar</a> in the same Combat Master Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Anti-cheat maintenance for undetected Aimbot',
				'Combat Master Hacks rebuilds Aimbot behavior when Anti-cheat system or major Combat Master patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.anti-cheat}, then follow our <a href="/updates/">Anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Combat Master Hacks Features | ESP, Soft Aim & Radar',
		description:
			'Full combat master hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Combat Master Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the Combat Master Hacks package for Combat Master on Windows PC — with Anti-cheat maintenance after major patches.',
		imageAlt: "Combat Master Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'Combat Master Hacks feature gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for match-critical overlays only.',
				'Team and enemy colour coding supports multiplayer matches and scav-runs. Deep-dive the <a href="/combat-master-esp/">ESP page</a> and <a href="/combat-master-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.combat-master} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-match extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Combat Master sessions. See <a href="/combat-master-radar-hack/">radar</a> and <a href="/combat-master-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/combat-master-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@combatmasterhacks.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/combat-master-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Combat Master Hacks Pricing | $35/mo or $150 Life',
		description:
			'Combat Master hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Combat Master Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Combat Master Hacks — ESP wallhack, radar hack, and Aimbot for Combat Master on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Combat Master Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'Combat Master Hacks package visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Combat Master Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected Combat Master Hacks package — ideal if you play Combat Master regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Anti-cheat system or major Combat Master patches.',
				`Season calendars and client updates come from ${EXT.combat-master}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/combat-master-hacks/">Combat Master hacks</a>, <a href="/combat-master-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Combat Master Hacks Setup | Windows PC Guide',
		description:
			'Set up combat master hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Anti-cheat updates before your first queue.',
		h1: 'Combat Master Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure Combat Master Hacks for Combat Master on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Anti-cheat maintenance status before queueing.',
		imageAlt: "Combat Master Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'Combat Master Hacks setup visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Combat Master Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Anti-cheat maintenance build before launching Combat Master.',
				`Also glance at ${EXT.status} if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.`,
				'Combat Master Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemy players, enemy players, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Anti-Cheat module live on <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, and <a href="/combat-master-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/combat-master-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Combat Master or Anti-cheat system patches',
				'When Battlestate Games ships a major Combat Master update or Anti-cheat system patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.anti-cheat}. Our practical workflow is documented on the <a href="/updates/">Anti-cheat bypass page</a> and <a href="/combat-master-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Combat Master Hacks Updates | Anti-Cheat Maintenance Log',
		description:
			'Combat Master hacks update log: Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Combat Master Hacks Updates — Maintenance Log',
		intro:
			'Track Anti-cheat maintenance and Combat Master patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "Combat Master Hacks live status after anti-cheat and game patches",
		galleryTitle: 'Combat Master patch and maintenance visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/combat-master-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'Combat Master and Anti-cheat system receive frequent patches. Combat Master Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Battlestate Games platform health and this page for Combat Master Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on match and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Anti-cheat system compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Anti-cheat bypass guide</a> and <a href="/combat-master-hacks/">undetected Combat Master hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.combat-master}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Anti-cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Combat Master Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Combat Master hacks FAQ: ESP boxes, soft aim, Anti-cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Combat Master Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected Combat Master Hacks — ESP wallhack, radar hack, Aimbot, Anti-cheat maintenance, checkout, and Combat Master compatibility on Windows PC.',
		imageAlt: "Combat Master Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'Combat Master Hacks FAQ visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Combat Master Hacks?',
				'Combat Master Hacks is an undetected cheat package for Combat Master on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Anti-cheat maintenance updates.',
				'Packages cover match and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/combat-master-esp/">ESP</a> / <a href="/combat-master-aimbot/">Aimbot</a> for module detail.',
				`Combat Master itself is published by Battlestate Games (${EXT.combat-master}). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.`,
			),
			section(
				'Are Combat Master Hacks undetected in 2026?',
				'Combat Master Hacks is maintained with rebuilds after Anti-cheat system and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/combat-master-hacks/">undetected Combat Master hacks</a> and the <a href="/updates/">Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@combatmasterhacks.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Combat Master Hacks Support | Help & Contact',
		description:
			'Contact combat master hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Combat Master Hacks Support — Contact Us',
		intro:
			'Get help with Combat Master Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Anti-cheat maintenance for Combat Master on Windows PC.',
		imageAlt: "Combat Master Hacks support page for license and setup help",
		galleryTitle: 'Combat Master Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Combat Master Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.',
				`Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Anti-cheat bypass notes live on the dedicated <a href="/updates/">Anti-cheat system page</a>.',
				'Email: support@combatmasterhacks.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Combat Master Hacks 2026 | Anti-Cheat Maintenance',
		description:
			'Undetected combat master hacks with Anti-cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Combat Master Hacks — Anti-Cheat Maintenance',
		intro:
			'How Combat Master Hacks stays maintained for Combat Master after Anti-cheat system patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "Combat Master Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected Combat Master Hacks visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Anti-cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Combat Master Hacks',
				'Undetected Combat Master Hacks means the package is actively maintained against Anti-cheat system and major Combat Master patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after anti-cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.anti-cheat}; Combat Master client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Anti-cheat maintenance workflow',
				'When Anti-cheat system or Combat Master updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Anti-cheat bypass Combat Master guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/combat-master-hacks/">Combat Master hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Combat Master Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'Combat Master wallhack ESP with player boxes and loot markers for Windows PC. Undetected combat master hacks — learn overlays and buy.',
		h1: 'Combat Master Wallhack — ESP Boxes & Visibility',
		intro:
			'Combat Master wallhack ESP for Combat Master — see players, loot, bosses, and containers through toggleable wallhack overlays built for multiplayer matches and scav-runs.',
		imageAlt: "Combat Master wallhack visibility through walls in a match",
		galleryTitle: 'Combat Master wallhack ESP gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Combat Master ESP page',
		ctaSecondaryHref: '/combat-master-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A Combat Master wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Combat Master Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.',
				'For the broader ESP keyword page see <a href="/combat-master-esp/">Combat Master ESP</a>; for combat assist see <a href="/combat-master-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support match, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.combat-master}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/combat-master-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Anti-cheat system patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/combat-master-hacks/">undetected Combat Master hacks</a> and <a href="/updates/">Anti-cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/combat-master-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Combat Master Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Combat Master radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our combat master hacks package.',
		h1: 'Combat Master Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for Combat Master — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "Combat Master 2D radar overlay showing nearby threats",
		galleryTitle: 'Combat Master radar hack visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/combat-master-esp/',
		sections: [
			section(
				'Why radar hack matters in Combat Master',
				'matchs fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Combat Master Hacks radar complements <a href="/combat-master-esp/">ESP wallhack</a> markers during squad pushes and extract camp fights.',
				`Mode rules and seasonal changes come from ${EXT.combat-master}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across match and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/combat-master-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/combat-master-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Anti-cheat maintenance rebuilds with the full Combat Master Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Combat Master patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/combat-master-hacks/">undetected status</a>.',
			),
		],
	},
	'anti-cheat': {
		title: 'Anti-Cheat Bypass Combat Master | Combat Master Hacks Maintenance',
		description:
			'How combat master hacks rebuild after Anti-cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Anti-Cheat Bypass — Combat Master Hacks Maintenance',
		intro:
			'Understand Anti-cheat system maintenance for Combat Master Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Combat Master security updates.',
		imageAlt: "Combat Master Hacks maintenance after a Anti-cheat patch",
		galleryTitle: 'Anti-cheat maintenance visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Anti-cheat system overview',
				`Anti-cheat system is Battlestate Games' anti-cheat for Combat Master on PC (see ${EXT.anti-cheat}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`Combat Master Hacks monitors Anti-cheat patch notes and Combat Master seasonal updates from ${EXT.combat-master} to schedule module reviews.`,
				'“Anti-cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Anti-cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Battlestate Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/combat-master-hacks/">undetected Combat Master hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Anti-cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Combat Master Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best combat master hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected combat master hacks with Anti-cheat maintenance — compare and buy.',
		h1: 'Combat Master Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Combat Master Hacks package for Combat Master — undetected ESP wallhack, radar hack, and Aimbot with Anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Combat Master Hacks product overview for Combat Master",
		galleryTitle: 'Combat Master Hacks 2026 gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why combat master hacks buyers choose Combat Master Hacks in 2026',
				'2026 seasons bring new maps, weapons, and Anti-cheat system updates. Combat Master Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.combat-master}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover match and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/combat-master-hacks/">Combat Master hacks pillar</a>, <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, <a href="/combat-master-esp/">wallhack</a>, <a href="/combat-master-radar-hack/">radar</a>, <a href="/combat-master-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/combat-master-hacks/">Combat Master hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/combat-master-hacks/">Combat Master hacks</a> checklist, <a href="/blog/combat-master-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@combatmasterhacks.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Combat Master Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'Combat Master hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Anti-cheat maintenance. Compare combat master hacks options and buy the full package.',
		h1: 'Combat Master Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'Combat Master hacks for match and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Anti-cheat system patches. This is the pillar guide for combat master hacks in 2026.',
		imageAlt: "Combat Master Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'Combat Master hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/combat-master-hacks/',
		sections: [
			section(
				'What Combat Master hacks include in 2026',
				'Players searching for Combat Master hacks usually want visibility and combat tools without stacking separate downloads. Combat Master Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called combat master hacks.',
				'Coverage spans match and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.combat-master}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Combat Master hacks pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/combat-master-hacks/">combat master hacks 2026</a> and <a href="/combat-master-hacks/">Combat Master hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/combat-master-esp/">Combat Master ESP</a>, <a href="/combat-master-aimbot/">Combat Master Aimbot</a>, <a href="/combat-master-esp/">wallhack</a>, <a href="/combat-master-radar-hack/">radar hack</a>, and <a href="/combat-master-aimbot/">soft aim</a>.',
				'Blog guides expand Anti-Cheat keyword: <a href="/blog/combat-master-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-combat-master-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-combat-master-hacks-anti-cheat/">undetected Anti-Cheat notes</a>.',
			),
			section(
				'Combat Master hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. Combat Master Hacks maps the full match loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/combat-master-hacks/">mod menu</a>, <a href="/combat-master-aimbot/">aimbot</a>, <a href="/combat-master-esp/">ESP</a>.',
			),
			section(
				'Undetected Combat Master hacks with Anti-cheat maintenance',
				'Undetected Combat Master hacks require rebuilds after Anti-cheat system and major Combat Master patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.anti-cheat} for anti-cheat background and our <a href="/updates/">Anti-cheat bypass guide</a> for the practical workflow. Pair with <a href="/combat-master-hacks/">undetected Combat Master hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Combat Master Hack Download 2026 | Instant Access',
		description:
			'Combat Master hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Combat Master Hack Download — Instant License Delivery',
		intro:
			'How Combat Master hack download works for Combat Master — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "Combat Master Hacks download and install delivery flow",
		galleryTitle: 'Combat Master hack download visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Combat Master hack download delivery works',
				'After checkout confirms payment, Combat Master Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Battlestate Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Combat Master hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for multiplayer matches and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Combat Master or Anti-cheat system patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/combat-master-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Combat Master Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Combat Master mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected combat master hacks package.',
		h1: 'Combat Master Mod Menu — In-Client Control Panel',
		intro:
			'Combat Master mod menu controls for Combat Master — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Combat Master session on Windows PC.',
		imageAlt: "Combat Master Hacks in-game menu controls",
		galleryTitle: 'Combat Master mod menu gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Combat Master mod menu controls',
				'A Combat Master mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Combat Master Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Combat Master.',
				'Control deep-dives: <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, <a href="/combat-master-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for multiplayer matches and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.combat-master} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/combat-master-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Anti-cheat patches',
				'Combat Master mod menu behavior is rebuilt when Anti-cheat system or major Combat Master updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Anti-cheat bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Combat Master Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'Combat Master soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our combat master hacks with ESP boxes.',
		h1: 'Combat Master Soft Aim — Smooth Aimbot Controls',
		intro:
			'Combat Master soft aim settings for Combat Master — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Combat Master soft aim FOV and smoothness settings",
		galleryTitle: 'Combat Master soft aim gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/combat-master-aimbot/',
		sections: [
			section(
				'What Combat Master soft aim means',
				'Combat Master soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Combat Master Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/combat-master-aimbot/">Combat Master Aimbot</a>. Alternate wording: <a href="/combat-master-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.combat-master} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/combat-master-esp/">ESP wallhack</a> and <a href="/combat-master-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Anti-cheat maintenance',
				'Aimbot modules rebuild after Anti-cheat system patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Combat Master Hacks 2026 | Buyer Guide',
		description:
			'Best combat master hacks for 2026: ESP boxes, soft aim, and Anti-cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Combat Master Hacks — 2026 Buyer Guide',
		intro:
			'Compare the Combat Master hacks for Combat Master in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Anti-cheat system rebuilds and instant delivery.',
		imageAlt: "Combat Master Hacks overview for Combat Master on PC",
		galleryTitle: 'Best Combat Master hacks gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Combat Master hacks in 2026',
				'The Combat Master hacks combine active Anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'Combat Master Hacks covers match and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Combat Master hacks feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Combat Master patches.',
				'Review <a href="/features/">Features</a>, <a href="/combat-master-hacks/">undetected status</a>, and <a href="/combat-master-hacks/">Combat Master hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/combat-master-esp/">ESP</a>, <a href="/combat-master-aimbot/">Aimbot</a>, <a href="/combat-master-hacks/">hacks</a>.',
			),
			section(
				'Buying the Combat Master hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Combat Master Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'Combat Master aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our combat master hacks package.',
		h1: 'Combat Master Aimbot Hack — Soft Aim Assist',
		intro:
			'Combat Master aimbot hack tools for Combat Master — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "Combat Master aimbot hack controls and bone priority",
		galleryTitle: 'Combat Master aimbot hack gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/combat-master-aimbot/',
		sections: [
			section(
				'Combat Master aimbot hack vs visibility tools',
				'A Combat Master aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Combat Master Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Combat Master combat pace across multiplayer matches and scav-runs.',
				'Prefer softer tracking language? See <a href="/combat-master-aimbot/">soft aim</a>. Full settings: <a href="/combat-master-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-match extracts.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.combat-master} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Anti-cheat system updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Anti-cheat bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/combat-master-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Combat Master ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Combat Master ESP hack with player boxes and loot markers for Windows PC. Undetected combat master hacks with — see overlays and buy.',
		h1: 'Combat Master ESP Hack — Player Boxes Guide',
		intro:
			'Combat Master ESP hack overlays for Combat Master — player outlines, boss threat cues, loot and container markers with distance readouts across match and scav-run.',
		imageAlt: "Combat Master ESP hack boxes and loot markers",
		galleryTitle: 'Combat Master ESP hack gallery',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/combat-master-esp/',
		sections: [
			section(
				'What a Combat Master ESP hack shows',
				'A Combat Master ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/combat-master-esp/">Combat Master ESP</a>. Wallhack wording: <a href="/combat-master-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for matchs',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only match-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports multiplayer matches and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Anti-cheat maintenance',
				'ESP hack modules rebuild after Anti-cheat system and Combat Master patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/combat-master-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/combat-master-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Combat Master Unlock All 2026 | What It Really Means',
		description:
			'Combat Master unlock all explained vs real combat master hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'Combat Master Unlock All — What Players Search For',
		intro:
			'Combat Master unlock all is a common search term for Combat Master — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Combat Master Hacks actually provides on Windows PC.',
		imageAlt: "Combat Master Hacks license features overview",
		galleryTitle: 'Combat Master unlock all guide visuals',
		ctaPrimary: 'Buy Combat Master Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Combat Master unlock all usually means',
				'Combat Master unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'Combat Master Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.combat-master}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/combat-master-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/combat-master-hacks/">Combat Master hacks</a> and <a href="/combat-master-hacks/">Combat Master hacks</a>.',
			),
			section(
				'Buying Combat Master Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for Combat Master on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Anti-cheat system patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Combat Master Hacks',
		description:
			'Privacy policy for Combat Master Hacks. How we handle support emails, order data, and checkout for combat master hacks licenses on combatmasterhacks.com.',
		h1: 'Privacy Policy',
		intro: 'How Combat Master Hacks handles information when you browse combatmasterhacks.com or contact support about a Combat Master license.',
		imageAlt: "Combat Master Hacks privacy policy page",
		galleryTitle: 'Combat Master Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Combat Master Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@combatmasterhacks.com with your request details.',
				'Policy updates publish on this page. Continued use of combatmasterhacks.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Combat Master Hacks',
		description:
			'Refund policy for Combat Master Hacks. Digital delivery terms and eligibility for combat master hacks packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Combat Master Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Combat Master.',
		imageAlt: "Combat Master Hacks refund policy page",
		galleryTitle: 'Combat Master Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Combat Master Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@combatmasterhacks.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Combat Master Hacks Rules',
		description:
			'Terms of use for combatmasterhacks.com and Combat Master Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of combatmasterhacks.com and Combat Master Hacks licenses for Combat Master on Windows PC.',
		imageAlt: "Combat Master Hacks terms of use page",
		galleryTitle: 'Combat Master Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Combat Master Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Combat Master on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Combat Master may violate Battlestate Games terms and result in account penalties. Combat Master Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/combat-master-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@combatmasterhacks.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
