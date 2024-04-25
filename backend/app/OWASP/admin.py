from django.contrib import admin

from .models import AuthenticationViolation, AccessControlViolation, XXEViolation, SensitiveDataExposure, Injection, \
    SecurityMisconfiguration, KnownVulnerabilities, InsecureDeserializationAttack, XSSAttack, SecurityLogging

# Register your models here.
admin.site.register(AuthenticationViolation)
admin.site.register(XSSAttack)
admin.site.register(AccessControlViolation)
admin.site.register(SecurityMisconfiguration)
admin.site.register(SecurityLogging)
admin.site.register(XXEViolation)
admin.site.register(SensitiveDataExposure)
admin.site.register(Injection)
admin.site.register(KnownVulnerabilities)
admin.site.register(InsecureDeserializationAttack)