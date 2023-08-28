import { sidebar } from "docs-shared";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guide",
      icon: "lightbulb",
      prefix: "guide/",
      children: [
        "",
        "container",
        "tabs",
        "code-tabs",
        "sup-sub",
        "align",
        "attrs",
        "footnote",
        "mark",
        "tasklist",
        "image",
        "include",
        "card",
        "chart",
        "echarts",
        "flowchart",
        "mermaid",
        "tex",
        "playground",
        "vue-playground",
        {
          text: "Code Demo",
          icon: "laptop-code",
          prefix: "demo/",
          collapsible: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "Presentation",
          icon: "person-chalkboard",
          prefix: "presentation/",
          collapsible: true,
          children: ["", "demo", "themes"],
        },
        "stylize",
        "sandpack",
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
    "attrs",
    "footnote",
    "mark",
    "tasklist",
    "image",
    "include",
    "card",
    "chart",
    "echarts",
    "flowchart",
    "mermaid",
    "tex",
    "playground",
    "vue-playground",
    {
      text: "Code Demo",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "Presentation",
      icon: "person-chalkboard",
      prefix: "presentation/",
      collapsible: true,
      children: ["", "demo", "themes"],
    },
    "stylize",
    "sandpack",
    "others",
  ],
});

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "guide/",
      children: [
        "",
        "container",
        "tabs",
        "code-tabs",
        "sup-sub",
        "align",
        "attrs",
        "footnote",
        "mark",
        "tasklist",
        "image",
        "include",
        "card",
        "chart",
        "echarts",
        "flowchart",
        "mermaid",
        "tex",
        "playground",
        "vue-playground",
        {
          text: "代码演示",
          icon: "laptop-code",
          prefix: "demo/",
          collapsible: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "幻灯片",
          icon: "person-chalkboard",
          prefix: "presentation/",
          collapsible: true,
          children: ["", "demo", "themes"],
        },
        "stylize",
        "sandpack",
        "others",
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
    "attrs",
    "footnote",
    "mark",
    "tasklist",
    "image",
    "include",
    "card",
    "chart",
    "echarts",
    "flowchart",
    "mermaid",
    "tex",
    "playground",
    "vue-playground",
    {
      text: "代码演示",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      prefix: "presentation/",
      collapsible: true,
      children: ["", "demo", "themes"],
    },
    "stylize",
    "others",
  ],
});
