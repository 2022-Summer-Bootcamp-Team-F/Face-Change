from pyexpat import model
from django.db import models
from django.utils.timezone import datetime

class Input_Image_URL(models.Model):
    pub_date = models.DateTimeField('date published', default=datetime.now, editable=False)
    image_url = models.CharField(max_length=100)
    