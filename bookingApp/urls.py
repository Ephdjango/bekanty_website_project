
from django.urls import path
from . import views


urlpatterns = [
    path('reservation/', views.bookingPage, name='booking_page'),
    path('sending_data_page/', views.bookingPageRequest)

]
