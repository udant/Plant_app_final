import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase";
import db from "../config";
import navigation from "react-navigation"
import PlantInfoScreen from './PlantInfo';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
export class AnyColorButton extends Component {
    render() {
      return <Button color={this.props.color} title={this.props.title} onPress={this.props.onPress}/>
    }
  }
export default class PlantSelectionScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: [],
            vegies:[],
            flower :[],
            leafy:[],
            kids:[],
            vegiesActive:false,
            flowerActive :false,
            leafyActive:false,
            kidsActive:false

        };
        this.requestRef = null;
      }
    callAll = (name)=>{
        alert(name);
        this.requestRef = db.collection(name).onSnapshot(
        snapshot => {
          var name = snapshot.docs.map(document => document.data());
          this.setState({
            name: name
          });
          alert(this.state.name);0
        },
        error => {
          this.requestRef();
        }
      );
      }
      PlantNavigate = ()=>{
       // this.props.navigation.navigates('PlantInfoScreen');
        alert("helloo");
      }
     /* PlantNavigate2 = ({ navigation }) => {
        this.props.navigation.navigate('PlantInfoScreen');
        alert("helloo");
      };*/
    flower = ()=>{
        this.requestRef = db.collection("Flower").onSnapshot(
        snapshot => {
          var flower = snapshot.docs.map(document => document.data());
          this.setState({
            flower: flower,
            flowerActive:true,
            vegiesActive:false,
            leafyActive:false,
            kidsActive:false
          });

          navigation.navigate('PlantInfo')
         // alert(this.state.flower);
          //this.props.navigation.navigate('DisplayContents')
        },
        error => {
          this.requestRef();
        }
      );
     
          }
      vegies = ()=>{
        this.requestRef = db.collection("Normal_Vegetables").onSnapshot(
        snapshot => {
          var vegies = snapshot.docs.map(document => document.data());
          this.setState({
            vegies: vegies,
            vegiesActive:true,
            flowerActive :false,
            leafyActive:false,
            kidsActive:false

          });
          alert(this.state.vegies);
        },
        error => {
          this.requestRef();
        }
      );
      }
      leafy = ()=>{
        this.requestRef = db.collection("Leafy_Plants").onSnapshot(
        snapshot => {
          var leafy = snapshot.docs.map(document => document.data());
          this.setState({
            leafy: leafy,
            leafyActive:true,
            vegiesActive:false,
            flowerActive :false,
            kidsActive:false
      

          });
          alert(this.state.leafy);
        },
        error => {
          this.requestRef();
        }
      );
      }
      kids = ()=>{
        this.requestRef = db.collection("KidsFriendly").onSnapshot(
        snapshot => {
          var kids = snapshot.docs.map(document => document.data());
          this.setState({
            kids: kids,
            kidsActive:true,
            vegiesActive:false,
            flowerActive :false,
            leafyActive:false,

          });
          alert(this.state.kids);
        },
        error => {
          this.requestRef();
        }
      );
      }
  render() {
    return (
      <View style={{ marginTop: 150 }}>
          <View>
         <AnyColorButton color ="rgb(249,57,240)" title="Flower" onPress={this.flower}/>
         </View>
         <View style={{ marginTop: 50 }}>
         <AnyColorButton color ="rgb(255,0,0)" title="Kids Friendly" onPress={this.kids}/>
         </View>
         <View style={{ marginTop: 50 }}>
         <AnyColorButton color ="rgb(0,207,0)" title="Leafy" onPress={this.leafy}/>
         </View>
         <View style={{ marginTop: 50 }}>
         <AnyColorButton color ="rgb(255,204,0)" title="Vegies" onPress={this.vegies}/>
         </View>
         <View style={{ marginTop: 50 }}>
         <AnyColorButton color ="rgb(255,204,0)" title="Go to Details" onPress={()=>{this.PlantNavigate()}}/>
         <Button title="Go to Home" onPress={() => navigation.navigate('PlantInfoScreen')} />
         </View>
         
        
      </View>
    );
  }
}
const switchNavigator = createSwitchNavigator({
    Selection: { screen: PlantSelectionScreen },
    PlantInfo: { screen: PlantInfoScreen }
  });
  
  const AppContainer = createAppContainer(switchNavigator);
