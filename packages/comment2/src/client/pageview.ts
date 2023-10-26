import type { WalineAbort, WalinePageviewCountOptions } from "@waline/client";

import type { WalineOptions } from "../shared/index.js";

declare const COMMENT_OPTIONS: WalineOptions;

let pageviewCount: (options: WalinePageviewCountOptions) => WalineAbort;

try {
  ({ pageviewCount } = await import(
    /* webpackChunkName: "pageview" */ "@waline/client/pageview"
  ));
} catch (err) {
  // do nothing
}

export const updatePageview = (): (() => void) =>
  pageviewCount?.({
    serverURL: COMMENT_OPTIONS.serverURL,
  });
