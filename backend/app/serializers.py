from rest_framework import serializers
from app.models import Input_Image_URL

class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Input_Image_URL
        fields = ['image_url']
        