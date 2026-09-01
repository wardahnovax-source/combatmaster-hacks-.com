import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const features = [
	{ titleKey: 'home.aboutFeatPlayer', descKey: 'home.aboutFeatPlayerDesc' },
	{ titleKey: 'home.aboutFeatAimbot', descKey: 'home.aboutFeatAimbotDesc' },
	{ titleKey: 'home.aboutFeatRecoil', descKey: 'home.aboutFeatRecoilDesc' },
	{ titleKey: 'home.aboutFeatKillstreak', descKey: 'home.aboutFeatKillstreakDesc' },
	{ titleKey: 'home.aboutFeatRadar', descKey: 'home.aboutFeatRadarDesc' },
	{ titleKey: 'home.aboutFeatOverlay', descKey: 'home.aboutFeatOverlayDesc' },
] as const;

const quickLinks = [
	{ href: '/combat-master-hacks/', labelKey: 'home.aboutPillar' },
	{ href: '/combat-master-esp/', labelKey: 'home.aboutEsp' },
	{ href: '/combat-master-aimbot/', labelKey: 'home.aboutAimbot' },
	{ href: '/updates/', labelKey: 'home.aboutUndetected' },
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutP1')}</p>
			</header>

			<div className="home-about__grid">
				{features.map((item) => (
					<article key={item.titleKey} className="home-about__card">
						<h3>{t(item.titleKey)}</h3>
						<p>{t(item.descKey)}</p>
					</article>
				))}
			</div>

			<nav className="home-about__links" aria-label={t('home.aboutLinksTitle')}>
				<header className="home-about__links-head">
					<h3>{t('home.aboutLinksTitle')}</h3>
					<p>{t('home.aboutLinksHint')}</p>
				</header>
				<ul>
					{quickLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href}>
								<span>{t(link.labelKey)}</span>
								<span className="home-about__arrow" aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
