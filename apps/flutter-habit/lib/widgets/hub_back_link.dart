import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const hubUrl = String.fromEnvironment('HUB_URL', defaultValue: 'http://localhost:3000');

class HubBackLink extends StatelessWidget {
  const HubBackLink({super.key});

  Future<void> _openHub() async {
    final uri = Uri.parse(hubUrl);
    await launchUrl(uri, webOnlyWindowName: '_self');
  }

  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: _openHub,
      icon: const Icon(Icons.arrow_back, size: 18),
      label: const Text('Portfolio Home'),
      style: TextButton.styleFrom(minimumSize: const Size(48, 48)),
    );
  }
}
