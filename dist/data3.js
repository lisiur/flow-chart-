System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", [{
                    "id": "1358268253339712",
                    "label": "开始",
                    "children": ["1358268253339744"],
                    "text": "开始",
                    "y": 89,
                    "x": 306,
                    "originData": {}
                }, {
                    "id": "1358268253339744",
                    "label": "门店下单",
                    "children": ["1358268253340512"],
                    "text": "节点",
                    "y": 180,
                    "x": 306,
                    "originData": {
                        "nodeId": "1358268253339744",
                        "nodeType": 1,
                        "assignee": "1265984268163915778",
                        "assignee_label": "审批测试",
                        "taskId": "1360100876877920",
                        "claimTime": "2020-07-20 15:50:38",
                        "completeTime": "2020-07-20 15:50:43",
                        "expirationTime": "2020-07-20 15:50:35",
                        "taskState": "CLOSE",
                        "groupId": 1360100876877888,
                        "type": 1,
                        "userId": "1265984268163915778",
                        "userId_label": "审批测试"
                    }
                }, {
                    "id": "1358268253340512",
                    "label": "+",
                    "children": ["1358268253340000", "1358268253339776"],
                    "text": "并行网关",
                    "y": 269,
                    "x": 307,
                    "originData": {}
                }, {
                    "id": "1358268253339776",
                    "label": "分配监理",
                    "children": ["1358268253339808"],
                    "text": "节点",
                    "y": 358,
                    "x": 177.5,
                    "originData": {
                        "nodeId": "1358268253339776",
                        "nodeType": 0,
                        "assignee": "1279658921258123264",
                        "assignee_label": "高万金",
                        "taskId": "1360101185159296",
                        "claimTime": "2020-07-20 15:53:04",
                        "completeTime": "2020-07-20 16:26:21",
                        "expirationTime": "2020-07-22 15:53:03",
                        "taskState": "CLOSE",
                        "groupId": 1360101185159264,
                        "type": 1,
                        "userId": "1279658921258123264",
                        "userId_label": "高万金"
                    }
                }, {
                    "id": "1358268253340000",
                    "label": "项目启动",
                    "children": ["1358268253340544"],
                    "text": "节点",
                    "y": 358,
                    "x": 426,
                    "originData": {
                        "nodeId": "1358268253340000",
                        "nodeType": 0,
                        "assignee": "1265984268163915778",
                        "assignee_label": "审批测试",
                        "taskId": "1360101185159200",
                        "claimTime": "2020-07-20 15:53:04",
                        "completeTime": "2020-07-20 15:59:11",
                        "expirationTime": "2020-07-20 15:53:03",
                        "taskState": "CLOSE",
                        "groupId": 1360101183062048,
                        "type": 1,
                        "userId": "1265984268163915778",
                        "userId_label": "审批测试"
                    }
                }, {
                    "id": "1358268253340544",
                    "label": "+",
                    "children": ["1358268253340576", "1358268253340032"],
                    "text": "并行网关",
                    "y": 436,
                    "x": 426.5,
                    "originData": {}
                }, {
                    "id": "1358268253339808",
                    "label": "施工派案",
                    "children": ["1358268253339840"],
                    "text": "节点",
                    "y": 530,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339808",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105377366048",
                        "claimTime": "2020-07-20 16:26:23",
                        "completeTime": "2020-07-20 16:27:17",
                        "expirationTime": "2020-07-30 16:26:21",
                        "taskState": "CLOSE",
                        "groupId": 1360105375268896,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340032",
                    "label": "分配主设计师",
                    "children": ["1358268253340576"],
                    "text": "节点",
                    "y": 530.5,
                    "x": 386,
                    "originData": {
                        "nodeId": "1358268253340032",
                        "nodeType": 0,
                        "assignee": "1279659126502195201",
                        "assignee_label": "庄静",
                        "taskId": "1360101954814048",
                        "claimTime": "2020-07-20 15:59:11",
                        "completeTime": "2020-07-20 15:59:45",
                        "expirationTime": "2020-07-20 18:02:30",
                        "taskState": "CLOSE",
                        "groupId": 1360101954814016,
                        "type": 1,
                        "userId": "1279659126502195201",
                        "userId_label": "庄静"
                    }
                }, {
                    "id": "1358268253340576",
                    "label": "O",
                    "children": ["1358268253340064"],
                    "text": "合并网关",
                    "y": 632,
                    "x": 426,
                    "originData": {}
                }, {
                    "id": "1358268253339840",
                    "label": "开工大会",
                    "children": ["1358268253339872"],
                    "text": "节点",
                    "y": 692,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339840",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105494806592",
                        "claimTime": "2020-07-20 16:27:20",
                        "completeTime": "2020-07-20 16:27:52",
                        "expirationTime": "2020-07-21 16:27:17",
                        "taskState": "CLOSE",
                        "groupId": 1360105494806560,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340064",
                    "label": "项目启动审批",
                    "children": ["1358268253340096"],
                    "text": "节点",
                    "y": 715,
                    "x": 425,
                    "originData": {
                        "nodeId": "1358268253340064",
                        "nodeType": 1,
                        "assignee": "1279659126502195201",
                        "assignee_label": "庄静",
                        "taskId": "1360102024020032",
                        "claimTime": "2020-07-20 15:59:45",
                        "completeTime": "2020-07-20 15:59:48",
                        "expirationTime": "2020-07-20 15:59:44",
                        "taskState": "CLOSE",
                        "groupId": 1360102024020000,
                        "type": 3,
                        "userId": 110,
                        "userId_label": "系统发起"
                    }
                }, {
                    "id": "1358268253340096",
                    "label": "图纸派案",
                    "children": ["1358268253340640"],
                    "text": "节点",
                    "y": 826.5,
                    "x": 425,
                    "originData": {
                        "nodeId": "1358268253340096",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360102579765312",
                        "claimTime": "2020-07-20 16:04:10",
                        "completeTime": "2020-07-20 16:04:49",
                        "expirationTime": "2020-07-20 18:07:29",
                        "taskState": "CLOSE",
                        "groupId": 1360102579765280,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253339872",
                    "label": "基础工程",
                    "children": ["1358268253339904"],
                    "text": "节点",
                    "y": 854.5,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339872",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105561915456",
                        "claimTime": "2020-07-20 16:27:52",
                        "completeTime": "2020-07-20 16:28:14",
                        "expirationTime": "2020-08-11 16:27:51",
                        "taskState": "CLOSE",
                        "groupId": 1360105561915424,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340640",
                    "label": "平面图设计",
                    "children": ["1358268253340608"],
                    "text": "节点",
                    "y": 936.5,
                    "x": 428,
                    "originData": {
                        "nodeId": "1358268253340640",
                        "nodeType": 1,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360102663651392",
                        "claimTime": "2020-07-20 16:04:50",
                        "completeTime": "2020-07-20 16:05:36",
                        "expirationTime": "2020-07-21 15:00:00",
                        "taskState": "CLOSE",
                        "groupId": 1360102663651360,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253339904",
                    "label": "隐蔽验收",
                    "children": ["1358268253339936"],
                    "text": "节点",
                    "y": 1017.5,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339904",
                        "nodeType": 1,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105610149952",
                        "claimTime": "2020-07-20 16:28:14",
                        "completeTime": "2020-07-20 16:28:38",
                        "expirationTime": "2020-07-21 16:28:14",
                        "taskState": "CLOSE",
                        "groupId": 1360105610149920,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340608",
                    "label": "+",
                    "children": ["1358268253340128", "1358268253340672"],
                    "text": "并行网关",
                    "y": 1021.5,
                    "x": 426,
                    "originData": {}
                }, {
                    "id": "1358268253340672",
                    "label": "+",
                    "children": ["1358268253340224", "1358268253340256"],
                    "text": "并行网关",
                    "y": 1082,
                    "x": 497.5,
                    "originData": {}
                }, {
                    "id": "1358268253340128",
                    "label": "施工图设计",
                    "children": ["1358268253340160"],
                    "text": "节点",
                    "y": 1123,
                    "x": 326,
                    "originData": {
                        "nodeId": "1358268253340128",
                        "nodeType": 1,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360102965641472",
                        "claimTime": "2020-07-20 16:07:13",
                        "completeTime": "2020-07-20 16:07:43",
                        "expirationTime": "2020-07-23 16:07:12",
                        "taskState": "CLOSE",
                        "groupId": 1360102965641440,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253339936",
                    "label": "安装工程",
                    "children": ["1358268253339968"],
                    "text": "节点",
                    "y": 1184,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339936",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105696133184",
                        "claimTime": "2020-07-20 16:28:55",
                        "completeTime": "2020-07-20 16:29:16",
                        "expirationTime": "2020-08-04 16:28:55",
                        "taskState": "CLOSE",
                        "groupId": 1360105696133152,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340224",
                    "label": "效果图设计",
                    "children": ["1358268253340704"],
                    "text": "节点",
                    "y": 1184,
                    "x": 457.5,
                    "originData": {
                        "nodeId": "1358268253340224",
                        "nodeType": 0,
                        "assignee": "1279659230734843905",
                        "assignee_label": "朱晓伟",
                        "taskId": "1360102965641376",
                        "claimTime": "2020-07-20 16:07:13",
                        "completeTime": "2020-07-20 16:08:34",
                        "expirationTime": "2020-07-23 16:07:12",
                        "taskState": "CLOSE",
                        "groupId": 1360102965641344,
                        "type": 1,
                        "userId": "1279659230734843905",
                        "userId_label": "朱晓伟"
                    }
                }, {
                    "id": "1358268253340256",
                    "label": "产品配置",
                    "children": ["1358268253340704"],
                    "text": "节点",
                    "y": 1184,
                    "x": 538.5,
                    "originData": {
                        "nodeId": "1358268253340256",
                        "nodeType": 0,
                        "assignee": "1279659053693272064",
                        "assignee_label": "朱洋洋",
                        "taskId": "1360102965641280",
                        "claimTime": "2020-07-20 16:07:13",
                        "completeTime": "2020-07-20 16:09:10",
                        "expirationTime": "2020-07-23 16:07:12",
                        "taskState": "CLOSE",
                        "groupId": 1360102965641248,
                        "type": 1,
                        "userId": "1279659053693272064",
                        "userId_label": "朱洋洋"
                    }
                }, {
                    "id": "1358268253340160",
                    "label": "平面图信息填写",
                    "children": [],
                    "text": "节点",
                    "y": 1264,
                    "x": 323.5,
                    "originData": {
                        "nodeId": "1358268253340160",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360103586398272",
                        "claimTime": "2020-07-20 16:12:10",
                        "completeTime": "2020-07-20 16:15:45",
                        "expirationTime": "2020-07-27 16:12:09",
                        "taskState": "CLOSE",
                        "groupId": 1360103586398240,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340704",
                    "label": "O",
                    "children": ["1358268253340448"],
                    "text": "合并网关",
                    "y": 1284,
                    "x": 498,
                    "originData": {}
                }, {
                    "id": "1358268253339968",
                    "label": "竣工验收",
                    "children": ["1358268253340768"],
                    "text": "节点",
                    "y": 1346.5,
                    "x": 176,
                    "originData": {
                        "nodeId": "1358268253339968",
                        "nodeType": 1,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105740173376",
                        "claimTime": "2020-07-20 16:29:16",
                        "completeTime": "2020-07-20 16:29:33",
                        "expirationTime": "2020-07-21 16:29:16",
                        "taskState": "CLOSE",
                        "groupId": 1360105740173344,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340448",
                    "label": "软装设计",
                    "children": ["1358268253340800"],
                    "text": "节点",
                    "y": 1368,
                    "x": 496.5,
                    "originData": {
                        "nodeId": "1358268253340448",
                        "nodeType": 0,
                        "assignee": "1279659598441086977",
                        "assignee_label": "陈拓",
                        "taskId": "1360103211008064",
                        "claimTime": "2020-07-20 16:09:11",
                        "completeTime": "2020-07-20 16:10:05",
                        "expirationTime": "2020-07-29 16:09:10",
                        "taskState": "CLOSE",
                        "groupId": 1360103211008032,
                        "type": 1,
                        "userId": "1279659598441086977",
                        "userId_label": "陈拓"
                    }
                }, {
                    "id": "1358268253340768",
                    "label": "+",
                    "children": ["1358268253340800", "1358268253340864"],
                    "text": "并行网关",
                    "y": 1444.5,
                    "x": 173,
                    "originData": {}
                }, {
                    "id": "1358268253340864",
                    "label": "+",
                    "children": ["1358268253340288", "1358268253340320"],
                    "text": "并行网关",
                    "y": 1518.5,
                    "x": 133,
                    "originData": {}
                }, {
                    "id": "1358268253340800",
                    "label": "O",
                    "children": ["1358268253340352"],
                    "text": "合并网关",
                    "y": 1519,
                    "x": 304.5,
                    "originData": {}
                }, {
                    "id": "1358268253340288",
                    "label": "工程移交",
                    "children": [],
                    "text": "节点",
                    "y": 1620,
                    "x": 111.5,
                    "originData": {
                        "nodeId": "1358268253340288",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105807282240",
                        "claimTime": "2020-07-20 16:29:48",
                        "completeTime": "2020-07-20 16:30:14",
                        "expirationTime": "2020-08-31 16:29:47",
                        "taskState": "CLOSE",
                        "groupId": 1360105807282208,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340320",
                    "label": "成本决算",
                    "children": [],
                    "text": "节点",
                    "y": 1620,
                    "x": 153.5,
                    "originData": {
                        "nodeId": "1358268253340320",
                        "nodeType": 0,
                        "assignee": "1279659126506389504",
                        "assignee_label": "丘思",
                        "taskId": "1360105807282336",
                        "claimTime": "2020-07-20 16:29:48",
                        "completeTime": "2020-07-20 16:30:29",
                        "expirationTime": "2020-08-03 16:29:47",
                        "taskState": "CLOSE",
                        "groupId": 1360105807282304,
                        "type": 1,
                        "userId": "1279659126506389504",
                        "userId_label": "丘思"
                    }
                }, {
                    "id": "1358268253340352",
                    "label": "陈列验收",
                    "children": ["1358268253340384"],
                    "text": "节点",
                    "y": 1620,
                    "x": 305.5,
                    "originData": {
                        "nodeId": "1358268253340352",
                        "nodeType": 0,
                        "assignee": "1279659598441086977",
                        "assignee_label": "陈拓",
                        "taskId": "1360105807282432",
                        "claimTime": "2020-07-20 16:29:48",
                        "completeTime": "2020-07-20 16:31:37",
                        "expirationTime": "2020-07-24 16:29:47",
                        "taskState": "CLOSE",
                        "groupId": 1360105807282400,
                        "type": 3,
                        "userId": "1279659363434233856",
                        "userId_label": "黄妮"
                    }
                }, {
                    "id": "1358268253340384",
                    "label": "门店开业",
                    "children": ["1358268253340416"],
                    "text": "节点",
                    "y": 1733,
                    "x": 305.5,
                    "originData": {
                        "nodeId": "1358268253340384",
                        "nodeType": 1,
                        "assignee": "1265984268163915778",
                        "assignee_label": "审批测试",
                        "taskId": "1360106035871776",
                        "claimTime": "2020-07-20 16:31:37",
                        "completeTime": "2020-07-20 16:44:02",
                        "expirationTime": "2020-08-31 16:31:36",
                        "taskState": "IN_APPROVAL",
                        "groupId": 1360106033774624,
                        "type": 1,
                        "userId": "1265984268163915778",
                        "userId_label": "审批测试"
                    }
                }, {
                    "id": "1358268253340416",
                    "label": "结束",
                    "children": [],
                    "text": "结束",
                    "y": 1817,
                    "x": 304,
                    "originData": {}
                }]);
        }
    };
});
//# sourceMappingURL=data3.js.map