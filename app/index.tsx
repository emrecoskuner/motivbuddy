import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FeatureCard } from '../src/components/FeatureCard';
import { GradientButton } from '../src/components/GradientButton';
import { colors, radius, spacing } from '../src/constants/theme';

const features = [
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
];

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.title}>MotivBuddy</Text>
          <Text style={styles.subtitle}>
            Achieve your goals together. Stay motivated with friends, AI planning, and gamification.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </View>

        <View style={styles.actions}>
          <GradientButton label="Get Started" onPress={() => undefined} />
          <Pressable onPress={() => undefined} style={styles.loginLinkWrapper}>
            <Text style={styles.loginText}>Log In</Text>
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
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    gap: spacing.xl,
    justifyContent: 'space-between',
  },
  heroSection: {
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 340,
  },
  featuresSection: {
    gap: spacing.md,
  },
  actions: {
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  loginLinkWrapper: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.md,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.link,
  },
});
