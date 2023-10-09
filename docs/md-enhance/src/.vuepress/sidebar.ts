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
        "stylize",
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
    "stylize",
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
        "stylize",
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
    "stylize",
    "others",
  ],
});
