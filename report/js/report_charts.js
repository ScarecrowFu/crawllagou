$(function () {
experience_pie_chart();

                    function experience_pie_chart() {
                        var jobChart = echarts.init(document.getElementById('experience_pie_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5de5\u4f5c\u7ecf\u9a8c",
            "clockwise": true,
            "data": [
                {
                    "name": "\u7ecf\u9a8c3-5\u5e74",
                    "value": "5782"
                },
                {
                    "name": "\u7ecf\u9a8c5-10\u5e74",
                    "value": "3223"
                },
                {
                    "name": "\u7ecf\u9a8c1-3\u5e74",
                    "value": "1789"
                },
                {
                    "name": "\u7ecf\u9a8c\u4e0d\u9650",
                    "value": "670"
                },
                {
                    "name": "\u7ecf\u9a8c\u5e94\u5c4a\u6bd5\u4e1a\u751f",
                    "value": "447"
                },
                {
                    "name": "\u7ecf\u9a8c10\u5e74\u4ee5\u4e0a",
                    "value": "98"
                },
                {
                    "name": "\u7ecf\u9a8c1\u5e74\u4ee5\u4e0b",
                    "value": "65"
                }
            ],
            "radius": "55%",
            "center": [
                "50%",
                "50%"
            ],
            "roseType": "radius",
            "label": {
                "show": true,
                "position": "top",
                "color": "rgba(255, 255, 255, 0.3)",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u7ecf\u9a8c3-5\u5e74",
                "\u7ecf\u9a8c5-10\u5e74",
                "\u7ecf\u9a8c1-3\u5e74",
                "\u7ecf\u9a8c\u4e0d\u9650",
                "\u7ecf\u9a8c\u5e94\u5c4a\u6bd5\u4e1a\u751f",
                "\u7ecf\u9a8c10\u5e74\u4ee5\u4e0a",
                "\u7ecf\u9a8c1\u5e74\u4ee5\u4e0b"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

eduction_pie_chart();

                    function eduction_pie_chart() {
                        var jobChart = echarts.init(document.getElementById('eduction_pie_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "green",
        "yellow",
        "red",
        "pink",
        "orange",
        "purple"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5b66\u5386",
            "clockwise": true,
            "data": [
                {
                    "name": "\u672c\u79d1\u53ca\u4ee5\u4e0a",
                    "value": "9835"
                },
                {
                    "name": "\u5927\u4e13\u53ca\u4ee5\u4e0a",
                    "value": "1422"
                },
                {
                    "name": "\u5b66\u5386\u4e0d\u9650",
                    "value": "690"
                },
                {
                    "name": "\u7855\u58eb\u53ca\u4ee5\u4e0a",
                    "value": "127"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u672c\u79d1\u53ca\u4ee5\u4e0a",
                "\u5927\u4e13\u53ca\u4ee5\u4e0a",
                "\u5b66\u5386\u4e0d\u9650",
                "\u7855\u58eb\u53ca\u4ee5\u4e0a"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

character_pie_chart();

                    function character_pie_chart() {
                        var jobChart = echarts.init(document.getElementById('character_pie_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5c97\u4f4d\u6027\u8d28",
            "clockwise": true,
            "data": [
                {
                    "name": "\u5168\u804c",
                    "value": "11833"
                },
                {
                    "name": "\u5b9e\u4e60",
                    "value": "216"
                },
                {
                    "name": "\u517c\u804c",
                    "value": "25"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u5168\u804c",
                "\u5b9e\u4e60",
                "\u517c\u804c"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

address_pie_chart();

                    function address_pie_chart() {
                        var jobChart = echarts.init(document.getElementById('address_pie_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u62db\u8058\u6570\u524d10\u57ce\u5e02",
            "clockwise": true,
            "data": [
                {
                    "name": "\u5317\u4eac",
                    "value": "2216"
                },
                {
                    "name": "\u4e0a\u6d77",
                    "value": "1965"
                },
                {
                    "name": "\u676d\u5dde",
                    "value": "1787"
                },
                {
                    "name": "\u6df1\u5733",
                    "value": "1478"
                },
                {
                    "name": "\u5e7f\u5dde",
                    "value": "1165"
                },
                {
                    "name": "\u6210\u90fd",
                    "value": "904"
                },
                {
                    "name": "\u5357\u4eac",
                    "value": "665"
                },
                {
                    "name": "\u6b66\u6c49",
                    "value": "486"
                },
                {
                    "name": "\u957f\u6c99",
                    "value": "341"
                },
                {
                    "name": "\u897f\u5b89",
                    "value": "291"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u676d\u5dde",
                "\u6df1\u5733",
                "\u5e7f\u5dde",
                "\u6210\u90fd",
                "\u5357\u4eac",
                "\u6b66\u6c49",
                "\u957f\u6c99",
                "\u897f\u5b89"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

city_experience_chart();

                    function city_experience_chart() {
                        var jobChart = echarts.init(document.getElementById('city_experience_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c1-3\u5e74",
            "legendHoverLink": true,
            "data": [
                "231",
                "220",
                "218",
                "193",
                "247",
                "158",
                "150",
                "83",
                "51"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c10\u5e74\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "26",
                "17",
                "4",
                "14",
                "9",
                "6",
                "4",
                "6",
                "2"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c1\u5e74\u4ee5\u4e0b",
            "legendHoverLink": true,
            "data": [
                "10",
                "10",
                "9",
                "7",
                "7",
                "8",
                "4",
                "3",
                "1"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c3-5\u5e74",
            "legendHoverLink": true,
            "data": [
                "1027",
                "941",
                "932",
                "754",
                "517",
                "447",
                "300",
                "222",
                "157"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c5-10\u5e74",
            "legendHoverLink": true,
            "data": [
                "730",
                "645",
                "447",
                "448",
                "268",
                "185",
                "121",
                "108",
                "84"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c\u4e0d\u9650",
            "legendHoverLink": true,
            "data": [
                "135",
                "69",
                "113",
                "44",
                "58",
                "60",
                "52",
                "32",
                "26"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7ecf\u9a8c\u5e94\u5c4a\u6bd5\u4e1a\u751f",
            "legendHoverLink": true,
            "data": [
                "57",
                "63",
                "64",
                "18",
                "59",
                "40",
                "34",
                "32",
                "20"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u7ecf\u9a8c1-3\u5e74",
                "\u7ecf\u9a8c10\u5e74\u4ee5\u4e0a",
                "\u7ecf\u9a8c1\u5e74\u4ee5\u4e0b",
                "\u7ecf\u9a8c3-5\u5e74",
                "\u7ecf\u9a8c5-10\u5e74",
                "\u7ecf\u9a8c\u4e0d\u9650",
                "\u7ecf\u9a8c\u5e94\u5c4a\u6bd5\u4e1a\u751f"
            ],
            "selected": {
                "\u7ecf\u9a8c1-3\u5e74": true,
                "\u7ecf\u9a8c10\u5e74\u4ee5\u4e0a": true,
                "\u7ecf\u9a8c1\u5e74\u4ee5\u4e0b": true,
                "\u7ecf\u9a8c3-5\u5e74": true,
                "\u7ecf\u9a8c5-10\u5e74": true,
                "\u7ecf\u9a8c\u4e0d\u9650": true,
                "\u7ecf\u9a8c\u5e94\u5c4a\u6bd5\u4e1a\u751f": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u676d\u5dde",
                "\u6df1\u5733",
                "\u5e7f\u5dde",
                "\u6210\u90fd",
                "\u5357\u4eac",
                "\u6b66\u6c49",
                "\u957f\u6c99"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

city_eduction_chart();

                    function city_eduction_chart() {
                        var jobChart = echarts.init(document.getElementById('city_eduction_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "name": "\u5927\u4e13\u53ca\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "76",
                "194",
                "168",
                "201",
                "192",
                "172",
                "107",
                "70",
                "60"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u5b66\u5386\u4e0d\u9650",
            "legendHoverLink": true,
            "data": [
                "125",
                "93",
                "116",
                "52",
                "70",
                "58",
                "47",
                "18",
                "31"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u672c\u79d1\u53ca\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "1981",
                "1667",
                "1478",
                "1219",
                "900",
                "670",
                "495",
                "389",
                "243"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u7855\u58eb\u53ca\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "34",
                "11",
                "25",
                "6",
                "3",
                "4",
                "16",
                "9",
                "7"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u5927\u4e13\u53ca\u4ee5\u4e0a",
                "\u5b66\u5386\u4e0d\u9650",
                "\u672c\u79d1\u53ca\u4ee5\u4e0a",
                "\u7855\u58eb\u53ca\u4ee5\u4e0a"
            ],
            "selected": {
                "\u5927\u4e13\u53ca\u4ee5\u4e0a": true,
                "\u5b66\u5386\u4e0d\u9650": true,
                "\u672c\u79d1\u53ca\u4ee5\u4e0a": true,
                "\u7855\u58eb\u53ca\u4ee5\u4e0a": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u676d\u5dde",
                "\u6df1\u5733",
                "\u5e7f\u5dde",
                "\u6210\u90fd",
                "\u5357\u4eac",
                "\u6b66\u6c49",
                "\u957f\u6c99"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

company_size_bar_chart();

                    function company_size_bar_chart() {
                        var jobChart = echarts.init(document.getElementById('company_size_bar_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u5de5\u4f5c\u7ecf\u9a8c",
            "clockwise": true,
            "data": [
                {
                    "name": "2000\u4eba\u4ee5\u4e0a",
                    "value": "3451"
                },
                {
                    "name": "150-500\u4eba",
                    "value": "2461"
                },
                {
                    "name": "500-2000\u4eba",
                    "value": "2250"
                },
                {
                    "name": "50-150\u4eba",
                    "value": "2073"
                },
                {
                    "name": "15-50\u4eba",
                    "value": "1529"
                },
                {
                    "name": "\u5c11\u4e8e15\u4eba",
                    "value": "308"
                },
                {
                    "value": "2"
                }
            ],
            "radius": "55%",
            "center": [
                "50%",
                "50%"
            ],
            "roseType": "radius",
            "label": {
                "show": true,
                "position": "top",
                "color": "rgba(255, 255, 255, 0.3)",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "2000\u4eba\u4ee5\u4e0a",
                "150-500\u4eba",
                "500-2000\u4eba",
                "50-150\u4eba",
                "15-50\u4eba",
                "\u5c11\u4e8e15\u4eba",
                ""
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

company_scale_bar_chart();

                    function company_scale_bar_chart() {
                        var jobChart = echarts.init(document.getElementById('company_scale_bar_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "green",
        "yellow",
        "red",
        "pink",
        "orange",
        "purple"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u4f01\u4e1a\u53d1\u5c55\u9636\u6bb5",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4e0d\u9700\u8981\u878d\u8d44",
                    "value": "3477"
                },
                {
                    "name": "\u4e0a\u5e02\u516c\u53f8",
                    "value": "2932"
                },
                {
                    "name": "\u672a\u878d\u8d44",
                    "value": "2261"
                },
                {
                    "name": "A\u8f6e",
                    "value": "889"
                },
                {
                    "name": "B\u8f6e",
                    "value": "883"
                },
                {
                    "name": "D\u8f6e\u53ca\u4ee5\u4e0a",
                    "value": "678"
                },
                {
                    "name": "C\u8f6e",
                    "value": "489"
                },
                {
                    "name": "\u5929\u4f7f\u8f6e",
                    "value": "463"
                },
                {
                    "value": "2"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u4e0d\u9700\u8981\u878d\u8d44",
                "\u4e0a\u5e02\u516c\u53f8",
                "\u672a\u878d\u8d44",
                "A\u8f6e",
                "B\u8f6e",
                "D\u8f6e\u53ca\u4ee5\u4e0a",
                "C\u8f6e",
                "\u5929\u4f7f\u8f6e",
                ""
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

company_field_chart();

                    function company_field_chart() {
                        var jobChart = echarts.init(document.getElementById('company_field_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u4f01\u4e1a\u9886\u57df",
            "clockwise": true,
            "data": [
                {
                    "name": "\u79fb\u52a8\u4e92\u8054\u7f51",
                    "value": "4976"
                },
                {
                    "name": "\u7535\u5546",
                    "value": "1961"
                },
                {
                    "name": "\u91d1\u878d",
                    "value": "1800"
                },
                {
                    "name": "\u4f01\u4e1a\u670d\u52a1",
                    "value": "1951"
                },
                {
                    "name": "\u6570\u636e\u670d\u52a1",
                    "value": "1505"
                },
                {
                    "name": "\u5176\u4ed6",
                    "value": "613"
                },
                {
                    "name": "\u8f6f\u4ef6\u5f00\u53d1",
                    "value": "800"
                },
                {
                    "name": "\u6d88\u8d39\u751f\u6d3b",
                    "value": "712"
                },
                {
                    "name": "\u6587\u5a31",
                    "value": "396"
                },
                {
                    "name": "\u5185\u5bb9",
                    "value": "396"
                },
                {
                    "name": "\u6559\u80b2",
                    "value": "462"
                },
                {
                    "name": "\u786c\u4ef6",
                    "value": "454"
                },
                {
                    "name": "\u6e38\u620f",
                    "value": "323"
                },
                {
                    "name": "\u533b\u7597",
                    "value": "374"
                },
                {
                    "name": "\u5065\u5eb7",
                    "value": "374"
                },
                {
                    "name": "\u6c7d\u8f66",
                    "value": "146"
                },
                {
                    "name": "\u51fa\u884c",
                    "value": "146"
                },
                {
                    "name": "\u4fe1\u606f\u5b89\u5168",
                    "value": "442"
                },
                {
                    "name": "\u901a\u8baf\u7535\u5b50",
                    "value": "142"
                },
                {
                    "name": "\u793e\u4ea4",
                    "value": "272"
                },
                {
                    "name": "\u4eba\u5de5\u667a\u80fd",
                    "value": "345"
                },
                {
                    "name": "\u7269\u6d41",
                    "value": "85"
                },
                {
                    "name": "\u8fd0\u8f93",
                    "value": "85"
                },
                {
                    "name": "\u65c5\u6e38",
                    "value": "104"
                },
                {
                    "name": "\u5e7f\u544a\u8425\u9500",
                    "value": "130"
                },
                {
                    "name": "\u623f\u4ea7\u5bb6\u5c45",
                    "value": "65"
                },
                {
                    "name": "\u7269\u8054\u7f51",
                    "value": "169"
                },
                {
                    "name": "\u4e0d\u9650",
                    "value": "45"
                },
                {
                    "name": "\u5de5\u5177",
                    "value": "39"
                },
                {
                    "name": "\u7535\u5b50\u5546\u52a1",
                    "value": "41"
                },
                {
                    "name": "\u533a\u5757\u94fe",
                    "value": "81"
                },
                {
                    "value": "4"
                },
                {
                    "name": "\u751f\u6d3b\u670d\u52a1",
                    "value": "6"
                },
                {
                    "name": "VR",
                    "value": "5"
                },
                {
                    "name": "AR",
                    "value": "5"
                },
                {
                    "name": "\u533b\u7597\u5065\u5eb7",
                    "value": "4"
                },
                {
                    "name": "\u4f53\u80b2",
                    "value": "3"
                },
                {
                    "name": "\u793e\u4ea4\u7f51\u7edc",
                    "value": "3"
                },
                {
                    "name": "\u6587\u5316\u5a31\u4e50",
                    "value": "2"
                },
                {
                    "name": "\u62db\u8058",
                    "value": "1"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u79fb\u52a8\u4e92\u8054\u7f51",
                "\u7535\u5546",
                "\u91d1\u878d",
                "\u4f01\u4e1a\u670d\u52a1",
                "\u6570\u636e\u670d\u52a1",
                "\u5176\u4ed6",
                "\u8f6f\u4ef6\u5f00\u53d1",
                "\u6d88\u8d39\u751f\u6d3b",
                "\u6587\u5a31",
                "\u5185\u5bb9",
                "\u6559\u80b2",
                "\u786c\u4ef6",
                "\u6e38\u620f",
                "\u533b\u7597",
                "\u5065\u5eb7",
                "\u6c7d\u8f66",
                "\u51fa\u884c",
                "\u4fe1\u606f\u5b89\u5168",
                "\u901a\u8baf\u7535\u5b50",
                "\u793e\u4ea4",
                "\u4eba\u5de5\u667a\u80fd",
                "\u7269\u6d41",
                "\u8fd0\u8f93",
                "\u65c5\u6e38",
                "\u5e7f\u544a\u8425\u9500",
                "\u623f\u4ea7\u5bb6\u5c45",
                "\u7269\u8054\u7f51",
                "\u4e0d\u9650",
                "\u5de5\u5177",
                "\u7535\u5b50\u5546\u52a1",
                "\u533a\u5757\u94fe",
                "",
                "\u751f\u6d3b\u670d\u52a1",
                "VR",
                "AR",
                "\u533b\u7597\u5065\u5eb7",
                "\u4f53\u80b2",
                "\u793e\u4ea4\u7f51\u7edc",
                "\u6587\u5316\u5a31\u4e50",
                "\u62db\u8058"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

company_name_chart();

                    function company_name_chart() {
                        var jobChart = echarts.init(document.getElementById('company_name_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "name": "\u62db\u8058\u6570\u524d10\u516c\u53f8",
            "clockwise": true,
            "data": [
                {
                    "name": "\u6b66\u6c49\u4f70\u94a7\u6210\u6280\u672f\u6709\u9650\u8d23\u4efb\u516c\u53f8",
                    "value": "97"
                },
                {
                    "name": "\u652f\u4ed8\u5b9d\uff08\u676d\u5dde\uff09\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8",
                    "value": "95"
                },
                {
                    "name": "\u5317\u4eac\u4eac\u4e1c\u4e16\u7eaa\u8d38\u6613\u6709\u9650\u516c\u53f8",
                    "value": "82"
                },
                {
                    "name": "\u963f\u91cc\u5df4\u5df4\uff08\u4e2d\u56fd\uff09\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",
                    "value": "73"
                },
                {
                    "name": "\u5317\u4eac\u4e09\u5feb\u5728\u7ebf\u79d1\u6280\u6709\u9650\u516c\u53f8",
                    "value": "66"
                },
                {
                    "name": "\u6d59\u6c5f\u5929\u732b\u6280\u672f\u6709\u9650\u516c\u53f8",
                    "value": "65"
                },
                {
                    "name": "\u6613\u5b9d\u8f6f\u4ef6\u79d1\u6280\uff08\u5357\u4eac\uff09\u6709\u9650\u516c\u53f8",
                    "value": "61"
                },
                {
                    "name": "\u6dd8\u5b9d\uff08\u4e2d\u56fd\uff09\u8f6f\u4ef6\u6709\u9650\u516c\u53f8",
                    "value": "61"
                },
                {
                    "name": "\u4e0a\u6d77\u534e\u94a6\u4fe1\u606f\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8",
                    "value": "57"
                },
                {
                    "name": "\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8",
                    "value": "57"
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u6b66\u6c49\u4f70\u94a7\u6210\u6280\u672f\u6709\u9650\u8d23\u4efb\u516c\u53f8",
                "\u652f\u4ed8\u5b9d\uff08\u676d\u5dde\uff09\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8",
                "\u5317\u4eac\u4eac\u4e1c\u4e16\u7eaa\u8d38\u6613\u6709\u9650\u516c\u53f8",
                "\u963f\u91cc\u5df4\u5df4\uff08\u4e2d\u56fd\uff09\u7f51\u7edc\u6280\u672f\u6709\u9650\u516c\u53f8",
                "\u5317\u4eac\u4e09\u5feb\u5728\u7ebf\u79d1\u6280\u6709\u9650\u516c\u53f8",
                "\u6d59\u6c5f\u5929\u732b\u6280\u672f\u6709\u9650\u516c\u53f8",
                "\u6613\u5b9d\u8f6f\u4ef6\u79d1\u6280\uff08\u5357\u4eac\uff09\u6709\u9650\u516c\u53f8",
                "\u6dd8\u5b9d\uff08\u4e2d\u56fd\uff09\u8f6f\u4ef6\u6709\u9650\u516c\u53f8",
                "\u4e0a\u6d77\u534e\u94a6\u4fe1\u606f\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8",
                "\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8"
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

city_company_scale_chart();

                    function city_company_scale_chart() {
                        var jobChart = echarts.init(document.getElementById('city_company_scale_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                "2",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "A\u8f6e",
            "legendHoverLink": true,
            "data": [
                "172",
                "158",
                "146",
                "116",
                "106",
                "53",
                "31",
                "29",
                "22"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "B\u8f6e",
            "legendHoverLink": true,
            "data": [
                "159",
                "208",
                "178",
                "82",
                "93",
                "49",
                "28",
                "30",
                "20"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "C\u8f6e",
            "legendHoverLink": true,
            "data": [
                "134",
                "99",
                "56",
                "52",
                "32",
                "20",
                "45",
                "14",
                "4"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "D\u8f6e\u53ca\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "255",
                "167",
                "98",
                "42",
                "16",
                "35",
                "7",
                "29",
                "4"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u4e0a\u5e02\u516c\u53f8",
            "legendHoverLink": true,
            "data": [
                "569",
                "499",
                "543",
                "353",
                "262",
                "194",
                "129",
                "93",
                "74"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u4e0d\u9700\u8981\u878d\u8d44",
            "legendHoverLink": true,
            "data": [
                "608",
                "455",
                "469",
                "545",
                "350",
                "265",
                "207",
                "144",
                "74"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u5929\u4f7f\u8f6e",
            "legendHoverLink": true,
            "data": [
                "56",
                "64",
                "67",
                "56",
                "40",
                "38",
                "45",
                "25",
                "37"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u672a\u878d\u8d44",
            "legendHoverLink": true,
            "data": [
                "261",
                "315",
                "230",
                "232",
                "266",
                "250",
                "173",
                "122",
                "106"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "",
                "A\u8f6e",
                "B\u8f6e",
                "C\u8f6e",
                "D\u8f6e\u53ca\u4ee5\u4e0a",
                "\u4e0a\u5e02\u516c\u53f8",
                "\u4e0d\u9700\u8981\u878d\u8d44",
                "\u5929\u4f7f\u8f6e",
                "\u672a\u878d\u8d44"
            ],
            "selected": {
                "": true,
                "A\u8f6e": true,
                "B\u8f6e": true,
                "C\u8f6e": true,
                "D\u8f6e\u53ca\u4ee5\u4e0a": true,
                "\u4e0a\u5e02\u516c\u53f8": true,
                "\u4e0d\u9700\u8981\u878d\u8d44": true,
                "\u5929\u4f7f\u8f6e": true,
                "\u672a\u878d\u8d44": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u676d\u5dde",
                "\u6df1\u5733",
                "\u5e7f\u5dde",
                "\u6210\u90fd",
                "\u5357\u4eac",
                "\u6b66\u6c49",
                "\u957f\u6c99"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

city_company_size_chart();

                    function city_company_size_chart() {
                        var jobChart = echarts.init(document.getElementById('city_company_size_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                "2",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0",
                "0"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "15-50\u4eba",
            "legendHoverLink": true,
            "data": [
                "189",
                "196",
                "164",
                "161",
                "168",
                "177",
                "107",
                "81",
                "81"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "150-500\u4eba",
            "legendHoverLink": true,
            "data": [
                "447",
                "379",
                "293",
                "322",
                "274",
                "219",
                "154",
                "101",
                "64"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "2000\u4eba\u4ee5\u4e0a",
            "legendHoverLink": true,
            "data": [
                "812",
                "621",
                "726",
                "432",
                "189",
                "166",
                "148",
                "104",
                "36"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "50-150\u4eba",
            "legendHoverLink": true,
            "data": [
                "296",
                "349",
                "262",
                "209",
                "246",
                "152",
                "138",
                "105",
                "108"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "500-2000\u4eba",
            "legendHoverLink": true,
            "data": [
                "425",
                "385",
                "307",
                "332",
                "252",
                "144",
                "96",
                "81",
                "44"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u5c11\u4e8e15\u4eba",
            "legendHoverLink": true,
            "data": [
                "45",
                "35",
                "35",
                "22",
                "36",
                "46",
                "22",
                "14",
                "8"
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "",
                "15-50\u4eba",
                "150-500\u4eba",
                "2000\u4eba\u4ee5\u4e0a",
                "50-150\u4eba",
                "500-2000\u4eba",
                "\u5c11\u4e8e15\u4eba"
            ],
            "selected": {
                "": true,
                "15-50\u4eba": true,
                "150-500\u4eba": true,
                "2000\u4eba\u4ee5\u4e0a": true,
                "50-150\u4eba": true,
                "500-2000\u4eba": true,
                "\u5c11\u4e8e15\u4eba": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "rotate": -20,
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u676d\u5dde",
                "\u6df1\u5733",
                "\u5e7f\u5dde",
                "\u6210\u90fd",
                "\u5357\u4eac",
                "\u6b66\u6c49",
                "\u957f\u6c99"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

salary_pie_chart();

                    function salary_pie_chart() {
                        var jobChart = echarts.init(document.getElementById('salary_pie_chart'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "legendHoverLink": true,
            "data": [
                {
                    "name": "0",
                    "value": 257,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "5000",
                    "value": 959,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "10000",
                    "value": 2638,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "15000",
                    "value": 2489,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "20000",
                    "value": 3269,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "30000",
                    "value": 1839,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "40000",
                    "value": 481,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "50000",
                    "value": 90,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "60000",
                    "value": 38,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "70000",
                    "value": 10,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "80000",
                    "value": 1,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "90000",
                    "value": 2,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                },
                {
                    "name": "100000",
                    "value": 1,
                    "itemStyle": {
                        "color": "#d48265"
                    }
                }
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": -1,
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "formatter": function (params) {                                                var name='';                                                if (params.name < 5000){                                                    name='\u5c0f\u4e8e5K'                                                }                                                else if (params.name < 10000) {                                                    name='5K-10K'                                                }                                                else if (params.name < 15000) {                                                    name='10K-15K'                                                }                                                else if (params.name < 20000) {                                                    name='15K-20K'                                                }                                                else if (params.name < 30000) {                                                    name='20K-30K'                                                }                                                else if (params.name < 40000) {                                                    name='30K-40K'                                                }                                                else if (params.name < 50000) {                                                    name='40K-50K'                                                }                                                else if (params.name < 60000) {                                                    name='50K-60K'                                                }                                                else if (params.name < 70000) {                                                    name='60K-70K'                                                }                                                else if (params.name < 80000) {                                                    name='70K-80K'                                                }                                                else if (params.name < 90000) {                                                    name='80K-90K'                                                }                                                else if (params.name < 100000) {                                                    name='90K-100K'                                                }                                                else {                                                    name='\u5927\u4e8e100K'                                                }                                                return name+':'+params.value;                                                }                                            ,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "name": "\u85aa\u916c",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#d48265"
            },
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "0",
                "5000",
                "10000",
                "15000",
                "20000",
                "30000",
                "40000",
                "50000",
                "60000",
                "70000",
                "80000",
                "90000",
                "100000"
            ]
        }
    ],
    "yAxis": [
        {
            "name": "\u5c97\u4f4d\u6570\u91cf",
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "nameTextStyle": {
                "color": "#d48265"
            },
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "red",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

advantage_word_cloud();

                    function advantage_word_cloud() {
                        var jobChart = echarts.init(document.getElementById('advantage_word_cloud'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "wordCloud",
            "name": "\u804c\u4f4d\u8bf1\u60d1",
            "shape": "circle",
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                16,
                166
            ],
            "data": [
                {
                    "name": "\u4e00\u91d1",
                    "value": 0.8476084083601201,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(6,66,78)"
                        }
                    }
                },
                {
                    "name": "\u4e94\u9669",
                    "value": 0.5944888675261859,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,132,86)"
                        }
                    }
                },
                {
                    "name": "\u53cc\u4f11",
                    "value": 0.47833710031870297,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(15,77,50)"
                        }
                    }
                },
                {
                    "name": "\u5e26\u85aa",
                    "value": 0.2578991647773009,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(128,34,157)"
                        }
                    }
                },
                {
                    "name": "\u6c1b\u56f4",
                    "value": 0.16712724371193552,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(40,70,86)"
                        }
                    }
                },
                {
                    "name": "\u5e74\u7ec8\u5956",
                    "value": 0.16390046823521223,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(107,7,17)"
                        }
                    }
                },
                {
                    "name": "\u56e2\u961f",
                    "value": 0.15757404023813143,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(151,22,118)"
                        }
                    }
                },
                {
                    "name": "\u516d\u9669",
                    "value": 0.13362887471052742,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(66,1,65)"
                        }
                    }
                },
                {
                    "name": "\u5468\u672b",
                    "value": 0.13072411257459227,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,46,91)"
                        }
                    }
                },
                {
                    "name": "\u7a7a\u95f4",
                    "value": 0.11768856444635765,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,17,154)"
                        }
                    }
                },
                {
                    "name": "\u5f39\u6027",
                    "value": 0.11510892105155364,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(12,142,59)"
                        }
                    }
                },
                {
                    "name": "\u798f\u5229\u5f85\u9047",
                    "value": 0.11502975287086696,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(110,155,72)"
                        }
                    }
                },
                {
                    "name": "\u5927\u725b",
                    "value": 0.10525446510812972,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,19,160)"
                        }
                    }
                },
                {
                    "name": "\u7ee9\u6548\u5956\u91d1",
                    "value": 0.10193192320069241,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(67,151,144)"
                        }
                    }
                },
                {
                    "name": "\u9910\u8865",
                    "value": 0.09600299701899666,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(136,90,103)"
                        }
                    }
                },
                {
                    "name": "\u53d1\u5c55\u524d\u666f",
                    "value": 0.08471670601522176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(31,9,0)"
                        }
                    }
                },
                {
                    "name": "\u4f53\u68c0",
                    "value": 0.08239078710317445,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(157,146,65)"
                        }
                    }
                },
                {
                    "name": "\u664b\u5347",
                    "value": 0.08011331340500086,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(152,80,53)"
                        }
                    }
                },
                {
                    "name": "\u53cc\u85aa",
                    "value": 0.07431991395446828,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(96,143,55)"
                        }
                    }
                },
                {
                    "name": "\u8282\u65e5",
                    "value": 0.07400682835574955,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(115,104,62)"
                        }
                    }
                },
                {
                    "name": "\u53d1\u5c55",
                    "value": 0.07092164296533333,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(18,157,11)"
                        }
                    }
                },
                {
                    "name": "\u56e2\u5efa",
                    "value": 0.06893993685302814,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(2,135,57)"
                        }
                    }
                },
                {
                    "name": "\u85aa\u8d44",
                    "value": 0.06687642108337626,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,56,17)"
                        }
                    }
                },
                {
                    "name": "\u8865\u8d34",
                    "value": 0.06359488756204845,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(82,66,137)"
                        }
                    }
                },
                {
                    "name": "\u5956\u91d1",
                    "value": 0.0601809171013753,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(4,20,132)"
                        }
                    }
                },
                {
                    "name": "\u52a0\u73ed",
                    "value": 0.05812221359816652,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,20,35)"
                        }
                    }
                },
                {
                    "name": "\u9879\u76ee",
                    "value": 0.05662872443317043,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(102,50,91)"
                        }
                    }
                },
                {
                    "name": "\u65c5\u6e38",
                    "value": 0.056441689533650356,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(84,145,155)"
                        }
                    }
                },
                {
                    "name": "\u514d\u8d39",
                    "value": 0.05554319331977759,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(90,65,84)"
                        }
                    }
                },
                {
                    "name": "\u671f\u6743",
                    "value": 0.05520948114881259,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,106,70)"
                        }
                    }
                },
                {
                    "name": "\u5e74\u7ec8\u5956\u91d1",
                    "value": 0.054393278389394374,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,17,95)"
                        }
                    }
                },
                {
                    "name": "\u6241\u5e73\u5316",
                    "value": 0.052733981504478784,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(128,44,98)"
                        }
                    }
                },
                {
                    "name": "\u4e0b\u5348\u8336",
                    "value": 0.048821372509890326,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(124,89,84)"
                        }
                    }
                },
                {
                    "name": "nice",
                    "value": 0.046291231341701475,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(120,48,6)"
                        }
                    }
                },
                {
                    "name": "\u5f85\u9047",
                    "value": 0.0450738435537917,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,33,126)"
                        }
                    }
                },
                {
                    "name": "13",
                    "value": 0.04355480387322651,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,153,127)"
                        }
                    }
                },
                {
                    "name": "\u7ba1\u7406",
                    "value": 0.042529812238705576,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(43,157,29)"
                        }
                    }
                },
                {
                    "name": "\u73ed\u8f66",
                    "value": 0.0416517611345671,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,13,144)"
                        }
                    }
                },
                {
                    "name": "\u5e74\u5e95",
                    "value": 0.040036701789615645,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(136,51,138)"
                        }
                    }
                },
                {
                    "name": "\u5b9a\u671f",
                    "value": 0.03901782304848279,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(139,33,130)"
                        }
                    }
                },
                {
                    "name": "\u5458\u5de5",
                    "value": 0.03844581029686524,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(155,93,153)"
                        }
                    }
                },
                {
                    "name": "\u524d\u666f",
                    "value": 0.038216441230049025,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(70,2,100)"
                        }
                    }
                },
                {
                    "name": "\u884c\u4e1a",
                    "value": 0.03682304279985503,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(138,34,29)"
                        }
                    }
                },
                {
                    "name": "\u6210\u957f",
                    "value": 0.03561054546703176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(88,67,41)"
                        }
                    }
                },
                {
                    "name": "\u8282\u5047\u65e5",
                    "value": 0.03538866190569709,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(96,61,53)"
                        }
                    }
                },
                {
                    "name": "\u72ec\u89d2\u517d",
                    "value": 0.034431878230334764,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(3,48,124)"
                        }
                    }
                },
                {
                    "name": "\u5e74\u5ea6",
                    "value": 0.0342249241096124,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,154,42)"
                        }
                    }
                },
                {
                    "name": "\u4e0a\u5e02\u516c\u53f8",
                    "value": 0.034111557317015546,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(11,76,60)"
                        }
                    }
                },
                {
                    "name": "\u8865\u52a9",
                    "value": 0.033778725365310444,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(102,100,131)"
                        }
                    }
                },
                {
                    "name": "\u597d\u4e94\u9669",
                    "value": 0.03192498713220791,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,108,62)"
                        }
                    }
                },
                {
                    "name": "\u73af\u5883",
                    "value": 0.031136565317175964,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,147,44)"
                        }
                    }
                },
                {
                    "name": "\u6241\u5e73",
                    "value": 0.029433830012064285,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(82,148,1)"
                        }
                    }
                },
                {
                    "name": "\u4e30\u539a",
                    "value": 0.029318301673056747,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(131,104,156)"
                        }
                    }
                },
                {
                    "name": "\u9886\u5bfc",
                    "value": 0.0284758386926474,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(112,143,130)"
                        }
                    }
                },
                {
                    "name": "\u4e09\u9910",
                    "value": 0.02831438857112065,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(15,24,100)"
                        }
                    }
                },
                {
                    "name": "\u8c03\u85aa",
                    "value": 0.027838539845802576,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(14,104,112)"
                        }
                    }
                },
                {
                    "name": "\u4f18\u539a",
                    "value": 0.027089236816919215,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(147,132,143)"
                        }
                    }
                },
                {
                    "name": "\u4e00\u91d1\u4e94\u9669",
                    "value": 0.025083918461020503,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(159,88,137)"
                        }
                    }
                },
                {
                    "name": "\u7a33\u5b9a",
                    "value": 0.02504554483597063,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(38,14,101)"
                        }
                    }
                },
                {
                    "name": "\u6253\u5361",
                    "value": 0.024383193760762995,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(82,93,49)"
                        }
                    }
                },
                {
                    "name": "\u529e\u516c",
                    "value": 0.02360693784172341,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(15,145,17)"
                        }
                    }
                },
                {
                    "name": "\u85aa\u916c",
                    "value": 0.023467118764266093,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(123,151,131)"
                        }
                    }
                },
                {
                    "name": "\u6fc0\u52b1",
                    "value": 0.0234414526166371,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,126,104)"
                        }
                    }
                },
                {
                    "name": "\u5de5\u4f5c\u5236",
                    "value": 0.02329973824400191,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(120,37,138)"
                        }
                    }
                },
                {
                    "name": "\u4ea4\u901a",
                    "value": 0.023134602248244922,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(32,130,71)"
                        }
                    }
                },
                {
                    "name": "\u5348\u9910",
                    "value": 0.023121453299010775,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(114,60,101)"
                        }
                    }
                },
                {
                    "name": "\u6838\u5fc3",
                    "value": 0.022997060207226704,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(116,64,97)"
                        }
                    }
                },
                {
                    "name": "\u673a\u4f1a",
                    "value": 0.02229979298533333,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(71,9,45)"
                        }
                    }
                },
                {
                    "name": "\u5927\u4e94\u9669",
                    "value": 0.021891419747799713,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(66,159,62)"
                        }
                    }
                },
                {
                    "name": "java",
                    "value": 0.02120731288068097,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(32,131,108)"
                        }
                    }
                },
                {
                    "name": "\u4e1a\u52a1",
                    "value": 0.021189308840711685,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(0,66,83)"
                        }
                    }
                },
                {
                    "name": "\u5e74\u7ec8",
                    "value": 0.01992250884000954,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(142,149,140)"
                        }
                    }
                },
                {
                    "name": "\u5e26\u961f",
                    "value": 0.01877649670390768,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(51,8,36)"
                        }
                    }
                },
                {
                    "name": "14",
                    "value": 0.018242849789833093,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(36,130,2)"
                        }
                    }
                },
                {
                    "name": "\u5e26\u85aa\u4f11\u5047",
                    "value": 0.01718713585016309,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(30,160,23)"
                        }
                    }
                },
                {
                    "name": "\u6311\u6218",
                    "value": 0.01622263859582432,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(20,82,24)"
                        }
                    }
                },
                {
                    "name": "\u5e7f\u9614",
                    "value": 0.01622230797572609,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(1,127,8)"
                        }
                    }
                },
                {
                    "name": "\u57f9\u8bad",
                    "value": 0.015852320519363663,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(91,118,30)"
                        }
                    }
                },
                {
                    "name": "\u5168\u989d",
                    "value": 0.015758817297279543,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(56,111,91)"
                        }
                    }
                },
                {
                    "name": "\u963f\u91cc",
                    "value": 0.015299130467419743,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(110,2,1)"
                        }
                    }
                },
                {
                    "name": "\u4e03\u9669",
                    "value": 0.015278386698985217,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(112,80,17)"
                        }
                    }
                },
                {
                    "name": "\u5546\u4e1a\u4fdd\u9669",
                    "value": 0.015269835696549355,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,92,72)"
                        }
                    }
                },
                {
                    "name": "\u8865\u5145",
                    "value": 0.015266636652731902,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(146,131,3)"
                        }
                    }
                },
                {
                    "name": "\u6570\u636e",
                    "value": 0.01495741526477749,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(101,83,59)"
                        }
                    }
                },
                {
                    "name": "\u9ad8\u85aa",
                    "value": 0.014670985365462089,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(147,33,125)"
                        }
                    }
                },
                {
                    "name": "\u80a1\u7968",
                    "value": 0.014628137863399525,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(83,17,22)"
                        }
                    }
                },
                {
                    "name": "15",
                    "value": 0.014594279831866475,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(81,74,100)"
                        }
                    }
                },
                {
                    "name": "16",
                    "value": 0.014594279831866475,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(4,58,99)"
                        }
                    }
                },
                {
                    "name": "\u7535\u5546",
                    "value": 0.014536134741993324,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(27,89,118)"
                        }
                    }
                },
                {
                    "name": "\u591a\u591a",
                    "value": 0.014442106998572818,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(122,38,139)"
                        }
                    }
                },
                {
                    "name": "\u5e76\u53d1",
                    "value": 0.01440921889463176,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(120,22,110)"
                        }
                    }
                },
                {
                    "name": "\u901a\u8baf",
                    "value": 0.014395436165132282,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(100,124,93)"
                        }
                    }
                },
                {
                    "name": "\u91d1\u878d",
                    "value": 0.01422221984940124,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(22,24,15)"
                        }
                    }
                },
                {
                    "name": "\u5047\u4e94\u9669",
                    "value": 0.014138208587120648,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(23,3,27)"
                        }
                    }
                },
                {
                    "name": "\u5916\u4f01",
                    "value": 0.013899465826346208,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(32,118,142)"
                        }
                    }
                },
                {
                    "name": "\u751f\u65e5",
                    "value": 0.013753763753538959,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(24,72,111)"
                        }
                    }
                },
                {
                    "name": "\u516c\u79ef\u91d1",
                    "value": 0.013719552333935337,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(158,99,56)"
                        }
                    }
                },
                {
                    "name": "\u96f6\u98df",
                    "value": 0.013702186529792847,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(23,6,64)"
                        }
                    }
                },
                {
                    "name": "\u56fd\u4f01",
                    "value": 0.013673554015996566,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(99,111,119)"
                        }
                    }
                },
                {
                    "name": "\u4e13\u4e1a\u57f9\u8bad",
                    "value": 0.013406106900505485,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(155,74,98)"
                        }
                    }
                }
            ],
            "drawOutOfBound": false,
            "textStyle": {
                "emphasis": {}
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    

requirement_word_cloud();

                    function requirement_word_cloud() {
                        var jobChart = echarts.init(document.getElementById('requirement_word_cloud'));
                        option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "wordCloud",
            "name": "\u62db\u8058\u8981\u6c42",
            "shape": "circle",
            "rotationRange": [
                -90,
                90
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                16,
                166
            ],
            "data": [
                {
                    "name": "java",
                    "value": 0.20819163753960715,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(94,137,76)"
                        }
                    }
                },
                {
                    "name": "\u7ecf\u9a8c",
                    "value": 0.15498517346938662,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(90,74,11)"
                        }
                    }
                },
                {
                    "name": "spring",
                    "value": 0.11204095276886678,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(120,114,138)"
                        }
                    }
                },
                {
                    "name": "\u8bbe\u8ba1",
                    "value": 0.10033437682190438,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(31,6,90)"
                        }
                    }
                },
                {
                    "name": "\u6846\u67b6",
                    "value": 0.09177950917048468,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(85,48,43)"
                        }
                    }
                },
                {
                    "name": "\u6570\u636e\u5e93",
                    "value": 0.08499567878744363,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(136,121,49)"
                        }
                    }
                },
                {
                    "name": "\u7cfb\u7edf",
                    "value": 0.08272441296416147,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(141,51,86)"
                        }
                    }
                },
                {
                    "name": "mysql",
                    "value": 0.079375826157647,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(76,90,42)"
                        }
                    }
                },
                {
                    "name": "\u56e2\u961f",
                    "value": 0.06629216613565896,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,117,109)"
                        }
                    }
                },
                {
                    "name": "\u9879\u76ee",
                    "value": 0.0599940972175302,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(75,67,76)"
                        }
                    }
                },
                {
                    "name": "\u67b6\u6784",
                    "value": 0.05704574228750909,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(29,125,11)"
                        }
                    }
                },
                {
                    "name": "mybatis",
                    "value": 0.05230951087774263,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(137,159,2)"
                        }
                    }
                },
                {
                    "name": "redis",
                    "value": 0.05133861873936424,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(58,91,0)"
                        }
                    }
                },
                {
                    "name": "linux",
                    "value": 0.05054032964780867,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,49,134)"
                        }
                    }
                },
                {
                    "name": "\u4f18\u5316",
                    "value": 0.049355751907200866,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(132,42,113)"
                        }
                    }
                },
                {
                    "name": "\u591a\u7ebf\u7a0b",
                    "value": 0.04858148771613791,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(72,145,69)"
                        }
                    }
                },
                {
                    "name": "\u5f00\u6e90",
                    "value": 0.04796214378409058,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(19,150,146)"
                        }
                    }
                },
                {
                    "name": "\u6587\u6863",
                    "value": 0.04761841649120603,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(61,139,69)"
                        }
                    }
                },
                {
                    "name": "\u4ee3\u7801",
                    "value": 0.0474806342317202,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(55,84,124)"
                        }
                    }
                },
                {
                    "name": "\u5206\u5e03\u5f0f",
                    "value": 0.04745359851034988,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(50,118,107)"
                        }
                    }
                },
                {
                    "name": "sql",
                    "value": 0.04680778876026506,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(34,34,9)"
                        }
                    }
                },
                {
                    "name": "\u7f16\u5199",
                    "value": 0.046090358789228424,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(42,97,44)"
                        }
                    }
                },
                {
                    "name": "\u6c9f\u901a",
                    "value": 0.04502235310753285,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(139,142,37)"
                        }
                    }
                },
                {
                    "name": "\u8981\u6c42",
                    "value": 0.04411650329102471,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(75,16,138)"
                        }
                    }
                },
                {
                    "name": "\u4e1a\u52a1",
                    "value": 0.04399950810822439,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(12,107,30)"
                        }
                    }
                },
                {
                    "name": "\u67b6\u6784\u8bbe\u8ba1",
                    "value": 0.041208977428949654,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(105,100,132)"
                        }
                    }
                },
                {
                    "name": "web",
                    "value": 0.0407019559789076,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(137,69,47)"
                        }
                    }
                },
                {
                    "name": "\u672c\u79d1",
                    "value": 0.03953289524103116,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(148,61,145)"
                        }
                    }
                },
                {
                    "name": "oracle",
                    "value": 0.0395260977224271,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(46,22,81)"
                        }
                    }
                },
                {
                    "name": "\u9700\u6c42",
                    "value": 0.03894243216773529,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,155,8)"
                        }
                    }
                },
                {
                    "name": "\u5e94\u7528",
                    "value": 0.03780278442665517,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(84,130,13)"
                        }
                    }
                },
                {
                    "name": "\u5e76\u53d1",
                    "value": 0.037608979958001124,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(158,84,53)"
                        }
                    }
                },
                {
                    "name": "\u4ea7\u54c1",
                    "value": 0.03694216792438447,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(65,16,39)"
                        }
                    }
                },
                {
                    "name": "\u624e\u5b9e",
                    "value": 0.03684901561332209,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(111,107,76)"
                        }
                    }
                },
                {
                    "name": "\u8bbe\u8ba1\u6a21\u5f0f",
                    "value": 0.036543093243690504,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(142,83,30)"
                        }
                    }
                },
                {
                    "name": "\u7f13\u5b58",
                    "value": 0.03621941699654679,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,92,15)"
                        }
                    }
                },
                {
                    "name": "\u8c03\u4f18",
                    "value": 0.034218554032625206,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(70,150,27)"
                        }
                    }
                },
                {
                    "name": "\u5b8c\u6210",
                    "value": 0.03362561243011241,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(6,24,117)"
                        }
                    }
                },
                {
                    "name": "\u7814\u53d1",
                    "value": 0.03352863135404089,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(1,147,141)"
                        }
                    }
                },
                {
                    "name": "\u6027\u80fd",
                    "value": 0.033222002839048644,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(33,100,94)"
                        }
                    }
                },
                {
                    "name": "\u6a21\u5757",
                    "value": 0.03236999660562169,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(148,101,35)"
                        }
                    }
                },
                {
                    "name": "\u5206\u6790",
                    "value": 0.032326074053718776,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(51,130,125)"
                        }
                    }
                },
                {
                    "name": "\u8ba1\u7b97\u673a\u76f8\u5173",
                    "value": 0.03038892393124376,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(57,92,156)"
                        }
                    }
                },
                {
                    "name": "\u4e13\u4e1a",
                    "value": 0.029960277441705797,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(14,9,20)"
                        }
                    }
                },
                {
                    "name": "\u670d\u52a1",
                    "value": 0.02855739030906606,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(17,17,58)"
                        }
                    }
                },
                {
                    "name": "jvm",
                    "value": 0.02790775513316564,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(106,94,93)"
                        }
                    }
                },
                {
                    "name": "\u57fa\u7840",
                    "value": 0.02783529245212223,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(153,99,146)"
                        }
                    }
                },
                {
                    "name": "springboot",
                    "value": 0.027713576705489962,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(103,72,17)"
                        }
                    }
                },
                {
                    "name": "\u6d4b\u8bd5",
                    "value": 0.027687680746192735,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(6,2,45)"
                        }
                    }
                },
                {
                    "name": "\u4e3b\u6d41",
                    "value": 0.027431353421991326,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(1,150,104)"
                        }
                    }
                },
                {
                    "name": "\u5b66\u4e60",
                    "value": 0.027097859753054253,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(7,88,128)"
                        }
                    }
                },
                {
                    "name": "\u7f16\u7801",
                    "value": 0.026903137188305212,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(76,59,72)"
                        }
                    }
                },
                {
                    "name": "\u8d23\u4efb\u5fc3",
                    "value": 0.026300331459733838,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(145,10,102)"
                        }
                    }
                },
                {
                    "name": "\u5206\u5e03\u5f0f\u7cfb\u7edf",
                    "value": 0.025945819416810716,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(122,35,145)"
                        }
                    }
                },
                {
                    "name": "\u638c\u63e1",
                    "value": 0.024939882842252816,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(106,67,108)"
                        }
                    }
                },
                {
                    "name": "\u539f\u7406",
                    "value": 0.024809831102798628,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(71,38,82)"
                        }
                    }
                },
                {
                    "name": "springmvc",
                    "value": 0.024746961838222645,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(85,22,142)"
                        }
                    }
                },
                {
                    "name": "\u7406\u89e3",
                    "value": 0.024595657118647682,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(76,53,117)"
                        }
                    }
                },
                {
                    "name": "\u8fdb\u884c",
                    "value": 0.023068644585874737,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(71,123,86)"
                        }
                    }
                },
                {
                    "name": "dubbo",
                    "value": 0.02263257451464303,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(62,37,130)"
                        }
                    }
                },
                {
                    "name": "cloud",
                    "value": 0.022449183777393775,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,77,108)"
                        }
                    }
                },
                {
                    "name": "\u6838\u5fc3",
                    "value": 0.022445010439418562,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(97,2,91)"
                        }
                    }
                },
                {
                    "name": "\u4e2d\u95f4\u4ef6",
                    "value": 0.02230463398394719,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(82,141,10)"
                        }
                    }
                },
                {
                    "name": "\u80fd\u591f",
                    "value": 0.02171618868754029,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(111,100,126)"
                        }
                    }
                },
                {
                    "name": "\u72ec\u7acb",
                    "value": 0.021694065763789887,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(125,157,140)"
                        }
                    }
                },
                {
                    "name": "\u89e3\u51b3",
                    "value": 0.02071013089894198,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(149,108,17)"
                        }
                    }
                },
                {
                    "name": "boot",
                    "value": 0.020065104193153497,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(5,95,57)"
                        }
                    }
                },
                {
                    "name": "j2ee",
                    "value": 0.020011165741021363,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,14,117)"
                        }
                    }
                },
                {
                    "name": "tomcat",
                    "value": 0.020000378050594937,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(80,152,113)"
                        }
                    }
                },
                {
                    "name": "\u6570\u636e",
                    "value": 0.0191998790986671,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(67,139,10)"
                        }
                    }
                },
                {
                    "name": "\u7ef4\u62a4",
                    "value": 0.019143633550370354,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(158,5,16)"
                        }
                    }
                },
                {
                    "name": "javascript",
                    "value": 0.019126575126054382,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(11,35,60)"
                        }
                    }
                },
                {
                    "name": "\u8f6f\u4ef6",
                    "value": 0.018991387765759194,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(83,124,48)"
                        }
                    }
                },
                {
                    "name": "\u95ee\u9898",
                    "value": 0.018973745837963484,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(160,75,79)"
                        }
                    }
                },
                {
                    "name": "\u8ba1\u7b97\u673a",
                    "value": 0.018734578219373715,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(63,112,97)"
                        }
                    }
                },
                {
                    "name": "\u89e3\u51b3\u95ee\u9898",
                    "value": 0.018351544570660162,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(0,94,8)"
                        }
                    }
                },
                {
                    "name": "\u534f\u4f5c",
                    "value": 0.017826049032076872,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(147,155,152)"
                        }
                    }
                },
                {
                    "name": "\u5b9e\u73b0",
                    "value": 0.01712965891346652,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(156,148,32)"
                        }
                    }
                },
                {
                    "name": "springcloud",
                    "value": 0.017044550873754043,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(23,7,21)"
                        }
                    }
                },
                {
                    "name": "hibernate",
                    "value": 0.016505166352432713,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(32,52,76)"
                        }
                    }
                },
                {
                    "name": "\u4e00\u5b9a",
                    "value": 0.0165040164044202,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(35,148,38)"
                        }
                    }
                },
                {
                    "name": "kafka",
                    "value": 0.016375714067315594,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(3,46,128)"
                        }
                    }
                },
                {
                    "name": "mongodb",
                    "value": 0.016321775615183463,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(113,79,92)"
                        }
                    }
                },
                {
                    "name": "\u5408\u4f5c",
                    "value": 0.016307649125495538,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(89,40,80)"
                        }
                    }
                },
                {
                    "name": "io",
                    "value": 0.016289412543904182,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(50,61,19)"
                        }
                    }
                },
                {
                    "name": "mvc",
                    "value": 0.016257049472624904,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(47,111,87)"
                        }
                    }
                },
                {
                    "name": "\u7b97\u6cd5",
                    "value": 0.016250113957582354,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(121,36,67)"
                        }
                    }
                },
                {
                    "name": "\u89c4\u8303",
                    "value": 0.016211327282795757,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(35,15,51)"
                        }
                    }
                },
                {
                    "name": "git",
                    "value": 0.01597656952153781,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(98,56,120)"
                        }
                    }
                },
                {
                    "name": "\u8f6f\u4ef6\u5f00\u53d1",
                    "value": 0.015962061322312322,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(108,65,113)"
                        }
                    }
                },
                {
                    "name": "\u524d\u7aef",
                    "value": 0.015961622096288555,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(144,43,87)"
                        }
                    }
                },
                {
                    "name": "\u6df1\u5165",
                    "value": 0.01587943610887297,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(18,114,78)"
                        }
                    }
                },
                {
                    "name": "jquery",
                    "value": 0.01543718500021648,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(24,58,21)"
                        }
                    }
                },
                {
                    "name": "\u6570\u636e\u7ed3\u6784",
                    "value": 0.015183300223278405,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(125,99,25)"
                        }
                    }
                },
                {
                    "name": "nosql",
                    "value": 0.015016465073585842,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(101,35,144)"
                        }
                    }
                },
                {
                    "name": "css",
                    "value": 0.014897800478895148,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(57,73,33)"
                        }
                    }
                },
                {
                    "name": "\u8f83\u5f3a",
                    "value": 0.014880910861503185,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(90,12,13)"
                        }
                    }
                },
                {
                    "name": "maven",
                    "value": 0.014843862026763016,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(37,24,145)"
                        }
                    }
                },
                {
                    "name": "\u529f\u80fd",
                    "value": 0.01482159311971348,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(134,133,13)"
                        }
                    }
                },
                {
                    "name": "\u7cbe\u795e",
                    "value": 0.01480758888322574,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(68,94,106)"
                        }
                    }
                }
            ],
            "drawOutOfBound": false,
            "textStyle": {
                "emphasis": {}
            }
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
                        jobChart.setOption(option);
                        window.addEventListener("resize",function(){
                            jobChart.resize();
                        });
                    }
                    
});