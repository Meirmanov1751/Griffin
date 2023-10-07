from django.urls import path

from rest_framework.routers import DefaultRouter
from .views import AssetIdentificationViewSet, VulnerabilityAssessmentViewSet, \
    MonitoringIncidentDetectionAssessmentViewSet, IncidentRecoveryAndContinuityViewSet, UserTrainingAndAwarenessViewSet, \
    ThreatAssessmentViewSet, ComplianceAssessmentViewSet, AccessControlAssessmentViewSet, \
    AuthenticationAuthorizationAssessmentViewSet, PhysicalSecurityAssessmentViewSet, NetworkSecurityAuditViewSet, \
    SecurityPolicyAssessmentViewSet, DataProtectionAndSecurityMonitoringViewSet

router = DefaultRouter()

router.register('ISSAF/AssetIdentification', AssetIdentificationViewSet)
router.register('ISSAF/VulnerabilityAssessment', VulnerabilityAssessmentViewSet)
router.register('ISSAF/MonitoringIncidentDetectionAssessment', MonitoringIncidentDetectionAssessmentViewSet)
router.register('ISSAF/IncidentRecoveryAndContinuity', IncidentRecoveryAndContinuityViewSet)
router.register('ISSAF/UserTrainingAndAwareness', UserTrainingAndAwarenessViewSet)
router.register('ISSAF/ThreatAssessment', ThreatAssessmentViewSet)
router.register('ISSAF/ComplianceAssessment', ComplianceAssessmentViewSet)
router.register('ISSAF/AccessControlAssessment', AccessControlAssessmentViewSet)
router.register('ISSAF/AuthenticationAuthorizationAssessment', AuthenticationAuthorizationAssessmentViewSet)
router.register('ISSAF/PhysicalSecurityAssessment', PhysicalSecurityAssessmentViewSet)
router.register('ISSAF/NetworkSecurityAudit', NetworkSecurityAuditViewSet)
router.register('ISSAF/SecurityPolicyAssessment', SecurityPolicyAssessmentViewSet)
router.register('ISSAF/DataProtectionAndSecurityMonitoring', DataProtectionAndSecurityMonitoringViewSet)
