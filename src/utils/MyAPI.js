// 综合感知
// 1、设备管理
[
  {
    "name": "设备名称",
    "info": "设备信息",
    "location": "设备位置",
    "type": "类型",
    "status": "状态"
  }
]
// 2、流量计库存
[
  {
    "name": "流量计名称",
    "info": "流量计信息",
    "location": "流量计位置",
    "type": "类型",
    "status": "状态"
  }
]

// 3、检定人员信息
[
  {
    "person": "主检人员",
    "count": "检定次数",
    "date": "上岗日期"
  }
]

// 智能检定
// 1、信号检测
[
  {
    "label": "OPC时间",
    "value": "20:10:19",
    "type": ""
  },
  {
    "label": "网络时间",
    "value": "20:10:19",
    "type": ""
  },
  {
    "label": "最大检定",
    "value": "4500",
    "type": ""
  },
  {
    "label": "当前气路",
    "value": "干线气路",
    "type": ""
  },
  {
    "label": "进站压力",
    "value": "6.31",
    "type": ""
  },
  {
    "label": "出战压力",
    "value": "6.09",
    "type": ""
  },
  {
    "label": "控制权限",
    "value": "1",
    "type": ""
  },
  {
    "label": "检定指令",
    "value": "1",
    "type": ""
  },
  {
    "label": "压降速率",
    "value": "-0.003",
    "type": ""
  },
  {
    "label": "最小检定",
    "value": "50",
    "type": ""
  },
  {
    "label": "当前检定",
    "value": "900",
    "type": ""
  },
  {
    "label": "最大检定",
    "value": "4500",
    "type": ""
  },
  {
    "label": "工作台位",
    "value": "00010000",
    "type": ""
  },
  {
    "label": "被检台位",
    "value": "250",
    "type": ""
  },
  {
    "label": "核查表号",
    "value": "FT4103",
    "type": "台位线"
  },
  {
    "label": "核查流量",
    "value": "754.54",
    "type": "台位线"
  },
  {
    "label": "工作级状态",
    "value": "00011000",
    "type": "台位线"
  },
  {
    "label": "检定口径",
    "value": "250",
    "type": "台位线"
  },
  {
    "label": "FV7212",
    "value": "29.56",
    "type": "调流阀线"
  },
  {
    "label": "FV7222",
    "value": "22.54",
    "type": "调流阀线"
  },
  {
    "label": "FV7232",
    "value": "12.54",
    "type": "调流阀线"
  },
  {
    "label": "FV7242",
    "value": "89.86",
    "type": "旁通线"
  },
  {
    "label": "FV005",
    "value": "100.5",
    "type": "旁通线"
  },
  {
    "label": "FV7242计算",
    "value": "2324.45",
    "type": "旁通线"
  },
  {
    "label": "FV1005计算",
    "value": "4545.65",
    "type": "旁通线"
  },
  {
    "label": "FV7212",
    "value": "29.56",
    "type": "计算线"
  },
  {
    "label": "FV7222",
    "value": "343.54",
    "type": "计算线"
  },
  {
    "label": "FV7232",
    "value": "385.69",
    "type": "计算线"
  },
  {
    "label": "FV7242",
    "value": "2324.45",
    "type": "计算线"
  }
]

// 2、调节阀开度(需要300秒的数据,每个对象3-10个数据，轮询时间间隔1s)
[
  {
    "data1": "10",
    "data2": "10",
    "data3": "10",
    "time": "10:10:11"
  }
]

// 3、流量值(需要60秒的数据,每个对象2-9个数据，轮询时间间隔1s)
[
  {
    "data1": "10",
    "data2": "10",
    "time": "10:10:11"
  }
]

// 4、进出站压力值(需要600秒的数据,每个对象1-2个数据，轮询时间间隔5s)
[
  {
    "data1": "10",
    "time": "10:10:11"
  }
]

// 5、右上角按钮和流程
{
  "btn1": "1",    // 开始检定 0：可以点，1：正在加载中，2：不可以点 
  "btn2": "1",    // 压变校准 同上 
  "btn3": "1",    // 停止控制 同上 
  "btn4": "1",    // 开度计算 同上 
  "process": "3", // 当前流程 0：监听中，1：检查中，2：提前调流中，3：管路导通中，4：模型调节中，5：流量整定中，6：流量保稳中
  "curtime": "8:25", // 当前进度 记录用时
  "expecttime": "28:00" // 预计时间
}

// 安全管理
// 1、设备维护
[
  {
    "no": "设备编号",
    "situation": "处理情况",
    "time": "提示时间"
  }
]

// 2、设备告警信息
[
  {
    "time": "告警时间",
    "content": "告警内容",
    "situation": "处理情况"
  }
]

// 3、左上角数字
{
  "warn": 10, // 告警事件
  "maintain": 22, // 维护事件
  "unhandled": 11 // 未处理事件（主要是这个）
}