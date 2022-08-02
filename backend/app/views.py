from yaml import serialize
from .serializers import UrlSerializer, UrlRequestSerializer, UrlResponseSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from app.models import Input_Image_URL
from rest_framework.views import APIView
from rest_framework import serializers
from django.http import Http404
from config.settings import IMAGE_URL, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_STORAGE_BUCKET_NAME
import boto3, uuid
from drf_yasg.utils import swagger_auto_schema
from rest_framework.parsers import MultiPartParser

class input_im_url(APIView):
    # open filefiled 
    parser_classes = [MultiPartParser]
    
    @swagger_auto_schema(
        tags=["Image Upload"],
        request_body=UrlRequestSerializer,
        responses={
             200: UrlResponseSerializer,
             400: '입력값 유효성 검증 실패',
            #  500: '서버에러'
        }  
    )

    def post(self, request):
        files = request.FILES.get('files')
        #print(request.data)
        style_enum = request.data['style_enum']
        style_types = ['cartoon', 'caricature', 'anime', 'arcane', 'comic', 'pixar', 'slamdunk']
        
        if files is not None:
            s3r = boto3.resource('s3', 
                aws_access_key_id= AWS_ACCESS_KEY_ID, 
                aws_secret_access_key= AWS_SECRET_ACCESS_KEY
            )        

            files._set_name(str(uuid.uuid4()))
            s3r.Bucket(AWS_STORAGE_BUCKET_NAME).put_object(
                Key='image/%s'%(files), 
                Body=files, 
                ContentType='jpg'
            )
            image_url = IMAGE_URL + 'image/' + "%s"%(files)

            # serialzier를 data에 dict 형태로 초기화
            serialize = UrlSerializer(data={"image_url":image_url, "style_enum":style_enum})
            
            # serializer로 제대로 된 데이터가 들어왔는 지 확인            
            if serialize.is_valid():
                info = serialize.save()
                return Response({'message' : 'success!', 'date':info.date, 'image_url':info.image_url, 'style_enum':info.style_enum, 'style_name':style_types[info.style_enum]})
        return Response({'message' : 'fail!'}, status=400)

class response_im_url(APIView):
    def get(self, request):
        
        #celery에서 반환된 url 짜야됨        
        result0 = IMAGE_URL + 'image/' + "a451279f-c566-4f18-90e6-12f233f5e69d"
        result1 = IMAGE_URL + 'image/' + "a4af9ad1-df60-47ca-a339-5f41ca1f308d"
        result2 = IMAGE_URL + 'image/' + "56b4faf8-0738-4963-96e5-e72a94ca6e01"
        result3 = IMAGE_URL + 'image/' + "9c78949c-e386-4dbb-ab27-8c855108bdf8"
        result4 = IMAGE_URL + 'image/' + "c6024d3e-42d4-43ce-8ce4-3430ebdf8786"
        return Response({'message' : 'success!', 'result0':result0, 'result1':result1,
                         'result2':result2, 'result3':result3, 'result4':result4})


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
