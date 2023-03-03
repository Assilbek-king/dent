from django.shortcuts import render
from main.models import *
# Create your views here.
import requests
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import render

def indexHandler(request):
    doctors = Doctor.objects.filter(status=True)
    services = Service.objects.filter(status=True)
    otzivs = Otziv.objects.all()
    galeries = Gallery.objects.all()

    # galleries = Gallery.objects.all()
    # reviews = Review.objects.filter(status=True)

    if request.method == 'POST':
        # BOT_TOKEN = "6206491580:AAGJEj0g6WLizDwRmf0Q9AAsMjZok1DHw24"
        # TELEGRAM_CHAT_ID = "604469732"
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        comment = request.POST.get('comment')
        feedback = Feedback(name=name, phone=phone, comment=comment)
        feedback.save()
        # if comment:
        #     message = f"Новый клиент\nИмя: {name}\nНомер: {phone}\nТовар: {comment}"
        # else:
        #     message = f"Новый клиент\nИмя: {name}\nНомер: {phone}"
        # response = requests.get(
        #     f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage?chat_id={TELEGRAM_CHAT_ID}&text={message}")
        from django.shortcuts import redirect
        return redirect('/')



    return render(request, 'index.htm', {
        'doctors': doctors,
        'otzivs': otzivs,
        'services': services,
    })
