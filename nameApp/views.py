from django.shortcuts import render
from django.http import HttpResponse
from .forms import ContactForm



# Create your views here.
def home(request):
    return render(request, "build.html")

def packages(request):
    return render(request, "project.html")
def tipsandtricks(request):
    return render(request, "tipsandtricks.html")
def whyus(request):
    return render(request, "whyus.html")
def contactus(request):
    return render(request, "contactus.html")
def aboutus(request):
    return render(request, "aboutus.html")
def paris(request):
    return render(request, "paris.html")
def rome(request):
    return render(request, "rome.html")
def dubai(request):
    return render(request, "dubai.html")
def zanzibar(request):
    return render(request, "zanzibar.html")
def thailand(request):
    return render(request, "thailand.html")
def nyc(request):
    return render(request, "nyc.html")

def contactus_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():

            return HttpResponse("Message sent successfully!")
        else:
            return HttpResponse(f"There was an error in the form: {form.errors}")
    else:
        form = ContactForm()

    return render(request, 'contactus.html', {'form': form})




