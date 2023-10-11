from django.db import models

from pentesting.models import Pentest


# Create your models here.
class AuditInitiation(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_AuditInitiation")
    audit_objectives = models.TextField(blank=True, null=True)
    methodology_and_tools = models.TextField(blank=True, null=True)
    audit_schedule = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class InformationGathering(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_InformationGathering")
    asset_search_and_scanning = models.TextField(blank=True, null=True)
    port_and_service_analysis = models.TextField(blank=True, null=True)
    publicly_available_documentation = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class VulnerabilityAnalysis(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_VulnerabilityAnalysis")
    vulnerability_search = models.TextField(blank=True, null=True)
    exploitation_attempts = models.TextField(blank=True, null=True)
    system_reaction_evaluation = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AccessMaintenance(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_AccessMaintenance")
    access_maintenance_mechanisms = models.TextField(blank=True, null=True)
    attacker_activity_masking = models.TextField(blank=True, null=True)
    activity_monitoring_and_access_to_resources = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class DataAnalysisAndDocumentation(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_DataAnalysisAndDocumentation")
    audit_steps_record = models.TextField(blank=True, null=True)
    issue_description_and_remediation_recommendations = models.TextField(blank=True, null=True)
    audit_report = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AuditCompletion(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_AuditCompletion")
    client_meeting = models.TextField(blank=True, null=True)
    audit_report_delivery = models.TextField(blank=True, null=True)
    project_closure = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AuditPreparationAndPlanning(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_AuditPreparationAndPlanning")
    audit_objectives_and_scope = models.TextField(blank=True, null=True)
    audit_plan = models.TextField(blank=True, null=True)
    audit_team_and_roles = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AuditExecutionAndTesting(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_AuditExecutionAndTesting")
    penetration_testing = models.TextField(blank=True, null=True)
    vulnerability_data_collection_and_analysis = models.TextField(blank=True, null=True)
    security_policy_testing = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class ResultsAnalysisAndReporting(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PTES_ResultsAnalysisAndReporting")
    data_processing = models.TextField(blank=True, null=True)
    risk_assessment = models.TextField(blank=True, null=True)
    detailed_audit_report_with_recommendations = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'
