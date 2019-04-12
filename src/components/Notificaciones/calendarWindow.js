import  React,{ Component } from 'react'
import {StyleSheet,Text,View,ScrollView,TouchableHighlight,Image, FlatList,TouchableOpacity, Button} from "react-native";
import {Container,Content,Card,CardItem,Body,Icon, } from 'native-base'
import SearchBar from 'react-native-searchbar';
import CustomHeader from '../layouts/CustomHeader'
import Color from '../../../config/color'
import API from  '../../../utils/requests/apiRequests'
import moment from 'moment' 
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar,} from "react-native-calendars";
import * as actions from '../../actionsCreators/actions'
import {connect} from 'react-redux'
/* var localLocale = moment();
moment.locale('es'); */


 class CalendarWindow extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        
        };
        this.onDayPress = this.onDayPress.bind(this);
      }
    componentDidMount = () =>{
        console.log(this.props.data)
        this.setState({
            maxDate : moment().format("YYYY-MM-DD")
        })
    }
  
      
    onDayPress(day) {
        const { navigation } = this.props;
        const data = navigation.getParam('data', 'NO-DATA');
        let filtroData = data.filter(n=>n.dateNotification.slice(0, 10)===day.dateString)
        console.log(filtroData)
        this.props.setDate({
            data:filtroData,
            date:day.dateString
        })
        this.props.navigation.goBack()
        this.setState({
          
          selected: day.dateString
          //dateSelected: new Date(day.dateString).toISOString()
        });
        /* var today = new Date();
        var hours = today.getHours(); */
        console.log(day);
        /* this.props.stateChange("dateSelectedCalendarToShow", day.dateString);
        this.props.stateChange(
          "dateSelectedCalendar",
          new Date(day.year, day.month - 1, day.day, 5)
        ); */
      }


   

    render(){
        /* const { navigation } = this.props;
        const historicos = navigation.getParam('data', 'NO-DATA'); */
        return ( 
            <Container style={{backgroundColor:"rgb(255,255,255)"}}>
                {
                    this.state.searchBar ? (
                        <SearchBar
                            ref={(ref) => this.searchBar = ref}
                            data={this.state.copyData}
                            handleResults={this._handleResults}
                            showOnLoad
                            placeholder={"Buscar"}
                            onBack = {()=> {console.log("Atras presionado")
                            //this.searchBar.hide()
                            this.setState({data:this.state.copyData,
                            searchBar:false})}}
                            />
                    ): (
                        null
                    )
                }
                
                <CustomHeader  title="Calendario" porcentaje="16%" 
                search={false}
                back={true} 
                actionEvent={() => this.props.navigation.goBack()} 
                searchAction= {()=> this.setState({
                    searchBar:true
                })}  
                ></CustomHeader>
                <Content contentContainerStyle={{flex:1,padding:10,paddingTop:5,marginBottom:5
                }}
                >

                <Calendar
                onDayPress={this.onDayPress}
                style={stylesCalendar.calendar}
                //hideExtraDays
                maxDate={this.state.maxDate}
                //this.props.minDate.slice(6,10)
                //current={(this.state.selected) ? this.state.selected : ((this.props.minDate === "12/32/2018") ? ("01/01/" + (parseInt(this.props.minDate.substr(this.props.minDate.length-4,this.props.minDate.length))+1)) : this.props.minDate)}
                //minDate={(this.props.minDate === "12/32/2018") ? ("01/01/" + (parseInt(this.props.minDate.substr(this.props.minDate.length-4,this.props.minDate.length))+1)) : this.props.minDate}
                markedDates={{
                  [this.state.selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: "orange"
                  }
                }}
              />
                    
                </Content>
                
            </Container>
        )   
    }
} 


const stylesCalendar = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: "#eee",
      height: 350
    },
    text: {
      textAlign: "center",
      borderColor: "#bbb",
      padding: 10,
      backgroundColor: "#eee"
    },
    container: {
      flex: 1,
      backgroundColor: "gray"
    }
  });
  

export default connect(null,actions)(CalendarWindow);