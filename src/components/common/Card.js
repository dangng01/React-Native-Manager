import React from 'react';
import { View } from 'react-native';

// Only purpose is to make a good looking presentational component => functional
const Card = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    borderWidth: 1, // border width with 1px
    borderRadius: 2, // give it rounded corner
    borderColor: '#ddd',
    borderBottomWidth: 0, // hide the border entirely
    // give the shadow so theres elevation. Suggest that this is something that
    // you can pick up and drag
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // shadow offset specifies which side
    // we want the shadow to be on
    // width:0 => no shadow on right or left but height => some shadowing to the
    // bottom
    shadowOpacity: 0.1, // make an item seethrought (0 to 1)
    shadowRadius: 2, // 2px for the radius. Just like the radius, round the
    // corner. Match up with borderRadius
    elevation: 1,
    //margin is used to place some spacings between components
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
