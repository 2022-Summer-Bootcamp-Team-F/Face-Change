from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import input_im_url

urlpatterns = [
    path('imgs/', input_im_url.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)