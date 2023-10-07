from django.shortcuts import render
from rest_framework import mixins, viewsets

from .models import AssetIdentification, AccessControlAssessment, AuthenticationAuthorizationAssessment, \
    ThreatAssessment, ComplianceAssessment, VulnerabilityAssessment, SecurityPolicyAssessment, \
    NetworkSecurityAudit, PhysicalSecurityAssessment, MonitoringIncidentDetectionAssessment, \
    DataProtectionAndSecurityMonitoring, IncidentRecoveryAndContinuity, UserTrainingAndAwareness
from .paginations import DocumentPagination
from .permissions import IsForMany
from .serializers import AssetIdentificationSerializer, AccessControlAssessmentSerializer, \
    AuthenticationAuthorizationAssessmentSerializer, \
    ThreatAssessmentSerializer, ComplianceAssessmentSerializer, VulnerabilityAssessmentSerializer, \
    SecurityPolicyAssessmentSerializer, NetworkSecurityAuditSerializer, PhysicalSecurityAssessmentSerializer, \
    MonitoringIncidentDetectionAssessmentSerializer, DataProtectionAndSecurityMonitoringSerializer, \
    IncidentRecoveryAndContinuitySerializer, UserTrainingAndAwarenessSerializer


class AssetIdentificationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                 mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AssetIdentification.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AssetIdentificationSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели AccessControlViolation
class AccessControlAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                     mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AccessControlAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AccessControlAssessmentSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели XXEViolation
class AuthenticationAuthorizationAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                                                   mixins.RetrieveModelMixin,
                                                   mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                                                   viewsets.GenericViewSet):
    queryset = AuthenticationAuthorizationAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuthenticationAuthorizationAssessmentSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели SecurityLogging
class ThreatAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                              mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = ThreatAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = ThreatAssessmentSerializer
    permission_classes = [IsForMany]


class ComplianceAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                  mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = ComplianceAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = ComplianceAssessmentSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели SecurityMisconfiguration
class VulnerabilityAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                     mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = VulnerabilityAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = VulnerabilityAssessmentSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели XSSAttack
class SecurityPolicyAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                      mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = SecurityPolicyAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = SecurityPolicyAssessmentSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели KnownVulnerabilities
class NetworkSecurityAuditViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                  mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = NetworkSecurityAudit.objects.all()
    pagination_class = DocumentPagination
    serializer_class = NetworkSecurityAuditSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели InsecureDeserializationAttack
class PhysicalSecurityAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                        mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = PhysicalSecurityAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = PhysicalSecurityAssessmentSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели SecurityLogging
class MonitoringIncidentDetectionAssessmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                                                   mixins.RetrieveModelMixin,
                                                   mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                                                   viewsets.GenericViewSet):
    queryset = MonitoringIncidentDetectionAssessment.objects.all()
    pagination_class = DocumentPagination
    serializer_class = MonitoringIncidentDetectionAssessmentSerializer
    permission_classes = [IsForMany]


class DataProtectionAndSecurityMonitoringViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                                                 mixins.RetrieveModelMixin,
                                                 mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                                                 viewsets.GenericViewSet):
    queryset = DataProtectionAndSecurityMonitoring.objects.all()
    pagination_class = DocumentPagination
    serializer_class = DataProtectionAndSecurityMonitoringSerializer
    permission_classes = [IsForMany]


class IncidentRecoveryAndContinuityViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                           mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = IncidentRecoveryAndContinuity.objects.all()
    pagination_class = DocumentPagination
    serializer_class = IncidentRecoveryAndContinuitySerializer
    permission_classes = [IsForMany]


class UserTrainingAndAwarenessViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                      mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = UserTrainingAndAwareness.objects.all()
    pagination_class = DocumentPagination
    serializer_class = UserTrainingAndAwarenessSerializer
    permission_classes = [IsForMany]
