from django.contrib import admin

from .models import AssetIdentification, AccessControlAssessment, AuthenticationAuthorizationAssessment,\
    ThreatAssessment, ComplianceAssessment, VulnerabilityAssessment, SecurityPolicyAssessment, \
    NetworkSecurityAudit, PhysicalSecurityAssessment, MonitoringIncidentDetectionAssessment, \
    DataProtectionAndSecurityMonitoring, IncidentRecoveryAndContinuity, UserTrainingAndAwareness

# Register your models here.
admin.site.register(AssetIdentification)
admin.site.register(AccessControlAssessment)
admin.site.register(AuthenticationAuthorizationAssessment)
admin.site.register(ThreatAssessment)
admin.site.register(ComplianceAssessment)
admin.site.register(VulnerabilityAssessment)
admin.site.register(SecurityPolicyAssessment)
admin.site.register(NetworkSecurityAudit)
admin.site.register(PhysicalSecurityAssessment)
admin.site.register(MonitoringIncidentDetectionAssessment)
admin.site.register(DataProtectionAndSecurityMonitoring)
admin.site.register(IncidentRecoveryAndContinuity)
admin.site.register(UserTrainingAndAwareness)