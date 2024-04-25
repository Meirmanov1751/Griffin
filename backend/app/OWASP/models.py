from django.db import models

from pentesting.models import Pentest


# Create your models here.
class Injection(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True, related_name="OWASP_injection")
    sql_injection = models.TextField(blank=True, null=True)
    cross_site_scripting = models.TextField(blank=True, null=True)
    xml_injection = models.TextField(blank=True, null=True)
    command_injection = models.TextField(blank=True, null=True)
    ldap_injection = models.TextField(blank=True, null=True)
    nosql_injection = models.TextField(blank=True, null=True)
    server_side_template_injection = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AuthenticationViolation(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_AuthenticationViolation")
    insufficient_authentication = models.TextField(blank=True, null=True)
    insecure_session_management = models.TextField(blank=True, null=True)
    no_session_timeout = models.TextField(blank=True, null=True)
    session_information_leakage = models.TextField(blank=True, null=True)
    weak_passwords = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class SensitiveDataExposure(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_SensitiveDataExposure")
    insufficient_data_encryption = models.TextField(blank=True, null=True)
    weak_encryption_algorithms = models.TextField(blank=True, null=True)
    insecure_password_storage = models.TextField(blank=True, null=True)
    lack_of_authentication_for_sensitive_data_access = models.TextField(blank=True, null=True)
    lack_of_access_control_and_secure_api_authentication = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class XXEViolation(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True, related_name="OWASP_XXEViolation")
    external_xml_entities = models.TextField(blank=True, null=True)
    incorrect_data_filtering = models.TextField(blank=True, null=True)
    remote_file_system_access = models.TextField(blank=True, null=True)
    requests_to_external_resources = models.TextField(blank=True, null=True)
    data_processing_overload = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Нарушение области внешних объектов XML (XXE)'
        verbose_name_plural = 'Нарушения области внешних объектов XML (XXE)'


class AccessControlViolation(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_AccessControlViolation")
    insufficient_role_and_permissions_separation = models.TextField(blank=True, null=True)
    insufficient_data_access_control = models.TextField(blank=True, null=True)
    lack_of_privilege_escalation_protection = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Нарушение области нарушенного контроля доступа'
        verbose_name_plural = 'Нарушения области нарушенного контроля доступа'


class SecurityMisconfiguration(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_SecurityMisconfiguration")
    open_ports_and_services = models.TextField(blank=True, null=True)
    default_passwords_and_accounts = models.TextField(blank=True, null=True)
    insufficient_directory_and_file_protection = models.TextField(blank=True, null=True)
    poorly_configured_databases = models.TextField(blank=True, null=True)
    web_application_vulnerabilities = models.TextField(blank=True, null=True)
    information_leakage = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Нарушение области неправильной конфигурации безопасности'
        verbose_name_plural = 'Нарушения области неправильной конфигурации безопасности'


class XSSAttack(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_XSSAttack")
    reflected_xss = models.TextField(blank=True, null=True)
    stored_xss = models.TextField(blank=True, null=True)
    dom_based_xss = models.TextField(blank=True, null=True)
    blind_xss = models.TextField(blank=True, null=True)
    xss_via_external_resources = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Атака на межсайтовый скриптинг (XSS)'
        verbose_name_plural = 'Атаки на межсайтовый скриптинг (XSS)'


class InsecureDeserializationAttack(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_InsecureDeserializationAttack")
    deserialization_without_data_check = models.TextField(blank=True, null=True)
    malicious_code_execution = models.TextField(blank=True, null=True)
    data_modification = models.TextField(blank=True, null=True)
    session_and_authentication_attacks = models.TextField(blank=True, null=True)
    denial_of_service = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Атака на небезопасную десериализацию'
        verbose_name_plural = 'Атаки на небезопасную десериализацию'


class KnownVulnerabilities(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_KnownVulnerabilities")
    outdated_component_versions = models.TextField(blank=True, null=True)
    lack_of_update_monitoring = models.TextField(blank=True, null=True)
    components_with_known_vulnerabilities = models.TextField(blank=True, null=True)
    version_information_leakage = models.TextField(blank=True, null=True)
    cascading_impact = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Известные уязвимости в компонентах'
        verbose_name_plural = 'Известные уязвимости в компонентах'


class SecurityLogging(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="OWASP_SecurityLogging")
    insufficient_event_logging = models.TextField(blank=True, null=True)
    lack_of_alerts_and_notifications = models.TextField(blank=True, null=True)
    delay_in_incident_detection = models.TextField(blank=True, null=True)
    insufficient_log_retention = models.TextField(blank=True, null=True)
    absence_of_security_analytics = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'

    class Meta:
        verbose_name = 'Недостаточно подробные журналах и слабый мониторинx'
        verbose_name_plural = 'Недостаточно подробные журналы и слабый мониторинг '