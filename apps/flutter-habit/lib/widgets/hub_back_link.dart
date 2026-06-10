import 'package:flutter/material.dart';
import 'package:habit/utils/open_url.dart';

const hubUrl = String.fromEnvironment('HUB_URL', defaultValue: 'http://localhost:3000');

class HubBackLink extends StatelessWidget {
  const HubBackLink({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: () => openUrl(hubUrl),
      icon: const Icon(Icons.arrow_back, size: 18),
      label: const Text('Portfolio Home'),
      style: TextButton.styleFrom(minimumSize: const Size(48, 48)),
    );
  }
}
