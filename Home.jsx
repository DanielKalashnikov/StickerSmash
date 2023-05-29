import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {
  TextInput,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Information</Text>
            {/*LABEL FOR THE TEXT INPUTS*/}
            <View>
            <View style={styles.labelContainer}>
                <Text>Name</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter Name" />
            </View>

        </View>
        
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  textBox:{
    borderWidth:2,
    borderColor: 'white',
    margin:8,
    borderRadius:8,
    padding: 8,
}, 

fieldSet:{
  margin: 10,
  paddingHorizontal: 10,
  paddingBottom: 10,
  borderRadius: 5,
  borderWidth: 1,
  alignItems: 'center',
  borderColor: '#000'
},
labelContainer: {
  backgroundColor: "white", // Same color as background
  alignSelf: "flex-start", // Have View be same width as Text inside
  paddingHorizontal: 3, // Amount of spacing between border and first/last letter
  marginStart: 10, // How far right do you want the label to start
  zIndex: 1, // Label must overlap border
  elevation: 1, // Needed for android
  shadowColor: "white", // Same as background color because elevation: 1 creates a shadow that we don't want
  position: "absolute", // Needed to be able to precisely overlap label with border
  top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
},
inputContainer: {
  borderWidth: 1, // Create border
  borderRadius: 8, // Not needed. Just make it look nicer.
  padding: 8, // Also used to make it look nicer
  zIndex: 0, // Ensure border has z-index of 0
},

});

export default App;