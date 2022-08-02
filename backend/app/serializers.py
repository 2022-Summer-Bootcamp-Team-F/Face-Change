from unittest.util import _MAX_LENGTH
from rest_framework import serializers
from app.models import Input_Image_URL

class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Input_Image_URL
        fields = ['date', 'image_url', 'style_enum']

    def create(self, validated_data):
        return Input_Image_URL.objects.create(**validated_data)

    # validated_data는 Dict 형태로 .get('key값', 기본값)
    def update(self, instance, validated_data):
        instance.date = validated_data.get('date', instance.date)
        instance.image_url = validated_data.get('image_url', instance.image_url)
        instance.style_enum = validated_data.get('style_enum', instance.style_enum)
        instance.save()
        return instance
    
# swagger input image test용
class UrlRequestSerializer(serializers.Serializer):
    files = serializers.FileField(required=False)
    style_enum = serializers.IntegerField()

# response form
class UrlResponseSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=100)
    date = serializers.CharField(max_length=200)
    image_url = serializers.CharField(max_length=200)
    style_enum = serializers.IntegerField()
    style_name = serializers.CharField(max_length=100)