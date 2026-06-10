import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/router.dart';
import 'package:habit/theme.dart';
import 'package:habit/widgets/phone_frame.dart';

final themeModeProvider = StateProvider<ThemeMode>((ref) => ThemeMode.light);

class HabitApp extends ConsumerWidget {
  const HabitApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeModeProvider);
    final router = ref.watch(goRouterProvider);

    return MaterialApp.router(
      title: 'Habit',
      theme: buildHabitTheme(brightness: Brightness.light),
      darkTheme: buildHabitTheme(brightness: Brightness.dark),
      themeMode: themeMode,
      routerConfig: router,
      builder: (context, child) => PhoneFrame(child: child ?? const SizedBox()),
    );
  }
}
