import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

class SearchBar extends Component {
  //= ({ term, onTermChange, onTermSubmit }) 

  // variable to hold the references of the textfields
  inputs = {};
  // function to focus the field
  focusTheField = (id) => {
    this.inputs[id].focus();
  }


  render() {
    //const { term, onTermChange, onTermSubmit } = this.props;
    const { foodTypeTerm, locationTerm, onFoodTermChange, onLocationTermChange, onTermSubmit } = this.props;

    return (
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputOneStyle}
          placeholder="Search Food"
          // value={term}                //comment out
          // onChangeText={onTermChange} //comment out
          // onEndEditing={onTermSubmit} //comment out



          label={"Field 1"}
          blurOnSubmit={false}
          returnKeyType={'next'}
          onSubmitEditing={() => { this.focusTheField('field2'); }}

          value = { foodTypeTerm }
          onChangeText = {onFoodTermChange}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputTwoStyle}
          placeholder="Search Location"

          ref={input => { this.inputs['field2'] = input }}
          label={"Field 2"}

          value = { locationTerm }
          onChangeText = {onLocationTermChange}
          onEndEditing={onTermSubmit} 
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputOneStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputTwoStyle: {
    flex: 1,
    fontSize: 18,
  }
});

export default SearchBar;
