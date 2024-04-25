from django.db import models

from project.models import Project


class Osint(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True, related_name="osints", verbose_name="Проект")
    document = models.FileField(upload_to='documents/osint', null=True, blank=True, verbose_name="Документ")
    organizationName = models.CharField(max_length=200, null=True, blank=True, verbose_name="Название организации")
    personName = models.CharField(max_length=200, null=True, blank=True, verbose_name="Имя лица")
    goalsAndTasks = models.TextField(null=True, blank=True, verbose_name="Цели и задачи")
    dataCollection = models.TextField(null=True, blank=True, verbose_name="Сбор данных")
    dataFilteringAndAnalysis = models.TextField(null=True, blank=True, verbose_name="Фильтрация и анализ данных")
    dataStorage = models.TextField(null=True, blank=True, verbose_name="Хранение данных")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.organizationName} | {self.personName} | {self.goalsAndTasks}'

    class Meta:
        verbose_name = 'OSINT'
        verbose_name_plural = 'OSINTs'
        ordering = ['organizationName']

class Source(models.Model):
    osint = models.ForeignKey(Osint, on_delete=models.CASCADE, related_name="source", verbose_name="source")
    source_name = models.CharField(null=True, blank=True, max_length=100, verbose_name="Название источника")
    source_url = models.URLField(null=True, blank=True, verbose_name="URL источника")
    source_description = models.TextField(null=True, blank=True, verbose_name="Описание источника")
    event_date = models.DateField(null=True, blank=True, verbose_name="Дата события")
    event_location = models.CharField(null=True, blank=True, max_length=100, verbose_name="Место события")
    event_description = models.TextField(null=True, blank=True, verbose_name="Описание события")
    document_title = models.CharField(null=True, blank=True, max_length=100, verbose_name="Название документа")
    document_type = models.CharField(null=True, blank=True, max_length=50, verbose_name="Тип документа")
    document_file = models.FileField(null=True, blank=True, upload_to='documents/osint/source', verbose_name="Файл документа")
    latitude = models.FloatField(null=True, blank=True, verbose_name="Широта")
    longitude = models.FloatField(null=True, blank=True, verbose_name="Долгота")
    location_address = models.CharField(null=True, blank=True, max_length=100, verbose_name="Адрес местоположения")
    location_description = models.TextField(null=True, blank=True, verbose_name="Описание местоположения")
    keyword = models.CharField(null=True, blank=True, max_length=50, verbose_name="Ключевое слово")
    note_text = models.TextField(null=True, blank=True, verbose_name="Текст заметки")
    created_at = models.DateTimeField(null=True, blank=True, auto_now_add=True, verbose_name="Дата создания")

    def __str__(self):
        return self.source_name

