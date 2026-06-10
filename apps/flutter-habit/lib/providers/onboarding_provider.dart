import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _key = 'onboarding_complete';

class OnboardingNotifier extends StateNotifier<AsyncValue<bool>> {
  OnboardingNotifier() : super(const AsyncValue.loading()) {
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    state = AsyncValue.data(prefs.getBool(_key) ?? false);
  }

  Future<void> complete() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_key, true);
    state = const AsyncValue.data(true);
  }
}

final onboardingCompleteProvider =
    StateNotifierProvider<OnboardingNotifier, AsyncValue<bool>>((ref) {
  return OnboardingNotifier();
});
