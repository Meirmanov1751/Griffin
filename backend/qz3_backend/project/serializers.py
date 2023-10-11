from rest_framework import serializers

from osint.serializers import OsintSerializer
from pentesting.serializers import PentestListSerializer
from .models import Project


class ProjectListSerializer(serializers.ModelSerializer):
    pentest = PentestListSerializer(read_only=True, many=True)
    Osint = OsintSerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = [
            'id',
            'company',
            'name',
            'leader',
            'created_at',
            'updated_at',
            'pentest',
            'Osint',
        ]



class ProjectSerializer(serializers.ModelSerializer):
    pentest = PentestListSerializer(read_only=True, many=True)
    Osint = OsintSerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = [
            'id',
            'company',
            'name',
            'leader',
            'created_at',
            'updated_at',
            'pentest',
            'Osint',
        ]
