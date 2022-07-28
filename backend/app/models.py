from pyexpat import model
from django.db import models
from django.utils.timezone import datetime

class Input_Image_URL(models.Model):
    iiu_id = models.AutoField(primary_key=True)
    pub_date = models.DateTimeField('date published', default=datetime.now, editable=False, help_text='등록시간')
    image_url = models.CharField(max_length=200, null=False, help_text='Image url')
    style_enum = models.IntegerField() 