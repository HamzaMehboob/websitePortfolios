import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/models/habit.dart';

class HabitsNotifier extends StateNotifier<List<Habit>> {
  HabitsNotifier() : super(List.from(mockHabits));

  void completeHabit(String id) {
    state = [
      for (final h in state)
        if (h.id == id && !h.completedToday)
          h.copyWith(streak: h.streak + 1, completedToday: true)
        else
          h,
    ];
  }

  int get weeklyCompletions => state.where((h) => h.completedToday).length;
}

final habitsProvider = StateNotifierProvider<HabitsNotifier, List<Habit>>((ref) {
  return HabitsNotifier();
});
