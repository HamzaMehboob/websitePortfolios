import 'package:flutter/material.dart';

ThemeData buildHabitTheme({required Brightness brightness}) {
  final isDark = brightness == Brightness.dark;
  final colorScheme = ColorScheme.fromSeed(
    seedColor: const Color(0xFF14B8A6),
    secondary: const Color(0xFFF59E0B),
    brightness: brightness,
  );

  return ThemeData(
    useMaterial3: true,
    colorScheme: colorScheme,
    scaffoldBackgroundColor: isDark ? const Color(0xFF171717) : const Color(0xFFFAFAFA),
    appBarTheme: const AppBarTheme(centerTitle: false, elevation: 0),
    snackBarTheme: const SnackBarThemeData(behavior: SnackBarBehavior.floating),
  );
}
