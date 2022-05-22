import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
  "/": [
    "",
    {
      text: "Guide",
      icon: "creative",
      prefix: "guide/",
      children: [
        "",
        "container",
        "tabs",
        "code-tabs",
        "sup-sub",
        "align",
        "footnote",
        "mark",
        "tasklist",
        "include",
        "chart",
        "echarts",
        "flowchart",
        "mermaid",
        "tex",
        {
          text: "Code Demo",
          icon: "discover",
          prefix: "demo/",
          collapsable: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "Presentation",
          icon: "slides",
          prefix: "presentation/",
          collapsable: true,
          children: ["", "demo", "themes"],
        },
        "others",
      ],
    },
    "config",
    "migration",
    "demo",
  ],

  "/guide/": [
    "",
    "container",
    "tabs",
    "code-tabs",
    "sup-sub",
    "align",
    "footnote",
    "mark",
    "tasklist",
    "include",
    "chart",
    "echarts",
    "flowchart",
    "mermaid",
    "tex",
    {
      text: "Code Demo",
      icon: "discover",
      prefix: "demo/",
      collapsable: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "Presentation",
      icon: "slides",
      prefix: "presentation/",
      collapsable: true,
      children: ["", "demo", "themes"],
    },
  ],
});

export const zhSidebarConfig = sidebar({
  "/zh/": [
    "",
    {
      text: "指南",
      icon: "creative",
      prefix: "guide/",
      children: [
        "",
        "container",
        "tabs",
        "code-tabs",
        "sup-sub",
        "align",
        "footnote",
        "mark",
        "tasklist",
        "include",
        "chart",
        "echarts",
        "flowchart",
        "mermaid",
        "tex",
        {
          text: "代码演示",
          icon: "discover",
          prefix: "demo/",
          collapsable: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "幻灯片",
          icon: "slides",
          prefix: "presentation/",
          collapsable: true,
          children: ["", "demo", "themes"],
        },
      ],
    },
    "config",
    "migration",
    "demo",
  ],

  "/zh/guide/": [
    "",
    "container",
    "tabs",
    "code-tabs",
    "sup-sub",
    "align",
    "footnote",
    "mark",
    "tasklist",
    "include",
    "chart",
    "echarts",
    "flowchart",
    "mermaid",
    "tex",
    {
      text: "代码演示",
      icon: "discover",
      prefix: "demo/",
      collapsable: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "幻灯片",
      icon: "slides",
      prefix: "presentation/",
      collapsable: true,
      children: ["", "demo", "themes"],
    },
    "others",
  ],
});
