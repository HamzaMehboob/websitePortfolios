import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const hubUrl = String.fromEnvironment('HUB_URL', defaultValue: 'http://localhost:3000');

Future<void> openHub() async {
  final uri = Uri.parse(hubUrl);
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, webOnlyWindowName: '_self');
  }
}

class HubBackLink extends StatelessWidget {
  const HubBackLink({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: openHub,
      icon: const Icon(Icons.arrow_back, size: 18),
      label: const Text('Portfolio Home'),
      style: TextButton.styleFrom(minimumSize: const Size(48, 48)),
    );
  }
}
