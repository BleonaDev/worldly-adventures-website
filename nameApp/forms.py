
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    lastname = forms.CharField(max_length=100)
    phonenr = forms.CharField(max_length=15)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

