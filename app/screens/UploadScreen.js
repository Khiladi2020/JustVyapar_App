import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

const UploadScreen = ({ visible: isVisible, progress,onDone }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {},
});

export default UploadScreen;
