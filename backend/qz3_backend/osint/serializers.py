from rest_framework import serializers
from .models import Osint, Source


class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = '__all__'


class OsintSerializer(serializers.ModelSerializer):
    source = SourceSerializer(many=True, read_only=True)

    class Meta:
        model = Osint
        fields = ['id', 'created_at',
                  'updated_at', 'project', 'document', 'organizationName', 'personName', 'goalsAndTasks',
                  'dataCollection',
                  'dataFilteringAndAnalysis', 'dataStorage', 'source']


class OsintListSerializer(serializers.ModelSerializer):
    source = SourceSerializer(many=True, read_only=True)

    class Meta:
        model = Osint
        fields = ['id', 'created_at',
                  'updated_at', 'project', 'document', 'organizationName', 'personName', 'goalsAndTasks',
                  'dataCollection',
                  'dataFilteringAndAnalysis', 'dataStorage', 'source']
