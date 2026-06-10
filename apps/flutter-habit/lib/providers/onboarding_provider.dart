import 'package:flutter_riverpod/flutter_riverpod.dart';

/// In-memory onboarding flag (persists for the session; no platform storage needed for demo).
final onboardingCompleteProvider = StateProvider<bool>((ref) => false);
