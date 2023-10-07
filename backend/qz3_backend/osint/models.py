from django.db import models

from project.models import Project


class Osint(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True,
                                related_name="Osint")
    organizationName = models.CharField(max_length=200, null=True, blank=True)
    personName = models.CharField(max_length=200, null=True, blank=True)
    goalsAndTasks = models.TextField(null=True, blank=True)
    dataCollection = models.TextField(null=True, blank=True)
    dataFilteringAndAnalysis = models.TextField(null=True, blank=True)
    dataStorage = models.TextField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    clickjacking = models.BooleanField(default=False)
    csrf = models.BooleanField(default=False)
    info = models.JSONField(null=True, blank=True)
    open_ports = models.PositiveIntegerField(null=True, blank=True)
    sql_injection = models.BooleanField(default=False)
    xss = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.organizationName} | {self.url} | {self.personName} | {self.goalsAndTasks}'

    class Meta:
        verbose_name = 'OSINT'
        verbose_name_plural = 'OSINTs'
        ordering = ['organizationName']
