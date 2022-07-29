from rest_framework import serializers
from app.models import Input_Image_URL

class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Input_Image_URL
        fields = ['pub_date', 'image_url']

    def create(self, validated_data):
        return Input_Image_URL.objects.create(**validated_data)

    # validated_data는 Dict 형태로 .get('key값', 기본값)
    def update(self, instance, validated_data):
        instance.pub_date = validated_data.get('pub_date', instance.pub_date)
        instance.image_url = validated_data.get('image_url', instance.image_url)
        instance.save()
        return instance
    
# swagger inpu img test용
class UrlRequestSerializer(serializers.Serializer):
    files = serializers.FileField(required=False)
    
# response form
class UrlResponseSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=100)
    date = serializers.CharField(max_length=200)
    image_url = serializers.CharField(max_length=200)