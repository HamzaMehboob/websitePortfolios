import 'package:flutter/material.dart';

class PhoneFrame extends StatelessWidget {
  const PhoneFrame({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;

    if (width < 1024) {
      return child;
    }

    return Container(
      color: const Color(0xFF1C1917),
      alignment: Alignment.center,
      child: Container(
        width: 390,
        height: 844,
        margin: const EdgeInsets.symmetric(vertical: 24),
        decoration: BoxDecoration(
          color: Theme.of(context).scaffoldBackgroundColor,
          borderRadius: BorderRadius.circular(36),
          border: Border.all(color: Colors.white24, width: 8),
          boxShadow: const [BoxShadow(blurRadius: 40, color: Colors.black45)],
        ),
        clipBehavior: Clip.antiAlias,
        child: child,
      ),
    );
  }
}
