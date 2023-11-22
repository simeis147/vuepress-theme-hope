import {
  VPLink,
  usePageData,
  usePagesMap,
  usePageFrontmatter,
  useRouteLocale,
} from "@vuepress/client";
import type { VNode } from "vue";
import {
  computed,
  defineComponent,
  h,
  onMounted,
  shallowRef,
  watch,
} from "vue";
import { entries } from "vuepress-shared/client";

import HopeIcon from "@theme-hope/components/HopeIcon";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { getAncestorLinks } from "@theme-hope/utils/index";

import type { ThemeNormalPageFrontmatter } from "../../shared/index.js";
import { ArticleInfoType } from "../../shared/index.js";

import "../styles/breadcrumb.scss";

interface BreadCrumbConfig {
  title: string;
  icon?: string | undefined;
  path: string;
}

export default defineComponent({
  name: "BreadCrumb",

  setup() {
    const page = usePageData();
    const pagesMap = usePagesMap();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter<ThemeNormalPageFrontmatter>();
    const themeLocale = useThemeLocaleData();

    const config = shallowRef<BreadCrumbConfig[]>([]);

    const enable = computed(
      () =>
        (frontmatter.value.breadcrumb ||
          (frontmatter.value.breadcrumb !== false &&
            themeLocale.value.breadcrumb !== false)) &&
        config.value.length > 1,
    );

    const iconEnable = computed(
      () =>
        frontmatter.value.breadcrumbIcon ||
        (frontmatter.value.breadcrumbIcon !== false &&
          themeLocale.value.breadcrumbIcon !== false),
    );

    const getBreadCrumbConfig = (): void => {
      const breadcrumbConfig = getAncestorLinks(
        page.value.path,
        routeLocale.value,
      )
        .map<BreadCrumbConfig | null>(({ link, name }) => {
          const info = pagesMap.value.get(link);

          if (info)
            return {
              title:
                info.meta[ArticleInfoType.shortTitle] ||
                info.meta[ArticleInfoType.title] ||
                name,
              icon: info.meta[ArticleInfoType.icon],
              path: link,
            };

          return null;
        })
        .filter((item): item is BreadCrumbConfig => item !== null);

      if (breadcrumbConfig.length > 1) config.value = breadcrumbConfig;
    };

    onMounted(() => {
      watch(() => page.value.path, getBreadCrumbConfig, { immediate: true });
    });

    return (): VNode =>
      h(
        "nav",
        { class: ["vp-breadcrumb", { disable: !enable.value }] },
        enable.value
          ? h(
              "ol",
              {
                vocab: "https://schema.org/",
                typeof: "BreadcrumbList",
              },
              config.value.map((item, index) =>
                h(
                  "li",
                  {
                    class: { "is-active": config.value.length - 1 === index },
                    property: "itemListElement",
                    typeof: "ListItem",
                  },
                  [
                    h(
                      VPLink,
                      {
                        to: item.path,
                        property: "item",
                        typeof: "WebPage",
                      },
                      () => [
                        // icon
                        iconEnable.value
                          ? h(HopeIcon, { icon: item.icon })
                          : null,
                        // text
                        h(
                          "span",
                          { property: "name" },
                          item.title || "Unknown",
                        ),
                      ],
                    ),
                    // meta
                    h("meta", { property: "position", content: index + 1 }),
                  ],
                ),
              ),
            )
          : [],
      );
  },
});
