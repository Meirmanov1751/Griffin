from django.db import models

from pentesting.models import Pentest


# Create your models here.
class AssetIdentification(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="AssetIdentification")
    asset_inventory = models.TextField(blank=True, null=True)
    asset_classification = models.TextField(blank=True, null=True)
    asset_cost_evaluation = models.TextField(blank=True, null=True)
    protection_level_assessment = models.TextField(blank=True, null=True)
    vulnerability_identification = models.TextField(blank=True, null=True)
    data_documentation_and_classification = models.TextField(blank=True, null=True)
    critical_process_identification = models.TextField(blank=True, null=True)
    asset_mapping = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class VulnerabilityAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="VulnerabilityAssessment")
    asset_scanning = models.TextField(blank=True, null=True)
    vulnerability_scanners = models.TextField(blank=True, null=True)
    vulnerability_scan_results_analysis = models.TextField(blank=True, null=True)
    vulnerability_prioritization = models.TextField(blank=True, null=True)
    action_plan_development = models.TextField(blank=True, null=True)
    vulnerabilityre_assessment = models.TextField(blank=True, null=True)
    vulnerability_monitoring = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class ThreatAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="ThreatAssessment")
    threat_identification = models.TextField(blank=True, null=True)
    potential_damage_assessment = models.TextField(blank=True, null=True)
    probability_assessment = models.TextField(blank=True, null=True)
    threat_ranking = models.TextField(blank=True, null=True)
    risk_mitigation_measures = models.TextField(blank=True, null=True)
    continuous_monitoring = models.TextField(blank=True, null=True)
    incident_response_plan_creation = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    security_audit = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class SecurityPolicyAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="SecurityPolicyAssessment")
    existing_policies_and_procedures = models.TextField(blank=True, null=True)
    compliance_with_security_standards = models.TextField(blank=True, null=True)
    effectiveness_assessment = models.TextField(blank=True, null=True)
    relevance_assessment = models.TextField(blank=True, null=True)
    security_audit = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    policy_improvements = models.TextField(blank=True, null=True)
    monitoring_and_compliance = models.TextField(blank=True, null=True)
    incident_response_instructions = models.TextField(blank=True, null=True)
    update_and_review = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AuthenticationAuthorizationAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="AuthenticationAuthorizationAssessment")
    authentication_methods_identification = models.TextField(blank=True, null=True)
    password_strength_evaluation = models.TextField(blank=True, null=True)
    access_level_assessment = models.TextField(blank=True, null=True)
    penetration_testing = models.TextField(blank=True, null=True)
    multi_factor_authentication_evaluation = models.TextField(blank=True, null=True)
    monitoring_and_logging = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    incident_response_instructions = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)
    security_standards_compliance = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class MonitoringIncidentDetectionAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="MonitoringIncidentDetectionAssessment")
    monitoring_tools_identification = models.TextField(blank=True, null=True)
    monitoring_goals_identification = models.TextField(blank=True, null=True)
    data_and_log_analysis = models.TextField(blank=True, null=True)
    effectiveness_of_detection = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    monitoring_system_testing = models.TextField(blank=True, null=True)
    integration_with_response_systems = models.TextField(blank=True, null=True)
    incident_detection_policies_and_procedures = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)
    incident_analysis = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class AccessControlAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="AccessControlAssessment")
    monitoring_tools_identification = models.TextField(blank=True, null=True)
    monitoring_goals_identification = models.TextField(blank=True, null=True)
    data_and_log_analysis = models.TextField(blank=True, null=True)
    effectiveness_of_detection = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    monitoring_system_testing = models.TextField(blank=True, null=True)
    integration_with_response_systems = models.TextField(blank=True, null=True)
    incident_detection_policies_and_procedures = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)
    incident_analysis = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class DataProtectionAndSecurityMonitoring(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="DataProtectionAndSecurityMonitoring")
    monitoring_tools = models.TextField(blank=True, null=True)
    monitoring_goals = models.TextField(blank=True, null=True)
    data_and_logs_analysis = models.TextField(blank=True, null=True)
    detection_effectiveness = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    monitoring_system_testing = models.TextField(blank=True, null=True)
    integration_with_response_systems = models.TextField(blank=True, null=True)
    detection_policies_and_procedures = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)
    incident_analysis = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class PhysicalSecurityAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="PhysicalSecurityAssessment")
    access_to_physical_areas = models.TextField(blank=True, null=True)
    identification_mechanisms = models.TextField(blank=True, null=True)
    access_monitoring = models.TextField(blank=True, null=True)
    equipment_physical_protection = models.TextField(blank=True, null=True)
    fire_safety_measures = models.TextField(blank=True, null=True)
    power_and_backup_systems = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    audit_and_compliance_check = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class UserTrainingAndAwareness(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="UserTrainingAndAwareness")
    training_programs_evaluation = models.TextField(blank=True, null=True)
    physical_access_evaluation = models.TextField(blank=True, null=True)
    identification_mechanisms_evaluation = models.TextField(blank=True, null=True)
    access_monitoring_evaluation = models.TextField(blank=True, null=True)
    equipment_protection_evaluation = models.TextField(blank=True, null=True)
    fire_safety_evaluation = models.TextField(blank=True, null=True)
    power_and_backup_evaluation = models.TextField(blank=True, null=True)
    employee_training_evaluation = models.TextField(blank=True, null=True)
    audit_and_compliance_evaluation = models.TextField(blank=True, null=True)
    update_and_improvement_evaluation = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class IncidentRecoveryAndContinuity(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="IncidentRecoveryAndContinuity")
    recovery_plans_evaluation = models.TextField(blank=True, null=True)
    physical_access_evaluation = models.TextField(blank=True, null=True)
    identification_mechanisms_evaluation = models.TextField(blank=True, null=True)
    access_monitoring_evaluation = models.TextField(blank=True, null=True)
    equipment_protection_evaluation = models.TextField(blank=True, null=True)
    fire_safety_evaluation = models.TextField(blank=True, null=True)
    power_and_backup_evaluation = models.TextField(blank=True, null=True)
    employee_training_evaluation = models.TextField(blank=True, null=True)
    audit_and_compliance_evaluation = models.TextField(blank=True, null=True)
    update_and_improvement_evaluation = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class NetworkSecurityAudit(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="NetworkSecurityAudit")
    network_configuration_audit = models.TextField(blank=True, null=True)
    asset_identification = models.TextField(blank=True, null=True)
    vulnerability_management = models.TextField(blank=True, null=True)
    authentication_and_authorization = models.TextField(blank=True, null=True)
    access_control = models.TextField(blank=True, null=True)
    network_activity_monitoring = models.TextField(blank=True, null=True)
    malware_and_attack_protection = models.TextField(blank=True, null=True)
    physical_security = models.TextField(blank=True, null=True)
    updates_and_patches = models.TextField(blank=True, null=True)
    backup_and_recovery = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'


class ComplianceAssessment(models.Model):
    pentest = models.ForeignKey(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="ComplianceAssessment")
    physical_access_controls = models.TextField(blank=True, null=True)
    identification_mechanisms = models.TextField(blank=True, null=True)
    access_monitoring = models.TextField(blank=True, null=True)
    equipment_physical_protection = models.TextField(blank=True, null=True)
    fire_safety_measures = models.TextField(blank=True, null=True)
    power_and_backup_systems = models.TextField(blank=True, null=True)
    employee_training = models.TextField(blank=True, null=True)
    audit_and_compliance_check = models.TextField(blank=True, null=True)
    update_and_improvement = models.TextField(blank=True, null=True)
    legal_compliance = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.created_at} | {self.updated_at}'
