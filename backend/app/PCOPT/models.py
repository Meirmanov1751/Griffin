from django.db import models

from pentesting.models import Pentest


# Create your models here.
class PCOPT(models.Model):
    pentest = models.OneToOneField(Pentest, on_delete=models.CASCADE, null=True, blank=True,
                                   related_name="PCOPT")
    console_logs = models.TextField()
    console_logs_document = models.FileField(upload_to='documents/pentest/PCOPT', null=True, blank=True)
    buffer = models.TextField()
    buffer_document = models.FileField(upload_to='documents/pentest/PCOPT', null=True, blank=True)
    code_issues = models.TextField()
    code_issues_document = models.FileField(upload_to='documents/pentest/PCOPT', null=True, blank=True)
    list_of_tech = models.TextField()
    list_of_tech_document = models.FileField(upload_to='documents/pentest/PCOPT', null=True, blank=True)
    validation = models.TextField()
    validation_document = models.FileField(upload_to='documents/pentest/PCOPT', null=True, blank=True)



