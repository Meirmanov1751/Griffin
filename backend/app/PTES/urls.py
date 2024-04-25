from django.urls import path

from rest_framework.routers import DefaultRouter

from .views import VulnerabilityAnalysisViewSet, InformationGatheringViewSet, DataAnalysisAndDocumentationViewSet, \
    ResultsAnalysisAndReportingViewSet, AuditCompletionViewSet, AuditInitiationViewSet, AccessMaintenanceViewSet, \
    VulnerabilityAnalysis, AuditExecutionAndTestingViewSet, AuditPreparationAndPlanningViewSet

router = DefaultRouter()

router.register('PTES/VulnerabilityAnalysis', VulnerabilityAnalysisViewSet)
router.register('PTES/InformationGathering', InformationGatheringViewSet)
router.register('PTES/DataAnalysisAndDocumentation', DataAnalysisAndDocumentationViewSet)
router.register('PTES/ResultsAnalysisAndReporting', ResultsAnalysisAndReportingViewSet)
router.register('PTES/AuditCompletion', AuditCompletionViewSet)
router.register('PTES/AuditInitiation', AuditInitiationViewSet)
router.register('PTES/AccessMaintenance', AccessMaintenanceViewSet)
router.register('PTES/AuditExecutionAndTesting', AuditExecutionAndTestingViewSet)
router.register('PTES/AuditPreparationAndPlanning', AuditPreparationAndPlanningViewSet)