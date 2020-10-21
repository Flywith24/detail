module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "category",
      label: "工具篇",
      collapsed: false,
      items: ["tools/config", "tools/run", "tools/signin", "tools/signout"],
    },
    {
      type: "category",
      label: "视图控制",
      collapsed: false,
      items: [
        "job/definition",
        "job/device_assignment",
        "job/arguments",
        "job/scheduling",
        "job/settings",
      ],
    },
    {
      type: "category",
      label: "视图系统",
      collapsed: false,
      items: ["policies/terms", "policies/privacy"],
    },
  ],
};
