import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:habit/widgets/hub_back_link.dart';

class AppShell extends StatelessWidget {
  const AppShell({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final location = GoRouterState.of(context).uri.toString();

    int index = 0;
    if (location.startsWith('/habits')) index = 1;
    if (location.startsWith('/stats')) index = 2;
    if (location.startsWith('/settings')) index = 3;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Habit'),
        actions: const [Padding(padding: EdgeInsets.only(right: 8), child: HubBackLink())],
      ),
      body: child,
      bottomNavigationBar: NavigationBar(
        selectedIndex: index,
        height: 64,
        onDestinationSelected: (i) {
          switch (i) {
            case 0:
              context.go('/');
            case 1:
              context.go('/habits');
            case 2:
              context.go('/stats');
            case 3:
              context.go('/settings');
          }
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), selectedIcon: Icon(Icons.home), label: 'Home'),
          NavigationDestination(icon: Icon(Icons.checklist), label: 'Habits'),
          NavigationDestination(icon: Icon(Icons.bar_chart), label: 'Stats'),
          NavigationDestination(icon: Icon(Icons.settings_outlined), selectedIcon: Icon(Icons.settings), label: 'Settings'),
        ],
      ),
    );
  }
}
