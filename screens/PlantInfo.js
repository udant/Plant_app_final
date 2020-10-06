import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";
import PlantSelectionScreen from "../screens/PlantSelection";

export default class PlantInfoScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedBooksList: [],
      vegies:PlantSelectionScreen.state.vegies,
      flower :PlantSelectionScreen.state.flower,
      leafy:PlantSelectionScreen.state.leafy,
      kids:PlantSelectionScreen.state.kids,
      vegiesActive:PlantSelectionScreen.state.vegiesActive,
      flowerActive :PlantSelectionScreen.state.flowerActive,
      leafyActive:PlantSelectionScreen.state.leafyActive,
      kidsActive:PlantSelectionScreen.state.kidsActive
    };
    this.requestRef = null;
  }

  componentDidMount() {
    this.getRequestedProductsList();
  }

  getRequestedProductsList = () => {
   if (vegiesActive===true){
   <FlatList>{this.state.vegies}</FlatList>
   }else if (flowerActive ===true){
    <FlatList>{this.state.flower}</FlatList>
    }else if (leafyActive ===true){
      <FlatList>{this.state.leafy}</FlatList>
      }else if (kidsActive ===true){
        <FlatList>{this.state.kids}</FlatList>
        }
  };

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <Icon
            name={"open-in-new"}
            type={"material-icons"}
            size={30}
            color={"#6fc0b8"}
            containerStyle={{
              width: 100,
              alignItems: "flex-end"
            }}
          />
        }
        bottomDivider
      />
     /* <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <Icon
            name={"open-in-new"}
            type={"material-icons"}
            size={30}
            color={"#6fc0b8"}
            containerStyle={{
              width: 100,
              alignItems: "flex-end"
            }}
          />
        }
        bottomDivider
      />*/
    );
  };

  render() {
    var { requestedBooksList } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader title={"Plants"} />
        {this.state.requestedBooksList.length === 0 ? (
          <View style={styles.emptyListContainer}>
            <Text style={styles.title}>List Of All Plants Available</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={requestedBooksList}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
