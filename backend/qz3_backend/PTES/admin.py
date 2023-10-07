from django.contrib import admin

from .models import AuditInitiation, AuditCompletion, AccessMaintenance, AuditExecutionAndTesting, \
    AuditPreparationAndPlanning, ResultsAnalysisAndReporting, DataAnalysisAndDocumentation, VulnerabilityAnalysis, \
    InformationGathering

# Register your models here.
admin.site.register(AuditInitiation)
admin.site.register(AuditCompletion)
admin.site.register(AccessMaintenance)
admin.site.register(AuditExecutionAndTesting)
admin.site.register(AuditPreparationAndPlanning)
admin.site.register(ResultsAnalysisAndReporting)
admin.site.register(DataAnalysisAndDocumentation)
admin.site.register(VulnerabilityAnalysis)
admin.site.register(InformationGathering)
