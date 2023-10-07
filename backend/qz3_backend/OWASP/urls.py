from django.urls import path

from rest_framework.routers import DefaultRouter
from .views import AuthenticationViolationViewSet, SecurityLoggingViewSet, XXEViolationViewSet, InjectionViewSet, \
    KnownVulnerabilitiesViewSet, XSSAttackViewSet, SecurityMisconfigurationViewSet, SensitiveDataExposureViewSet, \
    AccessControlViolationViewSet, InsecureDeserializationAttackViewSet

router = DefaultRouter()

router.register('OWASP/AuthenticationViolation', AuthenticationViolationViewSet)
router.register('OWASP/SecurityLogging', SecurityLoggingViewSet)
router.register('OWASP/XXEViolation', XXEViolationViewSet)
router.register('OWASP/Injection', InjectionViewSet)
router.register('OWASP/KnownVulnerabilities', KnownVulnerabilitiesViewSet)
router.register('OWASP/XSSAttack', XSSAttackViewSet)
router.register('OWASP/SecurityMisconfiguration', SecurityMisconfigurationViewSet)
router.register('OWASP/SensitiveDataExposure', SensitiveDataExposureViewSet)
router.register('OWASP/AccessControlViolation', AccessControlViolationViewSet)
router.register('OWASP/InsecureDeserializationAttack', InsecureDeserializationAttackViewSet)