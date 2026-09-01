import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'combat master hacks',
		title: 'combat master hacks gallery',
		subtitle: 'Simple combat master hacks visuals — ESP, wallhack, aimbot, and radar for Combat Master on PC.',
		lead: 'Combat Master Hacks helps you spot enemy players, enemy players, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'combat master hacks esp', copy: 'See players through walls with combat master hacks esp and wallhack overlays.' },
			{ title: 'combat master hacks radar', copy: 'Track nearby threats with combat master hacks radar before you push or extract.' },
			{ title: 'combat master hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Combat Master matchs on Windows PC.' },
		],
		updatesLabel: 'combat master hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galería Combat Master',
		subtitle: 'Visuales de Combat Master con loadouts, peleas de escuadrón y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Combat Master Hacks está pensado para el loop BR de Combat Master: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Combat Master', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Combat Master Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galerie Combat Master',
		subtitle: 'Visuels Combat Master — loadouts, combats d\'escouade et match — avec ESP, radar et Aimbot.',
		lead: 'Combat Master Hacks suit la boucle BR de Combat Master : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Combat Master', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Combat Master Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master Galerie',
		subtitle: 'Combat Master-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Combat Master Hacks passt zur Raid-Schleife von Combat Master: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Combat Master Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Combat Master Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galeria Combat Master',
		subtitle: 'Visuais de Combat Master com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Combat Master Hacks segue o loop BR do Combat Master: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Combat Master', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Combat Master Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galleria Combat Master',
		subtitle: 'Immagini Combat Master — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Combat Master Hacks è pensato per il loop BR di Combat Master: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Combat Master', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Combat Master Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master galerij',
		subtitle: 'Combat Master-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Combat Master Hacks volgt de match-loop van Combat Master: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Combat Master Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Combat Master Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galeria Combat Master',
		subtitle: 'Grafiki Combat Master — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Combat Master Hacks pasuje do pętli BR Combat Master: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Combat Master', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Combat Master Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Combat Master Hacks',
		title: 'Галерея Combat Master',
		subtitle: 'Визуалы Combat Master — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Combat Master Hacks создан для рейд-циклу Combat Master: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Combat Master', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Combat Master Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Combat Master Hacks, Combat Master BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Combat Master Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Combat Master Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Combat Master Hacks',
		title: 'معرض Combat Master',
		subtitle: 'صور Combat Master — loadouts ومعارك الفرق وmatch — مع ESP ورادار وAimbot.',
		lead: 'Combat Master Hacks مبني لحلقة BR في Combat Master: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Combat Master', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Combat Master Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのCombat Masterビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Combat Master HacksはCombat MasterのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Combat Masterエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Combat Master Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Combat Master 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Combat Master Hacks는 Combat Master BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Combat Master 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Combat Master Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master 图库',
		subtitle: 'Combat Master 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Combat Master Hacks 为 Combat Master BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Combat Master 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Combat Master Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master गैलरी',
		subtitle: 'Loadout, squad fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Combat Master Hacks Combat Master BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Combat Master Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Combat Master Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galeri Combat Master',
		subtitle: 'Visual Combat Master — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Combat Master Hacks untuk loop BR Combat Master: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Combat Master', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Combat Master Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Combat Master Hacks',
		title: 'แกลเลอรี Combat Master',
		subtitle: 'ภาพ Combat Master — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Combat Master Hacks สำหรับลูป BR ของ Combat Master: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Combat Master', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Combat Master Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Combat Master Hacks',
		title: 'Thư viện Combat Master',
		subtitle: 'Hình ảnh Combat Master — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Combat Master Hacks cho vòng BR Combat Master: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Combat Master', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Combat Master Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Combat Master Hacks',
		title: 'Галерея Combat Master',
		subtitle: 'Візуали Combat Master — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Combat Master Hacks для рейд-циклу Combat Master: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Combat Master', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Combat Master Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galerie Combat Master',
		subtitle: 'Combat Master vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Combat Master Hacks pro BR smyčku Combat Master: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Combat Master', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Combat Master Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Combat Master Hacks',
		title: 'Galerie Combat Master',
		subtitle: 'Vizualuri Combat Master — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Combat Master Hacks pentru bucla BR Combat Master: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Combat Master', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Combat Master Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Combat Master Hacks',
		title: 'Combat Master galleri',
		subtitle: 'Combat Master-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Combat Master Hacks för Combat Master:s match-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Combat Master Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Combat Master Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
