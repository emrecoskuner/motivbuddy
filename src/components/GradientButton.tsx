import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';

import { radius, spacing } from '../constants/theme';

type GradientButtonProps = {
  label: string;
  onPress?: () => void;
};

export function GradientButton({ label, onPress }: GradientButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <LinearGradient colors={['#7C3AED', '#2563EB']} style={styles.gradient}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  gradient: {
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
