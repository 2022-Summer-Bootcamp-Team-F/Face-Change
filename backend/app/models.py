from pyexpat import model
from django.db import models
from django.utils.timezone import datetime

class Input_Image_URL(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField('date published', default=datetime.now, editable=False, help_text='등록시간')
    image_url = models.CharField(max_length=200, null=False, help_text='Image url')
    style_enum = models.IntegerField() 
    
class Result_Image_URL(models.Model):
    id = models.AutoField(primary_key=True)
    image_id = models.ForeignKey(Input_Image_URL, on_delete=models.CASCADE)
    result0_url = models.CharField(max_length=200, null=False, help_text='Image url')
    result1_url = models.CharField(max_length=200, null=False, help_text='Image url')
    result2_url = models.CharField(max_length=200, null=False, help_text='Image url')
    result3_url = models.CharField(max_length=200, null=False, help_text='Image url')
    result4_url = models.CharField(max_length=200, null=False, help_text='Image url')