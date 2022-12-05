import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress })
{
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#011945',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 18,
          color: '#ff8648',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}