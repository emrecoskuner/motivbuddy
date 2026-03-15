import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';

import { borderRadius, colors, spacing } from '../constants/theme';

type GradientButtonProps = {
  label: string;
  onPress?: () => void;
};

export function GradientButton({ label, onPress }: GradientButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <LinearGradient colors={[colors.primaryStart, colors.primaryEnd]} style={styles.gradient}>
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  gradient: {
    borderRadius: borderRadius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
