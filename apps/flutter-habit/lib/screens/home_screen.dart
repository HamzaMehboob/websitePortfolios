import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/providers/habits_provider.dart';

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final habits = ref.watch(habitsProvider);
    final reduceMotion = MediaQuery.disableAnimationsOf(context);

    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text('Today', style: Theme.of(context).textTheme.headlineSmall),
        const SizedBox(height: 8),
        Text('${habits.where((h) => h.completedToday).length} of ${habits.length} complete'),
        const SizedBox(height: 16),
        ...habits.take(4).map((habit) {
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: ListTile(
              contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              minVerticalPadding: 12,
              title: Text(habit.title),
              subtitle: Text('🔥 ${habit.streak} day streak'),
              trailing: IconButton(
                iconSize: 28,
                constraints: const BoxConstraints(minWidth: 48, minHeight: 48),
                icon: Icon(
                  habit.completedToday ? Icons.check_circle : Icons.circle_outlined,
                  color: habit.completedToday ? Colors.green : null,
                ),
                onPressed: habit.completedToday
                    ? null
                    : () {
                        ref.read(habitsProvider.notifier).completeHabit(habit.id);
                        if (!reduceMotion) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text('${habit.title} completed!'),
                              duration: const Duration(seconds: 2),
                            ),
                          );
                        }
                      },
              ),
            ),
          );
        }),
      ],
    );
  }
}
