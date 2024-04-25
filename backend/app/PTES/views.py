from django.shortcuts import render
from rest_framework import mixins, viewsets

from .models import AuditInitiation, AuditCompletion, AccessMaintenance, AuditExecutionAndTesting, \
    AuditPreparationAndPlanning, ResultsAnalysisAndReporting, DataAnalysisAndDocumentation, VulnerabilityAnalysis, \
    InformationGathering
from .paginations import DocumentPagination
from .permissions import IsForMany
from .serializers import AuditInitiationSerializer, AuditCompletionSerializer, \
    AccessMaintenanceSerializer, \
    AuditExecutionAndTestingSerializer, AuditPreparationAndPlanningSerializer, ResultsAnalysisAndReportingSerializer, \
    DataAnalysisAndDocumentationSerializer, VulnerabilityAnalysisSerializer, InformationGatheringSerializer


class AuditInitiationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AuditInitiation.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuditInitiationSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели AccessControlViolation
class AuditCompletionViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AuditCompletion.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuditCompletionSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели XXEViolation
class AccessMaintenanceViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                               mixins.RetrieveModelMixin,
                               mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                               viewsets.GenericViewSet):
    queryset = AccessMaintenance.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AccessMaintenanceSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели SecurityLogging
class AuditExecutionAndTestingViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                      mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AuditExecutionAndTesting.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuditExecutionAndTestingSerializer
    permission_classes = [IsForMany]


class AuditPreparationAndPlanningViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                         mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = AuditPreparationAndPlanning.objects.all()
    pagination_class = DocumentPagination
    serializer_class = AuditPreparationAndPlanningSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели SecurityMisconfiguration
class ResultsAnalysisAndReportingViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                         mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = ResultsAnalysisAndReporting.objects.all()
    pagination_class = DocumentPagination
    serializer_class = ResultsAnalysisAndReportingSerializer
    permission_classes = [IsForMany]


# Продолжаем создавать вьюсеты аналогично для остальных моделей...

# Создаем вьюсет для модели XSSAttack
class DataAnalysisAndDocumentationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                          mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = DataAnalysisAndDocumentation.objects.all()
    pagination_class = DocumentPagination
    serializer_class = DataAnalysisAndDocumentationSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели KnownVulnerabilities
class VulnerabilityAnalysisViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                   mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = VulnerabilityAnalysis.objects.all()
    pagination_class = DocumentPagination
    serializer_class = VulnerabilityAnalysisSerializer
    permission_classes = [IsForMany]


# Создаем вьюсет для модели InsecureDeserializationAttack
class InformationGatheringViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                  mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = InformationGathering.objects.all()
    pagination_class = DocumentPagination
    serializer_class = InformationGatheringSerializer
    permission_classes = [IsForMany]
