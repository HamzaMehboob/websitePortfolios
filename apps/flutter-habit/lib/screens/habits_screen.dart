import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/providers/habits_provider.dart';

class HabitsScreen extends ConsumerWidget {
  const HabitsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final habits = ref.watch(habitsProvider);

    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: habits.length,
      itemBuilder: (context, i) {
        final habit = habits[i];
        return Card(
          child: ListTile(
            minVerticalPadding: 12,
            title: Text(habit.title),
            subtitle: Text('Streak: ${habit.streak} days'),
            trailing: habit.completedToday ? const Icon(Icons.check, color: Colors.green) : null,
          ),
        );
      },
    );
  }
}
