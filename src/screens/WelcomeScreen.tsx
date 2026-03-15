import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FeatureCard } from '../components/FeatureCard';
import { GradientButton } from '../components/GradientButton';
import { borderRadius, colors, spacing } from '../constants/theme';

const featureItems = [
  {
    title: 'Track Goals',
    description: 'Set and crush personal or shared goals',
  },
  {
    title: 'Stay Accountable',
    description: 'Friends keep you motivated every day',
  },
  {
    title: 'AI-Powered Plans',
    description: 'Smart daily tasks generated for you',
  },
] as const;

export function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>MotivBuddy</Text>
          <Text style={styles.subtitle}>
            Achieve your goals together. Stay motivated with friends, AI planning, and gamification.
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {featureItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </View>

        <View style={styles.actions}>
          <GradientButton label="Get Started" onPress={() => undefined} />
          <Pressable onPress={() => undefined} style={styles.loginLinkWrapper}>
            <Text style={styles.loginLink}>Log In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },
  header: {
    gap: spacing.md,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
  },
  cardsContainer: {
    gap: spacing.md,
  },
  actions: {
    marginTop: spacing.sm,
    alignItems: 'center',
    gap: spacing.md,
  },
  loginLinkWrapper: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.link,
  },
});
