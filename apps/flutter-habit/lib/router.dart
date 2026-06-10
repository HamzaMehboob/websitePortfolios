import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:habit/providers/onboarding_provider.dart';
import 'package:habit/screens/habits_screen.dart';
import 'package:habit/screens/home_screen.dart';
import 'package:habit/screens/onboarding_screen.dart';
import 'package:habit/screens/settings_screen.dart';
import 'package:habit/screens/stats_screen.dart';
import 'package:habit/shell/app_shell.dart';

final goRouterProvider = Provider<GoRouter>((ref) {
  final complete = ref.watch(onboardingCompleteProvider);

  return GoRouter(
    initialLocation: '/onboarding',
    redirect: (context, state) {
      final onOnboarding = state.matchedLocation == '/onboarding';
      if (!complete && !onOnboarding) return '/onboarding';
      if (complete && onOnboarding) return '/';
      return null;
    },
    routes: [
      GoRoute(path: '/onboarding', builder: (_, __) => const OnboardingScreen()),
      ShellRoute(
        builder: (_, __, child) => AppShell(child: child),
        routes: [
          GoRoute(path: '/', builder: (_, __) => const HomeScreen()),
          GoRoute(path: '/habits', builder: (_, __) => const HabitsScreen()),
          GoRoute(path: '/stats', builder: (_, __) => const StatsScreen()),
          GoRoute(path: '/settings', builder: (_, __) => const SettingsScreen()),
        ],
      ),
    ],
  );
});
