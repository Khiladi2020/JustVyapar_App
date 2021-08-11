import React, { useState } from 'react';
import {
  View,
  TextInput,
  Modal,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import AppScreen from './AppScreen';
import PickerItem from './PickerItem';
import colors from '../config/colors';

const AppPicker = ({
  icon,
  numberOfColumns=1,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  width = '100%',
  PickerItemComponent = PickerItem
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.grey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          numColumns={numberOfColumns}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  placeholder: {
    flex: 1,
    color: colors.grey,
  },
  text: {
    flex: 1,
    color: colors.darkGrey,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
