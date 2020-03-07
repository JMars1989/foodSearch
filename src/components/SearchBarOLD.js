import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputOneStyle}
        placeholder="Search Food"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}

        // label={"Field 1"}
        // blurOnSubmit={false}
        // returnKeyType={'next'}
        // onSubmitEditing={() => { focusTheField('field2'); }}
      />
      {/* <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputTwoStyle}
        placeholder="Search Location"

        ref={input => { inputs['field2'] = input }}
        label={"Field 2"}
      /> */}
    </View>
  );
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
  inputStyle: {
    // flex: 1,
    fontSize: 18,
    // width: 100
  },
  iconOneStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
