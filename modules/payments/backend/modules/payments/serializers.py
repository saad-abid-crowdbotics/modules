from .models import StripeSetting
from rest_framework import serializer

class StripeSettingSerializer(serializer.ModelSerializer):
    class Meta:
        model = StripeSetting
        fields = '__all__'