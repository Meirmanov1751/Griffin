from rest_framework import serializers
from .models import AuditInitiation, AuditCompletion, AccessMaintenance, AuditExecutionAndTesting, \
    AuditPreparationAndPlanning, ResultsAnalysisAndReporting, DataAnalysisAndDocumentation, VulnerabilityAnalysis, \
    InformationGathering


# Создаем сериализатор для модели AuthenticationViolation
class AuditInitiationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditInitiation
        fields = '__all__'


# Создаем сериализатор для модели AccessControlViolation
class AuditCompletionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditCompletion
        fields = '__all__'


# Создаем сериализатор для модели XXEViolation
class AccessMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessMaintenance
        fields = '__all__'


# Создаем сериализатор для модели SensitiveDataExposure
class AuditExecutionAndTestingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditExecutionAndTesting
        fields = '__all__'


# Создаем сериализатор для модели Injection
class AuditPreparationAndPlanningSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditPreparationAndPlanning
        fields = '__all__'


# Создаем сериализатор для модели SecurityMisconfiguration
class ResultsAnalysisAndReportingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResultsAnalysisAndReporting
        fields = '__all__'


class DataAnalysisAndDocumentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataAnalysisAndDocumentation
        fields = '__all__'


# Создаем сериализатор для модели KnownVulnerabilities
class VulnerabilityAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = VulnerabilityAnalysis
        fields = '__all__'


# Создаем сериализатор для модели InsecureDeserializationAttack
class InformationGatheringSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformationGathering
        fields = '__all__'
