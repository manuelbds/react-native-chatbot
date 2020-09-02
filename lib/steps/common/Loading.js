import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
// import { Bubbles } from 'react-native-loader';
import AnimatedEllipsis from 'react-native-animated-ellipsis';


const Loading = (props) => {
  const { custom, color } = props;
  let style = { paddingTop: 6 };

  if (custom) {
    style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  return (
    <View style={style}>
      {/* <Bubbles
        size={3}
        color={color}
      /> */}
      <AnimatedEllipsis numberOfDots={3}
        minOpacity={0.4}
        animationDelay={200}
        style={{
          color: '#94939b',
          fontSize: 30,
          letterSpacing: -4,
          height: 28,
          position: 'relative',
          top: -20
        }} />
    </View>
  );
};

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

Loading.defaultProps = {
  custom: false,
};

export default Loading;
