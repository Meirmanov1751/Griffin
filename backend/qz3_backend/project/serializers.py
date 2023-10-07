from rest_framework import serializers

from .models import Project


class ProjectListSerializer(serializers.ModelSerializer):
    # customer = serializers.SlugRelatedField(slug_field='first_name', read_only=True)
    # products = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    # customer = serializers.SlugRelatedField(slug_field='first_name', read_only=True)
    # products = serializers.SlugRelatedField(slug_field='name',many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'
