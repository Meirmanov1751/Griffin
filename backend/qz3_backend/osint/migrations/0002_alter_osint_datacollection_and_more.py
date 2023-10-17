# Generated by Django 4.2 on 2023-10-14 12:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
        ('osint', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='osint',
            name='dataCollection',
            field=models.TextField(blank=True, null=True, verbose_name='Сбор данных'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='dataFilteringAndAnalysis',
            field=models.TextField(blank=True, null=True, verbose_name='Фильтрация и анализ данных'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='dataStorage',
            field=models.TextField(blank=True, null=True, verbose_name='Хранение данных'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='document',
            field=models.FileField(blank=True, null=True, upload_to='documents/osint', verbose_name='Документ'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='goalsAndTasks',
            field=models.TextField(blank=True, null=True, verbose_name='Цели и задачи'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='organizationName',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Название организации'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='personName',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Имя лица'),
        ),
        migrations.AlterField(
            model_name='osint',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='osints', to='project.project', verbose_name='Проект'),
        ),
        migrations.AlterField(
            model_name='source',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Дата создания'),
        ),
        migrations.AlterField(
            model_name='source',
            name='document_file',
            field=models.FileField(blank=True, null=True, upload_to='documents/osint/source', verbose_name='Файл документа'),
        ),
        migrations.AlterField(
            model_name='source',
            name='document_title',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Название документа'),
        ),
        migrations.AlterField(
            model_name='source',
            name='document_type',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Тип документа'),
        ),
        migrations.AlterField(
            model_name='source',
            name='event_date',
            field=models.DateField(blank=True, null=True, verbose_name='Дата события'),
        ),
        migrations.AlterField(
            model_name='source',
            name='event_description',
            field=models.TextField(blank=True, null=True, verbose_name='Описание события'),
        ),
        migrations.AlterField(
            model_name='source',
            name='event_location',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Место события'),
        ),
        migrations.AlterField(
            model_name='source',
            name='keyword',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Ключевое слово'),
        ),
        migrations.AlterField(
            model_name='source',
            name='latitude',
            field=models.FloatField(blank=True, null=True, verbose_name='Широта'),
        ),
        migrations.AlterField(
            model_name='source',
            name='location_address',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Адрес местоположения'),
        ),
        migrations.AlterField(
            model_name='source',
            name='location_description',
            field=models.TextField(blank=True, null=True, verbose_name='Описание местоположения'),
        ),
        migrations.AlterField(
            model_name='source',
            name='longitude',
            field=models.FloatField(blank=True, null=True, verbose_name='Долгота'),
        ),
        migrations.AlterField(
            model_name='source',
            name='note_text',
            field=models.TextField(blank=True, null=True, verbose_name='Текст заметки'),
        ),
        migrations.AlterField(
            model_name='source',
            name='osint',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='source', to='osint.osint', verbose_name='OSINT'),
        ),
        migrations.AlterField(
            model_name='source',
            name='source_description',
            field=models.TextField(blank=True, null=True, verbose_name='Описание источника'),
        ),
        migrations.AlterField(
            model_name='source',
            name='source_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Название источника'),
        ),
        migrations.AlterField(
            model_name='source',
            name='source_url',
            field=models.URLField(blank=True, null=True, verbose_name='URL источника'),
        ),
    ]
