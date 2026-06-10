class Habit {
  Habit({
    required this.id,
    required this.title,
    required this.streak,
    this.completedToday = false,
  });

  final String id;
  final String title;
  final int streak;
  final bool completedToday;

  Habit copyWith({int? streak, bool? completedToday}) {
    return Habit(
      id: id,
      title: title,
      streak: streak ?? this.streak,
      completedToday: completedToday ?? this.completedToday,
    );
  }
}

final mockHabits = [
  Habit(id: '1', title: 'Morning meditation', streak: 12),
  Habit(id: '2', title: 'Drink 8 glasses of water', streak: 5),
  Habit(id: '3', title: 'Evening walk', streak: 21),
  Habit(id: '4', title: 'Read 20 pages', streak: 3),
  Habit(id: '5', title: 'Stretch routine', streak: 8),
  Habit(id: '6', title: 'Journal reflection', streak: 0),
];
