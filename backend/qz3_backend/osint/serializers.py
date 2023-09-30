from rest_framework import serializers
from .models import Osint


class OsintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Osint
        fields = '__all__'


class OsintListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Osint
        fields = '__all__'
