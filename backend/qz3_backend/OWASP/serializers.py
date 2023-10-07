from rest_framework import serializers
from .models import AuthenticationViolation, AccessControlViolation, XXEViolation, SensitiveDataExposure, Injection, \
    SecurityMisconfiguration, KnownVulnerabilities, InsecureDeserializationAttack, XSSAttack, SecurityLogging


# Создаем сериализатор для модели AuthenticationViolation
class AuthenticationViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthenticationViolation
        fields = '__all__'


# Создаем сериализатор для модели AccessControlViolation
class AccessControlViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessControlViolation
        fields = '__all__'


# Создаем сериализатор для модели XXEViolation
class XXEViolationSerializer(serializers.ModelSerializer):
    class Meta:
        model = XXEViolation
        fields = '__all__'


# Создаем сериализатор для модели SensitiveDataExposure
class SensitiveDataExposureSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensitiveDataExposure
        fields = '__all__'


# Создаем сериализатор для модели Injection
class InjectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Injection
        fields = '__all__'


# Создаем сериализатор для модели SecurityMisconfiguration
class SecurityMisconfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecurityMisconfiguration
        fields = '__all__'


class SecurityLoggingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecurityLogging
        fields = '__all__'


# Создаем сериализатор для модели KnownVulnerabilities
class KnownVulnerabilitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnownVulnerabilities
        fields = '__all__'


# Создаем сериализатор для модели InsecureDeserializationAttack
class InsecureDeserializationAttackSerializer(serializers.ModelSerializer):
    class Meta:
        model = InsecureDeserializationAttack
        fields = '__all__'


# Создаем сериализатор для модели XSSAttack
class XSSAttackSerializer(serializers.ModelSerializer):
    class Meta:
        model = XSSAttack
        fields = '__all__'
