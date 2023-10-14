# Generated by Django 4.2 on 2023-10-14 10:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('PTES', '0001_initial'),
        ('pentesting', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vulnerabilityanalysis',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_VulnerabilityAnalysis', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='resultsanalysisandreporting',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_ResultsAnalysisAndReporting', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='informationgathering',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_InformationGathering', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='dataanalysisanddocumentation',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_DataAnalysisAndDocumentation', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='auditpreparationandplanning',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_AuditPreparationAndPlanning', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='auditinitiation',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_AuditInitiation', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='auditexecutionandtesting',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_AuditExecutionAndTesting', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='auditcompletion',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_AuditCompletion', to='pentesting.pentest'),
        ),
        migrations.AddField(
            model_name='accessmaintenance',
            name='pentest',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PTES_AccessMaintenance', to='pentesting.pentest'),
        ),
    ]