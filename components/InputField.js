import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  rightIcon,
  fieldButtonFunction,
  passwordVisibility,
  onChangeText
})
{
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={!passwordVisibility}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
}