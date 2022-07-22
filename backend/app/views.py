from app.serializers import UrlSerializer
from rest_framework.response import Response
from app.models import Input_Image_URL
from rest_framework.views import APIView
from django.http import Http404
from config.settings import IMAGE_URL, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_STORAGE_BUCKET_NAME
import boto3, uuid

class input_im_url(APIView):
    def post(self, request):
        files = request.FILES.get('files')
        s3r = boto3.resource('s3', 
        aws_access_key_id= AWS_ACCESS_KEY_ID, 
        aws_secret_access_key= AWS_SECRET_ACCESS_KEY)

        files._set_name(str(uuid.uuid4()))
        s3r.Bucket(AWS_STORAGE_BUCKET_NAME).put_object(
            Key='image/%s'%(files), 
            Body=files, 
            ContentType='jpg')
        Input_Image_URL.objects.create(
            image_url = IMAGE_URL + 'image/' + "%s"%(files),
            )
        return Response({'message' : 'done'})

# class im_detail(APIView):
#     def get_object(self,pk):
#         try:
#             return Image_URL.objects.get(pk=pk)
#         except Image_URL.DoesNotExist:
#             return Http404
    
#     def get(self, request, pk):
#         data = self.get_object(pk)
#         serializer = UrlSerializer(data)
#         return Response(serializer.data)
