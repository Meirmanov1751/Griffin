# Generated by Django 4.2 on 2023-09-12 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('osint', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='osint',
            name='dataCollection',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='dataFilteringAndAnalysis',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='dataStorage',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='goalsAndTasks',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='organizationName',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='personName',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='osint',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
