const navMap = {
  Home: [
    {
      name: "全部",
      path: "/home",
    },
  ],
  Equipment: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
  ],
  Management: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
    {
      name: "设备管理",
      path: "/home/equipment/management",
    },
  ],
  CPE: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
    {
      name: "设备管理",
      path: "/home/equipment/management",
    },
    {
      name: "CPE设备",
      path: "/home/equipment/management/cpe",
    },
  ],
  Hub: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
    {
      name: "设备管理",
      path: "/home/equipment/management",
    },
    {
      name: "Hub设备",
      path: "/home/equipment/management/hub",
    },
  ],
  Switch: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
    {
      name: "设备管理",
      path: "/home/equipment/management",
    },
    {
      name: "交换机设备",
      path: "/home/equipment/management/switch",
    },
  ],
  Robot: [
    {
      name: "全部",
      path: "/home",
    },
    {
      name: "工业设备",
      path: "/home/equipment",
    },
    {
      name: "设备管理",
      path: "/home/equipment/management",
    },
    {
      name: "机器人设备",
      path: "/home/equipment/management/robot",
    },
  ],
};

const columnMap = {
  Home: [
    {
      id: "equipment",
      title: "工业设备",
      subTitle: "全部",
      prev: [],
      children: [
        "management",
        "cpe",
        "camera",
        "wifi",
        "hub",
        "usb",
        "ethernet",
        "switch",
        "two",
        "three",
        "four",
        "robot",
        "arm",
        "leg",
      ],
    },
  ],
  Equipment: [
    {
      id: "management",
      title: "设备管理",
      subTitle: "全部 - 工业设备",
      prev: ["equipment"],
      children: [
        "cpe",
        "camera",
        "wifi",
        "hub",
        "usb",
        "ethernet",
        "switch",
        "two",
        "three",
        "four",
        "robot",
        "arm",
        "leg",
      ],
    },
  ],
  Management: [
    {
      id: "cpe",
      title: "CPE设备",
      subTitle: "全部 - 工业设备 - 设备管理",
      prev: ["equipment", "management"],
      children: ["camera", "wifi"],
    },
    {
      id: "hub",
      title: "Hub设备",
      subTitle: "全部 - 工业设备 - 设备管理",
      prev: ["equipment", "management"],
      children: ["usb", "ethernet"],
    },
    {
      id: "switch",
      title: "交换机设备",
      subTitle: "全部 - 工业设备 - 设备管理",
      prev: ["equipment", "management"],
      children: ["two", "three", "four"],
    },
    {
      id: "robot",
      title: "机器人设备",
      subTitle: "全部 - 工业设备 - 设备管理",
      prev: ["equipment", "management"],
      children: ["arm", "leg"],
    },
  ],
  CPE: [
    {
      id: "camera",
      title: "摄像头",
      prev: ["equipment", "management", "cpe"],
      subTitle: "全部 - 工业设备 - 设备管理 - CPE设备",
      children: [],
    },
    {
      id: "wifi",
      title: "WiFi",
      prev: ["equipment", "management", "cpe"],
      subTitle: "全部 - 工业设备 - 设备管理 - CPE设备",
      children: [],
    },
  ],
  Hub: [
    {
      id: "usb",
      title: "USB Hub",
      prev: ["equipment", "management", "hub"],
      subTitle: "全部 - 工业设备 - 设备管理 - Hub设备",
      children: [],
    },
    {
      id: "ethernet",
      title: "Ethernet Hub",
      prev: ["equipment", "management", "hub"],
      subTitle: "全部 - 工业设备 - 设备管理 - Hub设备",
      children: [],
    },
  ],
  Switch: [
    {
      id: "two",
      title: "二层交换机",
      prev: ["equipment", "management", "switch"],
      subTitle: "全部 - 工业设备 - 设备管理 - 交换机设备",
      children: [],
    },
    {
      id: "three",
      title: "三层交换机",
      prev: ["equipment", "management", "switch"],
      subTitle: "全部 - 工业设备 - 设备管理 - 交换机设备",
      children: [],
    },
    {
      id: "four",
      title: "四层交换机",
      prev: ["equipment", "management", "switch"],
      subTitle: "全部 - 工业设备 - 设备管理 - 交换机设备",
      children: [],
    },
  ],
  Robot: [
    {
      id: "arm",
      title: "机械臂",
      prev: ["equipment", "management", "robot"],
      subTitle: "全部 - 工业设备 - 设备管理 - 机器人设备",
      children: [],
    },
    {
      id: "leg",
      title: "腿式机器人",
      prev: ["equipment", "management", "robot"],
      subTitle: "全部 - 工业设备 - 设备管理 - 机器人设备",
      children: [],
    },
  ],
};

const names = [
  "Home",
  "Equipment",
  "Management",
  "CPE",
  "Hub",
  "Switch",
  "Robot",
];

module.exports = [
  {
    path: "/list/columns",
    methods: "GET",
    data: {
      code: "0",
      data: {
        idx: ~~(Math.random() * names.length),
        list: columnMap[`${names[~~(Math.random() * names.length)]}`],
      },
      msg: "成功",
      success: true,
    },
  },
  {
    path: "/list/nav",
    methods: "GET",
    data: {
      code: "0",
      data: {
        idx: ~~(Math.random() * names.length),
        nav: navMap[`${names[~~(Math.random() * names.length)]}`],
      },
      msg: "成功",
      success: true,
    },
  },
  {
    path: "/list/search",
    methods: "POST",
    data: {
      code: "0",
      data: {
        list: Object.values(columnMap).flat().filter(f => f.title.indexOf([`${names[~~(Math.random() * names.length)]}`]) != -1),
      },
      msg: "成功",
      success: true,
    },
  },
];
