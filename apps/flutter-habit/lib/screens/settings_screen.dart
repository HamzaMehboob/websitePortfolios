import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:habit/app.dart';
import 'package:habit/widgets/hub_back_link.dart';

class SettingsScreen extends ConsumerWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeModeProvider);

    return ListView(
      children: [
        const ListTile(
          leading: CircleAvatar(child: Icon(Icons.person)),
          title: Text('Demo User'),
          subtitle: Text('habit@demo.app'),
        ),
        const Divider(),
        SwitchListTile(
          title: const Text('Daily reminders'),
          subtitle: const Text('Mock toggle'),
          value: true,
          onChanged: (_) {},
        ),
        SwitchListTile(
          title: const Text('Dark mode'),
          value: themeMode == ThemeMode.dark,
          onChanged: (v) {
            ref.read(themeModeProvider.notifier).state = v ? ThemeMode.dark : ThemeMode.light;
          },
        ),
        const ListTile(title: Text('About Habit'), subtitle: Text('Wellness tracker demo v1.0')),
        const Divider(),
        const Padding(
          padding: EdgeInsets.all(16),
          child: HubBackLink(),
        ),
      ],
    );
  }
}
