
from django.urls import path
from . import views


urlpatterns = [
    path('tableau_de_bord/', views.adminPanel, name='dashboard_page'),


]
