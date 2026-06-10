import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/models/habit.dart';

class HabitsNotifier extends Notifier<List<Habit>> {
  @override
  List<Habit> build() => List<Habit>.from(mockHabits);

  void completeHabit(String id) {
    state = [
      for (final habit in state)
        if (habit.id == id && !habit.completedToday)
          habit.copyWith(streak: habit.streak + 1, completedToday: true)
        else
          habit,
    ];
  }
}

final habitsProvider = NotifierProvider<HabitsNotifier, List<Habit>>(HabitsNotifier.new);
