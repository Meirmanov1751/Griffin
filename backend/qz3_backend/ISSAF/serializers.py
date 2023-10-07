from rest_framework import serializers
from .models import AssetIdentification, AccessControlAssessment, AuthenticationAuthorizationAssessment, \
    ThreatAssessment, ComplianceAssessment, VulnerabilityAssessment, SecurityPolicyAssessment, \
    NetworkSecurityAudit, PhysicalSecurityAssessment, MonitoringIncidentDetectionAssessment, \
    DataProtectionAndSecurityMonitoring, IncidentRecoveryAndContinuity, UserTrainingAndAwareness


# Создаем сериализатор для модели AuthenticationViolation
class AssetIdentificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssetIdentification
        fields = '__all__'


# Создаем сериализатор для модели AccessControlViolation
class AccessControlAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessControlAssessment
        fields = '__all__'


# Создаем сериализатор для модели XXEViolation
class AuthenticationAuthorizationAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthenticationAuthorizationAssessment
        fields = '__all__'


# Создаем сериализатор для модели SensitiveDataExposure1
class ThreatAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThreatAssessment
        fields = '__all__'


# Создаем сериализатор для модели Injection2
class ComplianceAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplianceAssessment
        fields = '__all__'


# Создаем сериализатор для модели SecurityMisconfiguration3
class VulnerabilityAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VulnerabilityAssessment
        fields = '__all__'


class SecurityPolicyAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecurityPolicyAssessment
        fields = '__all__'


# Создаем сериализатор для модели KnownVulnerabilities
class NetworkSecurityAuditSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetworkSecurityAudit
        fields = '__all__'


# Создаем сериализатор для модели InsecureDeserializationAttack
class PhysicalSecurityAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicalSecurityAssessment
        fields = '__all__'


# Создаем сериализатор для модели XSSAttack
class MonitoringIncidentDetectionAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonitoringIncidentDetectionAssessment
        fields = '__all__'

# Создаем сериализатор для модели XSSAttack


class DataProtectionAndSecurityMonitoringSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataProtectionAndSecurityMonitoring
        fields = '__all__'

# Создаем сериализатор для модели XSSAttack


class IncidentRecoveryAndContinuitySerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidentRecoveryAndContinuity
        fields = '__all__'

# Создаем сериализатор для модели XSSAttack


class UserTrainingAndAwarenessSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTrainingAndAwareness
        fields = '__all__'
