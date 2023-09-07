from django.db import models

# Create your models here.
class BookingForm(models.Model):
    full_name=models.CharField(max_length=200, null=True)
    cni_number=models.CharField(max_length=200, null=True)
    phone_number=models.CharField(max_length=10, null=True)
    person_number=models.IntegerField(null=True)
    enter_date=models.CharField(max_length=30, null=True)
    exit_date=models.CharField(max_length=30, null=True)

