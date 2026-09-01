import type { PageId } from './i18n/routing';
import {
	cannibalPageIds,
	cannibalRedirectTargets,
	getCannibalTargetId,
	isCannibalPageId,
	type CannibalPageId,
} from './seo-cannibal-map';

export {
	cannibalPageIds,
	cannibalRedirectTargets,
	isCannibalPageId,
	type CannibalPageId,
};

export const sitemapExcludedPageIds = new Set<PageId>(cannibalPageIds as PageId[]);

/** Primary commercial landing for the head term "combat master hacks". */
export const MONEY_PAGE_ID = 'hacks' as const satisfies PageId;
export const MONEY_PATH = '/combat-master-hacks/' as const;

export function getCannibalTarget(pageId: PageId): PageId {
	return getCannibalTargetId(pageId) as PageId;
}
