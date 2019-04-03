import  React,{ Component } from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container,Header, Body, Title, Content,Card,Left, Icon, Right } from 'native-base'

import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { ECharts } from 'react-native-echarts-wrapper';
const data1 = [["hola"]]
const data =  [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60],["2000-07-25",44],["2000-07-26",127],["2000-07-27",114]]
 class GraficaDos extends Component{
    
    constructor(){
        super()
        
    }
    option = {
        title: {
            text: 'Beijing AQI'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: data.map(function (item) {
                return item[0];
            })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    }
    /* option = {
        title: {
            text: 'Prueba Grafica'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['consumo1','consumo2','consumo3','consumo4','consumo5'],
            //type:'scroll'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            //boundaryGap: false,
            data: ['2018-02-01',
            '2018-02-01',
            '2018-02-02',
            '2018-02-03',
            '2018-02-04',
            '2018-02-05',
            '2018-02-07',
            '2018-02-08',
            '2018-02-09',
            '2018-02-10',
            '2018-02-11',
            '2018-02-12',
            '2018-02-14',
            '2018-02-15',
            '2018-02-16',]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'consumo1',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210,210, 134, 90, 230, 210, 90, 230, 210]
            },
            {
                name:'consumo2',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'consumo3',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'consumo4',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'consumo5',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }; */
                        
    /* option = {
        
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎','邮件营销','联盟广告','视频广告','直接访问','搜索引擎','邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日'],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 90, 230, 210, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310, 90, 230, 210, 90, 230, 210]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410, 90, 230, 210, 90, 230, 210]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320, 90, 230, 210, 90, 230, 210]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320, 90, 230, 210, 90, 230, 210]
            }
        ]
    };
     */
   /*  option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        },{
            data: [829, 1000, 901, 954, 1010, 1200, 1320],
            type: 'line'
        }]
    }; */
   

    
   
    render(){
        /*let sampleData = [
            {x: '2018-01-01', y: 30},
            {x: '2018-01-02', y: 200},
            {x: '2018-01-03', y: 170},
            {x: '2018-01-04', y: 250},
            {x: '2018-01-05', y: 10}
        ]*/
        
          let sampleData = [
                {
                seriesName: 'series1',
                data: [
                    {x: '2018-02-01', y: 30},
                    {x: '2018-02-02', y: 200},
                    {x: '2018-02-03', y: 170},
                    {x: '2018-02-04', y: 250},
                    {x: '2018-02-05', y: 10},
                    {x: '2018-02-06', y: 140},
                    {x: '2018-02-07', y: 550},
                    {x: '2018-02-08', y: 40}
                ],
                color: '#297AB1'
                },
                {
                seriesName: 'series2',
                data: [
                    {x: '2018-02-01', y: 20},
                    {x: '2018-02-02', y: 100},
                    {x: '2018-02-03', y: 140},
                    {x: '2018-02-04', y: 550},
                    {x: '2018-02-05', y: 40},
                    {x: '2018-02-06', y: 140},
                    {x: '2018-02-07', y: 550},
                    {x: '2018-02-08', y: 40}
                ],
                color: 'yellow'
                }
            ]
         
      
        return ( 
            
            <Container>
                <CustomHeader title="Indicadores"  porcentaje="13%" actionEvent={() => this.props.navigation.openDrawer()} ></CustomHeader>
                <Content contentContainerStyle={{flex:1,alignContent:'center'}}>
                    <ECharts option={this.option} ></ECharts>

          

                     
              
                  
                 
                </Content>
            </Container>
        )   
    }
}
export default GraficaDos;
const styles = StyleSheet.create({ 
linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },})