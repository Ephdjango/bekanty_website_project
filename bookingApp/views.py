from django.shortcuts import render
from .models import BookingForm

# Create your views here.

def bookingPage(request):
        return render(request, 'booking.html')

def bookingPageRequest(request):

        full_name=request.POST.get('name1')
        cni_number=request.POST.get('cni1')
        phone_number=request.POST.get('phone1')
        person_number=request.POST.get('person1')
        enter_date=request.POST.get('enter_date1')
        exit_date=request.POST.get('exit_date1')

        o_ref=BookingForm(full_name=full_name, cni_number=cni_number, phone_number=phone_number,
                                person_number=person_number, enter_date=enter_date, exit_date=exit_date)
        o_ref.save()

        return render(request, 'booking.html', {"message": "Votre Réservation a été effectuée avec Succès !"})