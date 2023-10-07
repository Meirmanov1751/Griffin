# Generated by Django 4.2 on 2023-10-04 13:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pentesting', '0003_pentest_osint'),
    ]

    operations = [
        migrations.CreateModel(
            name='XXEViolation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('external_xml_entities', models.TextField(blank=True, null=True)),
                ('incorrect_data_filtering', models.TextField(blank=True, null=True)),
                ('remote_file_system_access', models.TextField(blank=True, null=True)),
                ('requests_to_external_resources', models.TextField(blank=True, null=True)),
                ('data_processing_overload', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='XXEViolation', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Нарушение области внешних объектов XML (XXE)',
                'verbose_name_plural': 'Нарушения области внешних объектов XML (XXE)',
            },
        ),
        migrations.CreateModel(
            name='XSSAttack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reflected_xss', models.TextField(blank=True, null=True)),
                ('stored_xss', models.TextField(blank=True, null=True)),
                ('dom_based_xss', models.TextField(blank=True, null=True)),
                ('blind_xss', models.TextField(blank=True, null=True)),
                ('xss_via_external_resources', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='XSSAttack', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Атака на межсайтовый скриптинг (XSS)',
                'verbose_name_plural': 'Атаки на межсайтовый скриптинг (XSS)',
            },
        ),
        migrations.CreateModel(
            name='SensitiveDataExposure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insufficient_data_encryption', models.TextField(blank=True, null=True)),
                ('weak_encryption_algorithms', models.TextField(blank=True, null=True)),
                ('insecure_password_storage', models.TextField(blank=True, null=True)),
                ('lack_of_authentication_for_sensitive_data_access', models.TextField(blank=True, null=True)),
                ('lack_of_access_control_and_secure_api_authentication', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='SensitiveDataExposure', to='pentesting.pentest')),
            ],
        ),
        migrations.CreateModel(
            name='SecurityMisconfiguration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('open_ports_and_services', models.TextField(blank=True, null=True)),
                ('default_passwords_and_accounts', models.TextField(blank=True, null=True)),
                ('insufficient_directory_and_file_protection', models.TextField(blank=True, null=True)),
                ('poorly_configured_databases', models.TextField(blank=True, null=True)),
                ('web_application_vulnerabilities', models.TextField(blank=True, null=True)),
                ('information_leakage', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='SecurityMisconfiguration', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Нарушение области неправильной конфигурации безопасности',
                'verbose_name_plural': 'Нарушения области неправильной конфигурации безопасности',
            },
        ),
        migrations.CreateModel(
            name='SecurityLogging',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insufficient_event_logging', models.TextField(blank=True, null=True)),
                ('lack_of_alerts_and_notifications', models.TextField(blank=True, null=True)),
                ('delay_in_incident_detection', models.TextField(blank=True, null=True)),
                ('insufficient_log_retention', models.TextField(blank=True, null=True)),
                ('absence_of_security_analytics', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='SecurityLogging', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Недостаточно подробные журналах и слабый мониторинx',
                'verbose_name_plural': 'Недостаточно подробные журналы и слабый мониторинг ',
            },
        ),
        migrations.CreateModel(
            name='KnownVulnerabilities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('outdated_component_versions', models.TextField(blank=True, null=True)),
                ('lack_of_update_monitoring', models.TextField(blank=True, null=True)),
                ('components_with_known_vulnerabilities', models.TextField(blank=True, null=True)),
                ('version_information_leakage', models.TextField(blank=True, null=True)),
                ('cascading_impact', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='KnownVulnerabilities', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Известные уязвимости в компонентах',
                'verbose_name_plural': 'Известные уязвимости в компонентах',
            },
        ),
        migrations.CreateModel(
            name='InsecureDeserializationAttack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deserialization_without_data_check', models.TextField(blank=True, null=True)),
                ('malicious_code_execution', models.TextField(blank=True, null=True)),
                ('data_modification', models.TextField(blank=True, null=True)),
                ('session_and_authentication_attacks', models.TextField(blank=True, null=True)),
                ('denial_of_service', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='InsecureDeserializationAttack', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Атака на небезопасную десериализацию',
                'verbose_name_plural': 'Атаки на небезопасную десериализацию',
            },
        ),
        migrations.CreateModel(
            name='Injection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sql_injection', models.TextField(blank=True, null=True)),
                ('cross_site_scripting', models.TextField(blank=True, null=True)),
                ('xml_injection', models.TextField(blank=True, null=True)),
                ('command_injection', models.TextField(blank=True, null=True)),
                ('ldap_injection', models.TextField(blank=True, null=True)),
                ('nosql_injection', models.TextField(blank=True, null=True)),
                ('server_side_template_injection', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='injection', to='pentesting.pentest')),
            ],
        ),
        migrations.CreateModel(
            name='AuthenticationViolation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insufficient_authentication', models.TextField(blank=True, null=True)),
                ('insecure_session_management', models.TextField(blank=True, null=True)),
                ('no_session_timeout', models.TextField(blank=True, null=True)),
                ('session_information_leakage', models.TextField(blank=True, null=True)),
                ('weak_passwords', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='AuthenticationViolation', to='pentesting.pentest')),
            ],
        ),
        migrations.CreateModel(
            name='AccessControlViolation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insufficient_role_and_permissions_separation', models.TextField(blank=True, null=True)),
                ('insufficient_data_access_control', models.TextField(blank=True, null=True)),
                ('lack_of_privilege_escalation_protection', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('pentest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='AccessControlViolation', to='pentesting.pentest')),
            ],
            options={
                'verbose_name': 'Нарушение области нарушенного контроля доступа',
                'verbose_name_plural': 'Нарушения области нарушенного контроля доступа',
            },
        ),
    ]
